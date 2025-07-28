'use client'
import { useUser } from '@/common/context/UserContext'
import { AlertData, CustomAlert } from '@/components/Snackbar/Snackbar'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const { setUserId } = useUser()
  const router = useRouter()
  const [formData, setFormData] = useState({ UserName: '', Password: '' })
  const [alertData, setAlertData] = useState<AlertData>({
    isOpen: false,
    message: '',
    severity: 'info',
    autoHideDuration: 6000,
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch(`http://localhost:5000/api/User/Login`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
    var result = await response.json();

    if(response.ok) {
      setAlertData({
        isOpen: true,
        message: "Login Successful!",
        severity: 'success',
        autoHideDuration: 6000,
      })
      setUserId(result.userId)
      router.push('/review')
    } else {
      setAlertData({
        isOpen: true,
        message: "Invalid Credentials!",
        severity: 'error',
        autoHideDuration: 6000,
      })
    }
  }

  return (
    <>
      <CustomAlert
          alertData={alertData}
          onClose={() => {
              setAlertData({ ...alertData, isOpen: false })
          }}
      />
      <Container maxWidth='sm'>
        <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
          <Typography variant='h5' align='center'>
            Login
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <TextField
              fullWidth
              name='UserName'
              label='Username'
              variant='outlined'
              onChange={handleChange}
              sx={{ mt: '5px', mb: '5px' }}
            />
            <TextField
              fullWidth
              name='Password'
              label='Password'
              variant='outlined'
              type='password'
              onChange={handleChange}
              sx={{ mt: '5px', mb: '5px' }}
            />
            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{ mt: '5px' }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
