import { NextRequest, NextResponse } from 'next/server'

const sendEmail = async (to: string, subject: string, html: string) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'contact@byfiord.dev',  // zmień na własną domenę gdy będziesz miał
      to,
      subject,
      html,
    }),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Resend error: ${JSON.stringify(error)}`)
  }
  return response.json()
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, business, message } = await req.json()

    // Powiadomienie do Ciebie
    await sendEmail(
      'fiord@byfiord.dev', // ← WPISZ SWÓJ EMAIL
      `New contact: ${name} — ${business || 'no business'}`,
      `
        <h2>New message from FIORD contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    )

    // Auto-reply do klienta
    await sendEmail(
      email,
      'Got your message — FIORD',
      `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I'll get back to you within 24 hours.</p>
        <br/>
        <p>— Artur Andrzej Daszczuk / FIORD</p>
      `
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}