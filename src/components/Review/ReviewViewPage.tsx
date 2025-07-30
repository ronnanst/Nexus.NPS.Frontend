import { Box, Button, Typography } from "@mui/material"
import { ReviewViewFilter } from "./ReviewViewFilter"
import { useRef, useState } from "react"
import { ReviewViewScore } from "./ReviewViewScore"
import { ReviewViewComments, ReviewViewCommentsProps } from "./ReviewViewComments"
import { AlertData, CustomAlert } from "../Snackbar/Snackbar"
import { useUser } from "@/common/context/UserContext"

const styles = {
    divWrapper: {
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        width: 'auto',
        padding: '20px',
        margin: '15px 0px 0px 0px',
    },
}

export const ReviewViewPage = () => {
    const { userId } = useUser()
    const [product, setProduct] = useState<{ id?: number, productName: string}>({ productName: ''})
    const [score, setScore] = useState<number | null>(null)
    const commentRef = useRef<ReviewViewCommentsProps>(null)
    const [alertData, setAlertData] = useState<AlertData>({
        isOpen: false,
        message: '',
        severity: 'info',
        autoHideDuration: 6000,
    })

    const handleSubmit = async () => {
        const comment = commentRef.current?.getValue()
        var data = {
            ProductId: product.id,
            Score: score,
            Comment: comment,
            UserId: userId
        }

        const response = await fetch('http://localhost:5000/api/Review/Submit', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data)
		})

        if(response.ok) {
			setAlertData({
				isOpen: true,
				message: "Review send successfully!",
				severity: 'success',
				autoHideDuration: 6000,
			})
            setProduct({ productName: '' })
            setScore(null)
            commentRef.current = null
		} else {
			setAlertData({
				isOpen: true,
				message: "Something bad happened!",
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
            <Box sx={{ height: '100%', overflow: 'hidden', paddingTop: '5px' }}>
                <div>
                    <Typography variant="h5" sx={{ color: '#083D5B', marginBottom: '1rem', fontWeight: 'bold' }}>
                        Product Review
                    </Typography>
                </div>

                <Box sx={ styles.divWrapper }>
                    <ReviewViewFilter product={product} setProduct={setProduct}/>
                </Box>

                <Box sx={styles.divWrapper}>
                    <ReviewViewScore score={score} setScore={setScore}/>
                </Box>

                <Box sx={styles.divWrapper} overflow='hidden' height='25vh'>
                    <ReviewViewComments ref={commentRef}/>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', mt: '10px' }}>
                    <Button onClick={handleSubmit} variant="contained" disabled={!product || score == null}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}