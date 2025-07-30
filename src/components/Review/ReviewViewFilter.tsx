import { useGetAllProducts } from "@/common/hooks/useGetAllProducts"
import { Autocomplete, TextField, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface ReviewViewFilterProps {
    product: any
    setProduct: Dispatch<SetStateAction<any>>
}

export const ReviewViewFilter = ({ product, setProduct }: ReviewViewFilterProps) => {
    const [allProducts, setAllProducts] = useState<any>([])

    useEffect(() => {
        async function fetchData() {
            const result = await useGetAllProducts()
            setAllProducts(result)
        }
        fetchData()
    }, [])

    return (
        <>
            <Typography sx={{ color: '#083D5B', marginBottom: '1rem', fontWeight: 'bold' }}>
                Please select a product to review:
            </Typography>
            <Autocomplete
                size="small"
                options={allProducts}
                value={product}
                onChange={(e, newValue) => setProduct(newValue || '')}
                getOptionLabel={(option) => option.productName }
                isOptionEqualToValue={(option, value) => option.id === value.id }
                renderInput={(params) => <TextField {...params} label="Select a Product"/>}
            />
        </>
    )
}