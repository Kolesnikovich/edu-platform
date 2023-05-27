import {useMemo} from "react";

export const useTotalPagesCount = (totalPages) => {
    const pagesArray = useMemo(() => {
        let array = []
        for (let i = 0; i < totalPages; i++) {
            array.push(i+1)
        }
        return array
    }, [totalPages])
    return pagesArray
}