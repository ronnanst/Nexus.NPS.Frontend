import { TextField, Typography } from "@mui/material"
import { forwardRef, useImperativeHandle, useRef } from "react"
import { maxLength } from "zod"

export interface ReviewViewCommentsProps {
    getValue: () => string
}

export const ReviewViewComments = forwardRef<ReviewViewCommentsProps>((_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    
    useImperativeHandle(ref, () => ({
        getValue: () => inputRef.current?.value || ''
    }))

    return (
        <>
            <Typography>
                Can you tell us more about your experience? (Optional)
            </Typography>
            <TextField
                multiline
                fullWidth
                inputRef={inputRef}
                sx={{ height: '100%', overflow: 'hidden',
                    '& .MuiInputBase-root': {
                        height: '90% !important'
                    },
                    '& .MuiInputBase-inputMultiline': {
                        height: '100% !important',
                        overflow: 'auto'
                    }
                }}
                inputProps={{ maxLength: 500 }}
            ></TextField>
        </>
    )
})