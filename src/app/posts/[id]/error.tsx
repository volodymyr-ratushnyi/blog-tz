'use client'

import { useEffect } from 'react'
import { notFound } from 'next/navigation'
import axios from 'axios'

export default function PostError({ error }: { error: Error }) {
    useEffect(() => {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            notFound()
        }
    }, [error])

    return null
}