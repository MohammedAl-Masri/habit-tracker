import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="min-h-[calc(100dvh-6rem)] bg-[url(/background.avif)] bg-cover bg-center 
      text-text">
        <section className="min-h-[calc(100dvh-3rem)] flex flex-col justify-evenly items-center mx-">
          <div className="font-bold text-3xl text-center"><h1>Make 2026 your most <span
            className="text-primary">successful </span>
            year ever</h1></div>
          <div>
            <p className="text-center">Discover <span className="text-primary">BestStreak </span>
              the app that helps you build positive life-changing habits. 
              Effortlessly track your habit every day, reach your personal goals, and stay motivated
              every day.
            </p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105"><Link className="px-10 py-2
          rounded-3xl bg-primary" href={'/dashboard'}>Start Your Streak</Link></div>
        </section>
      </main>
    </div>
  );
}
