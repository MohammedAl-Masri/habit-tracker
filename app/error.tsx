'use client'

type ErrorProps = {
    error: Error & { digest?: string }
    reset: () => void
}

const error = ({reset, error}: ErrorProps) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="text-3xl text-shadow-orange-700">Error occurred: {error.message}</div>
            <button className="bg-primary px-8 py-2 rounded-3xl hover:scale-105 transition
                        cursor-progress lg:px-8 lg:hover:scale-115 mb-8"
                        onClick={() => reset()}>Try again</button>
        </div>
    )
}

export default error