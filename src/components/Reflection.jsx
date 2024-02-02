import React from 'react'

const reflections = [
    {
        id: 1,
        title: 'College Life',
        description: "College taught me the power of time management and the importance of balancing academics, social life, and self-care."
    },
    {
        id: 2,
        title: 'Career Goals',
        description: "In pursuing my career goals, I've learned that adaptability and continuous learning are key to navigating the ever-evolving professional landscape."
    },
    {
        id: 3,
        title: 'Personal',
        description: "On a personal level, I've learned that resilience in the face of challenges and maintaining a healthy work-life balance contribute significantly to overall well-being."
    },
    {
        id: 4,
        title: 'Next Steps',
        description: "Looking ahead, I've realized the importance of setting clear goals, being proactive, and embracing opportunities for personal and professional growth in my next steps."
    },
]

const Reflection = () => {
    return (
        <div className='bg-slate-100 p-10'>
            <h1 className="text-center text-xl font-semibold text-gray-800 lg:text-2xl">Reflection</h1>
            <p className="mt-4 text-center text-gray-500 dark:text-gray-300 text-xs pb-8 lg:text-base">My lessons that I will truly cherish and remember.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reflections.map((reflection) => (
                    <div key={reflection.id} className='p-4 rounded shadow bg-slate-50'>
                    <h1 className='font-semibold'>{reflection.title}</h1>
                    <p className='text-xs mt-2'>{reflection.description}</p>
                </div>
                ))}
            </div>

        </div>
    )
}

export default Reflection