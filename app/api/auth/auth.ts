import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import YandexProvider from 'next-auth/providers/yandex'

// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID,
            clientSecret: process.env.YANDEX_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }

            return token
        }
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET
}
