'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { calculateAverageNps } from '@/common/utils/calculateAverageNps';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const DashboardViewChart = ({ ratings }: { ratings: any }) => {
    const [promoters, setPromoters] = useState<number[]>(Array(12).fill(0))
    const [passives, setPassives] = useState<number[]>(Array(12).fill(0))
    const [detractors, setDetractors] = useState<number[]>(Array(12).fill(0))
    const [averageNPS, setAverageNPS] = useState<number[]>(Array(12).fill(0))
    const totalCount = Array(12).fill(0)

    const getMonthIndex = (date: string) => new Date(date).getMonth()

    useEffect(() => {
        if(ratings && ratings.length > 0) {
            const detractorsCount = Array(12).fill(0)
            const passivesCount = Array(12).fill(0)
            const promotersCount = Array(12).fill(0)
            ratings.forEach((item: { score: number, createdAt: string; }) => {
                const month = getMonthIndex(item.createdAt)
                totalCount[month]++

                if(item.score >= 0 && item.score <= 2) detractorsCount[month]++
                if(item.score === 3) passivesCount[month]++
                if(item.score >= 4 && item.score <= 5) promotersCount[month]++
            })
            
            const detractorPercent = detractorsCount.map((count, index) => 
                totalCount[index] > 0 ? parseFloat((count / totalCount[index] * 100).toFixed(2)) : 0
            )
            setDetractors(detractorPercent)
            const passivePercent = passivesCount.map((count, index) => 
                totalCount[index] > 0 ? parseFloat((count / totalCount[index] * 100).toFixed(2)) : 0
            )
            setPassives(passivePercent)
            const promoterPercent = promotersCount.map((count, index) => 
                totalCount[index] > 0 ? parseFloat((count / totalCount[index] * 100).toFixed(2)) : 0
            )
            setPromoters(promoterPercent)

            const averageNPS = promoterPercent.map((value, index) => 
                parseFloat((value - detractorPercent[index]).toFixed(2))
            )
            setAverageNPS(averageNPS)
        } else {
            setPromoters(Array(12).fill(0))
            setPassives(Array(12).fill(0))
            setDetractors(Array(12).fill(0))
            setAverageNPS(Array(12).fill(0))
        }
    }, [ratings])

    const series = [
    {
        name: 'Detractors',
        type: 'bar',
        group: 'nps',
        data: detractors,
    },
    {
        name: 'Passives',
        type: 'bar',
        group: 'nps',
        data: passives,
    },
    {
        name: 'Promoters',
        type: 'bar',
        group: 'nps',
        data: promoters,
    },
    {
        name: 'Avg_NPS',
        type: 'line',
        data: averageNPS,
    },
    ];

    const options: ApexOptions = {
        chart: {
            type: 'line',
            stacked: true,
            toolbar: { show: false },
        },
        stroke: {
            width: [0, 0, 0, 3],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                barHeight: 200,
                horizontal: false,
                columnWidth: '40%',
            },
        },
        colors: ['#F44336', '#FFEB3B', '#4CAF50', '#1976D2'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: [
        {
            seriesName: ['Detractors', 'Passives', 'Promoters'],
            title: {
               text: 'Products NPS (%)',
            },
            min: 0,
            max: 100,
        },
        {
            seriesName: ['Avg_NPS'],
            opposite: true,
            title: {
                text: 'Average NPS',
            },
            min: -100,
            max: 100,
        },
        ],
        legend: {
        position: 'bottom',
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val: number) => `${val.toFixed(1)}%`,
            },
        },
    };

    return <Chart options={options} series={series} type="line" height={400} />;
}