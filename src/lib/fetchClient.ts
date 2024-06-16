import { getSession, signOut } from 'next-auth/react'
import { BASE_URL } from '@/definitions'
import { fetchPayload } from '@/types'

async function fetchClient({
    method = 'GET',
    url,
    body = '',
    token,
    tags,
    isTakeToken = true,
}: fetchPayload) {
    try {
        const session = await getSession()
        const accessToken = token || session?.accessToken

        const response = await fetch(BASE_URL + url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...(isTakeToken &&
                    accessToken && { Authorization: 'Bearer ' + accessToken }),
            },
            body: body || undefined,
            ...(tags && { next: { tags } }),
        })

        if (!response.ok) {
            throw response
        }
        const data = await response.json()
        return data
    } catch (error) {
        if (error instanceof Response) {
            if (error.status === 401) {
                signOut()
            }

            throw error
        }

        throw new Error('Failed to fetch data', { cause: error })
    }
}

export default fetchClient
