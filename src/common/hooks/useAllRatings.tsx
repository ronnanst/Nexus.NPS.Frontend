export const useAllRatings = async (productId: number) => {
    const params = new URLSearchParams()
    params.append('productId', productId.toString())
    const response = await fetch(`http://localhost:5000/api/Dashboard/FindProductRatings?${params}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
    })
    return await response.json()
}