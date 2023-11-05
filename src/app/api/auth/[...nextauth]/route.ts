import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ROUTES } from '@/features/navigation/navigation-routes'
import { ENV_VAR, fetchService } from '@/service'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        try {
          const user = await fetchService(
            `${ENV_VAR.AUTH0_ISSUER}/oauth/token`,
            'POST',
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            {
              grant_type: ENV_VAR.GRANT_TYPE,
              username: credentials?.email,
              password: credentials?.password,
              client_id: ENV_VAR.AUTH0_CLIENT_ID,
              client_secret: ENV_VAR.AUTH0_CLIENT_SECRET
            },
            'application/x-www-form-urlencoded'
          )
          if (user.error) throw user
          return user
        } catch (error) {
          console.error(error)
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: ROUTES.login.path
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
