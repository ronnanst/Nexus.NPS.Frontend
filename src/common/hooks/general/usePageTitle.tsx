import { useEffect } from 'react'

export const usePageTitle = (pageTitle: string) => {
    useEffect(() => {
        document.title = `${pageTitle} | Nexus NPS`
    }, [pageTitle])
}