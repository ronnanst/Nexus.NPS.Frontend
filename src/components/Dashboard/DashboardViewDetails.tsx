import dynamic from 'next/dynamic'
import { Typography } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import React, { useEffect, useState } from 'react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const DashboardViewDetails = ({ ratings }: { ratings: any}) => {
    const [promoters, setPromoters] = useState<number>(0)
    const [passives, setPassives] = useState<number>(0)
    const [detractors, setDetractors] = useState<number>(0)

    useEffect(() => {
        if(ratings && ratings.length > 0) {
            var goodNPS = ratings.filter((x: { score: number }) => x.score === 4 || x.score === 5).length
            var neutralNPS = ratings.filter((x: { score: number }) => x.score === 3).length
            var badNPS = ratings.filter((x: { score: number }) => x.score >= 0 && x.score <= 2).length
            var total = ratings.length

            const goodAverage = (goodNPS / total * 100).toFixed(2)
            setPromoters(parseFloat(goodAverage))
            const neutralAverage = (neutralNPS / total * 100).toFixed(2)
            setPassives(parseFloat(neutralAverage))
            const badAverage = (badNPS / total * 100).toFixed(2)
            setDetractors(parseFloat(badAverage))
        } else {
            setPromoters(0)
            setPassives(0)
            setDetractors(0)
        }
    }, [ratings])

    const options: ApexOptions = {
        chart: {
            type: 'donut',
        },
        labels: ['Detractors', 'Passives', 'Promoters'],
        colors: ['#FF4560', '#FFC107', '#4CAF50'],
        legend: {
            show: true,
            position: 'right',
            labels: {
                colors: ['#FF4560', '#FFC107', '#4CAF50'],
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (value: number, opt: any) {
                return value.toFixed(1) + '%'
            }
        }
    }

    const series = [detractors, passives, promoters]

    return (
        <>
            <Typography sx={{ color: '#083D5B', fontWeight: 'bold' }}>
                Details
            </Typography>
            <Chart options={options} series={series} type='pie' height='90%'/>
        </>
    )
}