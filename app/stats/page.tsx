import { prisma } from "@/lib/db"
import { auth } from "@/auth"
import { calculateStreak, calculateBestStreak } from "@/lib/streak"

const StatsPage = async () => {
    const session = await auth()
    const userId = Number(session?.user?.id)
    const habit = await prisma.habit.findMany({
            where:{userId: userId},
            include:{
                habitLogs: true
            }
        })

    return (
        <div>{habit.map((e)=>{
            return <div key={e.id}>
                <div>Habit: {e.title}</div>
                <div>Streak: {calculateStreak(e.habitLogs.map(log => log.date))}</div>
                <div>Best Streak: {calculateBestStreak(e.habitLogs.map(log => log.date))}</div>
            </div>
        })}</div>
    )
}

export default StatsPage