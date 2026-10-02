
export const  calculateStreak = (dates : Date[]) : number =>{
    if(dates.length === 0) return 0
    dates.sort((a, b)=> new Date(b).getTime() - new Date(a).getTime())

    let streak = 1
    let currentDate = dates[0]

    for(let i = 1; i < dates.length; i++){
        const expectedDate = new Date(currentDate)
        expectedDate.setDate(expectedDate.getDate() - 1)

        if(expectedDate.toDateString() === dates[i].toDateString()){
            streak++
            currentDate = dates[i]
        }else{
            break
        }
    }

    return streak
}

export const calculateBestStreak = (dates : Date[]) : number=>{
    if(dates.length === 0) return 0
    dates.sort((a, b)=> new Date(b).getTime() - new Date(a).getTime())

    let streak = 1
    let currentDate = dates[0]
    let bestStreak = 1

    for(let i = 1; i < dates.length; i++){
        const expectedDate = new Date(currentDate)
        expectedDate.setDate(expectedDate.getDate() - 1)

        if(expectedDate.toDateString() === dates[i].toDateString()){
            streak++
            currentDate = dates[i]
            if(streak > bestStreak) bestStreak = streak
        }else{
            streak = 1
            currentDate = dates[i]
            continue
        }
    }

    return bestStreak
}