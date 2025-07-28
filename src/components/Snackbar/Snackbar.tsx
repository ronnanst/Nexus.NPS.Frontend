import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export interface AlertData {
    message: string
    isOpen: boolean
    severity: 'success' | 'error' | 'info' | 'warning'
    autoHideDuration: number
}
interface CustomAlertProps {
    alertData: AlertData
    onClose: () => void
}

/**
 * Function to return color codes based on severity.
 * @param severity - The severity level ('success', 'info', 'warning', 'error').
 * @returns An object containing background and text colors.
 */
function getAlertColors(severity: 'success' | 'info' | 'warning' | 'error') {
    let backgroundColor: string
    let textColor: string

    switch (severity) {
        case 'success':
            backgroundColor = '#2E7D32' // Dark Green
            textColor = '#FFFFFF' // White
            break
        case 'info':
            backgroundColor = '#1565C0' // Dark Blue
            textColor = '#FFFFFF' // White
            break
        case 'warning':
            backgroundColor = '#ED6C02' // Dark Orange
            textColor = '#FFFFFF' // White
            break
        case 'error':
            backgroundColor = '#D32F2F' // Dark Red
            textColor = '#FFFFFF' // White
            break
        default:
            backgroundColor = '#000000' // Fallback: Black
            textColor = '#FFFFFF' // Fallback: White
            break
    }

    return { backgroundColor, textColor }
}

export const CustomAlert: React.FC<CustomAlertProps> = (props) => {
    const { alertData } = props
    const { backgroundColor, textColor } = getAlertColors(alertData.severity)
    return (
        <Snackbar
            sx={{ marginTop: 4 }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={alertData.isOpen}
            autoHideDuration={alertData.autoHideDuration}
            onClose={props.onClose}
        >
            <Alert
                onClose={props.onClose}
                variant="filled"
                color={alertData.severity}
                severity={alertData.severity}
                sx={{ width: '100%', backgroundColor, color: textColor }}
            >
                {alertData.message}
            </Alert>
        </Snackbar>
    )
}