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
    <div className="min-h-[calc(100dvh-6rem)] items-center min-w-screen flex flex-col justify-center">
        <h1 className="lg:text-4xl lg:mb-8">Here all your <span className="text-primary">Stats</span></h1>
        <table className="border-collapse lg:w-250 lg:text-2xl">
            <thead>
                <tr>
                    <th className="border p-3">Habit</th>
                    <th className="border p-3">Streak</th>
                    <th className="border p-3">Best Streak</th>
                </tr>
            </thead>
            <tbody>
                {habit.map((e) => {
                    return (
                        <tr key={e.id}>
                            <td className="border p-3 text-center">
                                {e.title}
                            </td>

                            <td className="border p-3 text-center">
                                {calculateStreak(
                                    e.habitLogs.map(log => log.date)
                                )}
                            </td>

                            <td className="border p-3 text-center">
                                {calculateBestStreak(
                                    e.habitLogs.map(log => log.date)
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default StatsPage