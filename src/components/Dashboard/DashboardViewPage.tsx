import { Box, Typography } from "@mui/material"
import { DashboardViewFilter } from "./DashboardViewFilter"
import { useState } from "react"
import { DashboardViewOverall } from "./DashboardViewOverall"
import { DashboardViewDetails } from "./DashboardViewDetails"

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

export const DashboardViewPage = () => {
    const [ratings, setRatings] = useState<any>()

    return (
        <Box sx={{ height: '100%', overflow: 'auto', paddingTop: '5px', display: 'flex', flexDirection: 'column' }}>
            <div>
                <Typography variant="h5" sx={{ color: '#083D5B', marginBottom: '1rem', fontWeight: 'bold', flex: '0 0 40px' }}>
                    NPS Dashboard
                </Typography>
            </div>

            <Box sx={ styles.divWrapper }>
                <DashboardViewFilter setRatings={setRatings}/>
            </Box>

            <Box sx={{ display: 'flex' }}>
                <Box sx={styles.divWrapper} flex='1' marginRight='5px'>
                    <DashboardViewOverall ratings={ratings}/>
                </Box>

                <Box sx={styles.divWrapper} flex='1' marginLeft='5px'>
                    <DashboardViewDetails ratings={ratings}/>
                </Box>
            </Box>

            <Box sx={styles.divWrapper} overflow='hidden' flex='2'>
                {/* <ReviewViewComments ref={commentRef}/> */}
            </Box>
        </Box>
    )
}