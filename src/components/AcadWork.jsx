import React from 'react';

const projects = [
    { 
        id: 1, 
        title: 'Random Password Generator', 
        description: 'Generates random passwords, accepts a password length input for your password length preference.',
        languages: 'HTML, CSS, Javascript',
        link: 'https://randompasswordgenerator-ged.vercel.app/'
    },
    { 
        id: 2, 
        title: 'Metric/Imperial Unit Converter', 
        description: 'A metric unit converter that allows you to convert your desired input value in Length (Meter/Feet), Volume (Liters/Gallons), and Mass (Kilograms/Pounds).',
        languages: 'HTML, CSS, Javascript',
        link: 'https://unit-converter-eta.vercel.app/'
    },
    { 
        id: 3, 
        title: 'Color Scheme Generator', 
        description: 'Generates color schemes to help users choose colors that work well together for various creative projects.',
        languages: 'HTML, CSS, Javascript',
        link: 'https://color-scheme-generator-six.vercel.app/'
    },
    { 
        id: 4, 
        title: 'My Grocery List', 
        description: 'A native application which functions as a grocery list where users are able to add and delete their inputs.',
        languages: 'HTML, CSS, Javascript, Firebase',
        link: 'https://my-grocerylist-ged.netlify.app/'
    },
];

const AcadWork = () => {
    return (
        <div className="flex-col p-10">
            <h1 className="text-center text-xl font-semibold capitalize text-gray-800 dark:text-white lg:text-xl">Projects</h1>
            <p className="text-center text-gray-500 dark:text-gray-300 text-xs mt-4 mb-8">During my internship, I had the opportunity to work as a part of the Quality Assurance team.</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {projects.map((project) => (
                <div key={project.id} className="bg-white p-4 rounded shadow">
                    <h2 className="text-sm font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600 text-xs">{project.description}</p>
                    <p className='text-xs mt-2 font-semibold'><span className='font-normal'>Created using:</span> {project.languages}</p>
                    <a href={project.link} className='text-xs font-semibold text-blue-500' target='_blank' rel='noreferrer'>Link</a>
                </div>
                ))}
            </div>
        </div>
    );
};

export default AcadWork;
