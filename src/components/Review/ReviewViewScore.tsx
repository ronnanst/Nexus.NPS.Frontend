import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface ReviewViewScoreProps {
    score: number | null
    setScore: Dispatch<SetStateAction<number | null>>
}

const getBackgroundColor = (index: number): string => {
    if (index <= 2) return '#FF7575'
    if (index == 3) return '#FBBE29'

    return '#73CE38'
}
const getHoverColor = (index: number): string => {
    if (index <= 2) return '#F37575'
    if (index == 3) return '#EFBE29'

    return '#73C238'
}
const getSelectedColor = (index: number): string => {
    if (index <= 2) return '#DB7575'
    if (index == 3) return '#D7BE29'

    return '#73AA38'
}

export const ReviewViewScore = ({ score, setScore }: ReviewViewScoreProps) => {
    return (
        <>
            <Typography sx={{ color: '#083D5B', marginBottom: '1rem', fontWeight: 'bold' }}>
                How likely are you to recommend our Products to a friend or colleague?
            </Typography>
            <Stack direction='column' spacing={5}>
                <ToggleButtonGroup
                    value={score}
                    exclusive
                    onChange={(_, value) => setScore(value)}
                    sx={{ display: 'flex' }}
                >
                    {[0, 1, 2, 3, 4, 5].map((val, index) => (
                        <ToggleButton key={index + 1} value={val} sx={{ flex: 1, color: 'white', backgroundColor: getBackgroundColor(index), mr: 2, ml: 2,
                            '&.Mui-selected': {
                                backgroundColor: getSelectedColor(index),
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: getSelectedColor(index),
                            },
                            '&:hover': {
                                backgroundColor: getHoverColor(index),
                            }
                        }}>
                            {val}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Stack>
            <Box sx={{ display: 'flex', marginLeft: '15px', marginRight: '15px' }}>
                <Typography justifyContent="flex-start">Not likely</Typography>
                <Typography justifyContent="flex-end" ml='auto'>Very likely</Typography>
            </Box>
        </>
    )
}