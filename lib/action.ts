'use server'
import { auth, signIn,signOut } from "@/auth"
import bcrypt  from "bcryptjs"
import { prisma } from "./db"
import { revalidatePath } from "next/cache"


export const LoginAction = async (formData : FormData) =>{
    const password = formData.get('password')
    const email = formData.get('email')
    
    await signIn('credentials',{email, password, redirectTo: '/'})
}

export const registerAction = async (fromData : FormData) =>{
    const name = fromData.get('name') as string
    const email = fromData.get('email') as string
    const password = fromData.get('password') as string

    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
        data:{
            name,
            email,
            password: hashedPassword
        }
    })
}

export const addHabit = async (fromData : FormData)=>{
    const title = fromData.get('title') as string
    const session = await auth() 
    const userId = Number(session?.user?.id)


    await prisma.habit.create({
        data:{
            title,
            userId
        }
    })

    revalidatePath('http://localhost:3000/dashboard')
}

export const deleteHabit = async(habitId : number)=>{
    await prisma.habitLog.deleteMany({
        where:{ habitId}
    })
    await prisma.habit.delete({
        where:{id: habitId}
    })

    revalidatePath('/dashboard')
}

export const logoutAction = async()=>{
    await signOut({redirectTo: '/'})
}

export const logHabit = async(habitId : number)=>{
    const today = new Date()
    today.setHours(0, 0, 0, 0) 

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1) 

    const existingLog = await prisma.habitLog.findFirst({
        where: {
            habitId,
            date: {
                gte: today,
                lt: tomorrow    
            }
        }
    })

    if(existingLog)return

    await prisma.habitLog.create({
        data:{
            habitId,
            date : new Date()
        }
    })

    revalidatePath('/dashboard')
}