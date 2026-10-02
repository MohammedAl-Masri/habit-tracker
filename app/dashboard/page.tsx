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
        <div>
            <div>DashboardPage</div>
            <div>
                <form action={logoutAction}>
                    <button type="submit">Log out</button>
                </form>
            </div>
            <div>
                <form action={addHabit}>
                    <input type="text" name="title" placeholder="Add your habit..."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {habit.map((e)=>{
                const deleteWithId = deleteHabit.bind(null, e.id)
                const logHabitDone = logHabit.bind(null, e.id) 
                return(
                <div key={e.id} className="flex gap-2">
                    <div>{e.title}</div>
                    <div>Streak: {calculateStreak(e.habitLogs.map(log => log.date))}</div>
                    <button className="cursor-pointer" onClick={deleteWithId}>Delete</button>
                    <div>
                        <form action={logHabitDone}>
                            <button type="submit">Done</button>
                        </form>
                    </div>
                </div>)})}
            </div>
        </div>
    )
}

export default DashboardPage