import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="min-h-[calc(100dvh-6rem)] bg-linear-to- from-zinc-950 via-zinc-900
      to-slate-900 bg-cover bg-center text-text">
        <section className="min-h-[calc(100dvh-3rem)] flex flex-col justify-evenly items-center mx-">
          <div className="font-bold text-3xl text-center lg:text-5xl"><h1>Make 2026 your most <span
            className="text-primary hover:text-text transition">successful </span>
            year ever</h1></div>
          <div>
            <p className="text-center lg:text-3xl mx-20">Discover <span className="text-primary
              hover:text-text transition">BestStreak </span>
              the app that helps you build positive life-changing habits. 
              Effortlessly track your habit every day, reach your personal goals, and stay motivated
              every day.
            </p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105"><Link className="px-10 py-2
          rounded-3xl bg-primary lg:text-3xl" href={'/dashboard'}>Start Your Streak</Link></div>
        </section>
        <section className="min-h-[calc(100dvh-3rem)] flex flex-col justify-evenly items-center mx-">
            <h2 className="text-3xl font-bold text-primary lg:text-5xl">Features</h2>
          <div className="flex flex-col lg:gap-20">
              <div className="p-4 my-5 text-center w-50 h-60 rounded-2xl flex flex-col
                gap-10 lg:w-60 lg:h-90 hover:shadow-xl/30 shadow-text transition-shadow">
                <h3 className="text-bold text-amber-100 text-[20px] mt-5 lg:text-3xl">Track Your Habits</h3>
                <p className="lg:text-2xl">Create habits and keep track of your daily progress in one place.</p>
              </div>
              <div className="p-4 my-5 text-center w-50 h-60 rounded-2xl flex flex-col
                gap-10 lg:w-60 lg:h-90 hover:shadow-xl/30 shadow-text transition-shadow">
                <h3 className="text-bold text-amber-100 text-[20px] mt-5 lg:text-3xl">Build Your Streak</h3>
                <p className="lg:text-2xl">Stay consistent and watch your streak grow every time you complete a habit.</p>
              </div>
              <div className="p-4 my-5 text-center w-50 h-60 rounded-2xl flex flex-col
                gap-10 lg:w-60 lg:h-90 hover:shadow-xl/30 shadow-text transition-shadow">
                <h3 className="text-bold text-amber-100 text-[20px] mt-5 lg:text-3xl">Track Your Best Streak</h3>
                <p className="lg:text-2xl">See your longest streak and challenge yourself to beat your personal record.</p>
              </div>
              <div className="p-4 my-5 text-center w-50 h-60 rounded-2xl flex flex-col
                gap-10 lg:w-60 lg:h-90 hover:shadow-xl/30 shadow-text transition-shadow">
                <h3 className="text-bold text-amber-100 text-[20px] mt-5 lg:text-3xl">Simple & Easy</h3>
                <p className="lg:text-2xl ">No complicated setup. Add your habits, mark them as done, and focus on staying consistent.</p>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
