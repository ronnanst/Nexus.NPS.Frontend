'use client'
import { useUser } from '@/common/context/UserContext'
import { usePageTitle } from '@/common/hooks/general/usePageTitle'
import { ReviewViewPage } from '@/components/Review/ReviewViewPage'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ReviewView() {
    const { userId } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!userId) router.push('/')
    }, [userId])
    usePageTitle('Review')

    return (
        <Box
            sx={{
                padding: '1rem',
                height: '100vh',
                width: 'auto',
                background: '#F8F8F8'
            }}
        >
            <ReviewViewPage/>
        </Box>
    )
}