export const calculateAverageNps = ( ratings: any[] ): number => {
    if(ratings && ratings.length > 0) {
        var goodNPS = ratings.filter((x: { score: number }) => x.score === 4 || x.score === 5).length
        var badNPS = ratings.filter((x: { score: number }) => x.score >= 0 && x.score <= 2).length
        // var total = ratings.filter((x: { score: number }) => x.score !== 3).length
        var total = ratings.length // if score == 3 also counts on total %

        const goodAverage = (goodNPS / total * 100)
        const badAverage = (badNPS / total * 100)

        const average = (goodAverage - badAverage).toFixed(2)
        return parseFloat(average)
    } else {
        return 0
    }
}