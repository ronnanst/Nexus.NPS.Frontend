export const useGetAllProducts = async () => {
    const response = await fetch(`http://localhost:5000/api/Review/Products`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
    })
    return await response.json()
}