import { NextRequest, NextResponse } from 'next/server'

const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  replyTo?: string
) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'contact@byfiord.dev',
      reply_to: replyTo ?? 'contact@byfiord.dev',
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
      'contact@byfiord.dev',
      `New contact: ${name} — ${business || 'no business'}`,
      `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #111;">New message from FIORD contact form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Business:</strong> ${business || '—'}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 12px; border-radius: 6px;">${message}</p>
        </body>
        </html>
      `,
      email // reply_to = adres klienta
    )

    // Auto-reply do klienta
    await sendEmail(
      email,
      `Thanks for reaching out, ${name}!`,
      `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p>Hi ${name},</p>
          <p>Thanks for getting in touch! I've received your message and will get back to you within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to check out some of my recent work at <a href="https://byfiord.dev">byfiord.dev</a>.</p>
          <br/>
          <p>Talk soon,<br/>
          <strong>Artur</strong><br/>
          FIORD — Web Development<br/>
          <a href="https://byfiord.dev">byfiord.dev</a></p>
        </body>
        </html>
      `
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}