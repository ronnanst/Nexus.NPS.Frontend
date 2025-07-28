'use client'
import { usePageTitle } from '@/common/hooks/general/usePageTitle'
import { Box } from '@mui/material'
import React from 'react'

export default function DashboardView() {
    usePageTitle('Dashboard')
    return (
        <Box
            sx={{
                padding: '2rem',
                height: '100vh',
                width: 'auto',
                background: '#F8F8F8',
                border: '1px solid red',
            }}
        >
        </Box>
    )
}