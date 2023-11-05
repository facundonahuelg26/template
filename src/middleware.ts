import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { ROUTES } from '@/features/navigation/navigation-routes'

const routes = [ROUTES.dashboard.path, ROUTES.profile.path]
export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  const pathname = req.nextUrl.pathname
  // const cookieStore = req.cookies.get('next-auth.session-token')

  if (!session) {
    if (routes.includes(pathname)) {
      return NextResponse.redirect(new URL(ROUTES.main.path, req.url))
    }
  } else {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(ROUTES.dashboard.path, req.url))
    }
  }
}
