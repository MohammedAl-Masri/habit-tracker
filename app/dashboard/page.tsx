import { auth } from "@/auth"
import { addHabit, deleteHabit, logHabit, logoutAction } from "@/lib/action"
import { prisma } from "@/lib/db"
import { calculateStreak } from "@/lib/streak"

const DashboardPage = async () => {
    const session = await auth()
    const userId = Number(session?.user?.id)
    const habit = await prisma.habit.findMany({
        where:{userId: userId},
        include:{
            habitLogs: true
        }
    })

    return (
        <div className="min-h-[calc(100dvh-6rem)] items-center min-w-screen flex flex-col gap-4
        justify-center">
            <h1 className="text-2xl font-bold mb-4 lg:text-3xl lg:mb-8">You can track your<span className="text-primary"> Habit </span>from here</h1>
            <div>
                <form action={addHabit}>
                    <input type="text" name="title" placeholder="Add your habit..."
                    className="outline-none border-b-2 mx-3
                    lg:py-2 lg:mb-8 lg:text-2xl"/>
                    <button className="bg-primary text-white px-3 py-1 rounded-3xl hover:scale-105
                    transition cursor-pointer
                    lg:text-2xl lg:hover:scale-115" type="submit">Submit</button>
                </form>
            </div>
                <div>
                    <table className="border-collapse lg:w-250 lg:text-2xl">
                        <thead>
                            <tr>
                                <th className="border p-3 text-text">Habit</th>
                                <th className="border p-3 text-text">Streak</th>
                                <th colSpan={2} className="border p-3 text-text">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {habit.map((e) => {
                                const deleteWithId = deleteHabit.bind(null, e.id)
                                const logHabitDone = logHabit.bind(null, e.id)
                                return (
                                    <tr key={e.id}>
                                        <td className="border p-3">{e.title}</td>
                                        <td className="border p-3">
                                            {calculateStreak(
                                                e.habitLogs.map(log => log.date)
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            <form action={logHabitDone}>
                                                <button
                                                    className="bg-green-800 hover:bg-green-700 text-text px-3 py-1 rounded-3xl hover:scale-105 transition cursor-pointer"
                                                    type="submit"
                                                >
                                                    Done
                                                </button>
                                            </form>
                                        </td>
                                        
                                        <td className="border p-3">
                                            <form action={deleteWithId}>
                                                <button
                                                    className="bg-red-800 hover:bg-red-700 text-text px-3 py-1 rounded-3xl hover:scale-105 transition cursor-pointer"
                                                    type="submit"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                <div>
            </div>
        </div>
    )
}

export default DashboardPage
                                        