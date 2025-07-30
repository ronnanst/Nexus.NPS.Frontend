import dynamic from 'next/dynamic'
import { Typography } from '@mui/material'
import { ApexOptions } from 'apexcharts'
import React, { useEffect, useState } from 'react'
import { calculateAverageNps } from '@/common/utils/calculateAverageNps'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const DashboardViewOverall = ({ ratings }: { ratings: any}) => {
    const [averageNPS, setAverageNPS] = useState<number>(0)
    const getNpsColor = (value: number): string => {
        if (value <= 40) return '#FF4560'
        if (value <= 60) return '#FFC107'
        return '#4CAF50'
    }

    useEffect(() => {
        if(ratings && ratings.length > 0) {
            var average = calculateAverageNps(ratings)
            setAverageNPS(average)
        } else {
            setAverageNPS(0)
        }
    }, [ratings])

    const options: ApexOptions = {
        chart: {
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 15,
                    size: '65%',
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: '16px'
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        formatter: (value: number) => `${value.toFixed(1)} / 100`
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Average NPS'],
        colors: [getNpsColor(averageNPS)],
    }

    const series = [averageNPS]

    return (
        <>
            <Typography sx={{ color: '#083D5B', fontWeight: 'bold' }}>
                Score
            </Typography>
            <Chart options={options} series={series} type='radialBar' height='90%'/>
        </>
    )
}