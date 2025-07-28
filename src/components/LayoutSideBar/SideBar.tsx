
'use client'
import * as React from 'react';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { useRouter } from 'next/navigation'
import { useUser } from '@/common/context/UserContext';

export const SideBar = () => {
    const { userId } = useUser()
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Drawer
            variant='permanent'
            open={open}
            sx={{
                width: open? 200 : 60,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open? 200 : 60,
                    transition: 'width 0.3s',
                    overflowX: 'hidden',
                }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    onClick={() => setOpen(!open)} sx={{ m: 1 }}
                >
                    {open? <ChevronLeft/> : <MenuOutlinedIcon/>}
                </IconButton>
            </Box>
            <List>
                <ListItemButton onClick={() => router.push('/review')} disabled={!userId}>
                    <ListItemIcon><RateReviewOutlinedIcon/></ListItemIcon>
                    <Collapse in={open} orientation='horizontal'>
                        <ListItemText primary='Review'/>
                    </Collapse>
                </ListItemButton>
                <ListItemButton onClick={() => router.push('/dashboard')} disabled={!userId}>
                    <ListItemIcon><AnalyticsOutlinedIcon/></ListItemIcon>
                    <Collapse in={open} orientation='horizontal'>
                        <ListItemText primary='Dashboard'/>
                    </Collapse>
                </ListItemButton>
            </List>
            <Box sx={{ marginTop: 'auto' }}>
                HI
            </Box>
        </Drawer>
    )
}