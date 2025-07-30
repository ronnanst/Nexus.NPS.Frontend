'use client'
import { useUser } from '@/common/context/UserContext'
import { usePageTitle } from '@/common/hooks/general/usePageTitle'
import { DashboardViewPage } from '@/components/Dashboard/DashboardViewPage'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function DashboardView() {
    const { userId } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!userId) router.push('/')
    }, [userId])
    usePageTitle('Dashboard')

    return (
        <Box
            sx={{
                padding: '1rem',
                height: '100vh',
                width: '100%',
                background: '#F8F8F8'
            }}
        >
            <DashboardViewPage/>
        </Box>
    )
}