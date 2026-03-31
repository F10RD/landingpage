// app/api/demo-access/route.ts
import { NextRequest, NextResponse } from 'next/server'

const DEMO_SECRET = process.env.DEMO_SECRET ?? 'byfiord-demo'

const ROUTES: Record<string, string> = {
  pro:    '/',
  beauty: '/beauty',
  barber: '/barber',
}

export async function GET(request: NextRequest) {
  const demo = request.nextUrl.searchParams.get('demo') ?? 'pro'
  const path = ROUTES[demo] ?? '/'

  const response = NextResponse.redirect(
    new URL(`https://demo.byfiord.dev${path}`)
  )

  response.cookies.set('demo_access', DEMO_SECRET, {
    domain: '.byfiord.dev',
    path: '/',
    maxAge: 60 * 60 * 8,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  })

  return response
}