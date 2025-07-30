import { useAllRatings } from "@/common/hooks/useAllRatings"
import { useGetAllProducts } from "@/common/hooks/useGetAllProducts"
import { Autocomplete, TextField, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface DashboardViewFilterProps {
    setRatings: Dispatch<SetStateAction<any>>
}

export const DashboardViewFilter = ({ setRatings }: DashboardViewFilterProps) => {
    const [allProducts, setAllProducts] = useState<any>([])
    const [product, setProduct] = useState<{ id: number, productName: string}>({ id: -1, productName: ''})

    useEffect(() => {
        async function fetchData() {
            const result = await useGetAllProducts()
            result.unshift({ id: 99, productName: 'All'})
            setAllProducts(result)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (product.id !== null || product.id !== undefined) {
            async function fetchRatings() {
            const result = await useAllRatings(product.id)
            setRatings(result)
        }
        fetchRatings()
        }
    }, [product.id])

    return (
        <>
            <Typography sx={{ color: '#083D5B', marginBottom: '10px', fontWeight: 'bold' }}>
                Please select a product:
            </Typography>
            <Autocomplete
                size="small"
                options={allProducts}
                value={product}
                onChange={(e, newValue) => setProduct(newValue || { id: -1, productName: ''})}
                getOptionLabel={(option) => option.productName }
                isOptionEqualToValue={(option, value) => option.id === value.id }
                renderInput={(params) => <TextField {...params} label="Select a Product"/>}
            />
        </>
    )
}