'use client'
import * as React from 'react';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { useRouter } from 'next/navigation'
import { useUser } from '@/common/context/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBar = () => {
    const { userId, setUserId } = useUser()
    const router = useRouter()
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const openPopover = Boolean(anchorElUser)

    const handleLogInOut = () => {
        setUserId(null)
        router.push('/')
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <>
            <Drawer
                variant='permanent'
                open={openDrawer}
                sx={{
                    width: openDrawer? 200 : 60,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: openDrawer? 200 : 60,
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        onClick={() => setOpenDrawer(!openDrawer)} sx={{ m: 1 }}
                    >
                        {openDrawer? <ChevronLeft/> : <MenuOutlinedIcon/>}
                    </IconButton>
                </Box>
                <List>
                    <ListItemButton onClick={() => router.push('/review')} disabled={!userId}>
                        <ListItemIcon><RateReviewOutlinedIcon/></ListItemIcon>
                        <Collapse in={openDrawer} orientation='horizontal'>
                            <ListItemText primary='Review'/>
                        </Collapse>
                    </ListItemButton>
                    <ListItemButton onClick={() => router.push('/dashboard')} disabled={!userId}>
                        <ListItemIcon><AnalyticsOutlinedIcon/></ListItemIcon>
                        <Collapse in={openDrawer} orientation='horizontal'>
                            <ListItemText primary='Dashboard'/>
                        </Collapse>
                    </ListItemButton>
                </List>
                <Box sx={{ marginTop: 'auto', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={handleOpenUserMenu}>
                        <AccountCircleIcon/>
                    </IconButton>
                </Box>
            </Drawer>
            <Popover open={openPopover} anchorEl={anchorElUser} onClose={handleCloseUserMenu}>
                <Box
                    sx={{
                        fontSize: '12px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        cursor: 'pointer',
                        width: '80px',
                        height: '40px',
                        justifyContent: 'center'
                    }}
                    onClick={handleLogInOut}
                >
                    <LogoutIcon/>
                    <Typography sx={{ fontSize: 12 }}>
                        LogOut
                    </Typography>
                </Box>
            </Popover>
        </>
    )
}