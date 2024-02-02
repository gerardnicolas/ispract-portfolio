import React from 'react'

const Learnings = () => {
    return (
        <div className="bg-slate-200">
            <section className="bg-slate-100 dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10">
                    <h1 className="text-center text-xl font-semibold capitalize text-gray-800 dark:text-white lg:text-2xl md:text-xl">Internship Experience</h1>

                    <p className="mt-4 text-center text-gray-500 dark:text-gray-300 text-xs lg:text-base">During my internship, I had the opportunity to work as a part of the Quality Assurance team.</p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                    <div>
                        <img className="h-40 w-full rounded-lg object-cover " src="/assets/exptest-pic.png" alt="Exploring The Application Screenshot" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Exploratory Testing</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Conducted exploratory testing to gain knowledge of the application, gaining a comprehensive understanding of its
functionalities and the technologies employed.</p>
                    </div>

                    <div>
                        <img className="h-40 w-full rounded-lg object-cover" src="/assets/testplan-pic2.png" alt="Test Plan Screenshot" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Test Planning</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Analyzed requirements and developed test plans, test scenarios, and test cases based on the analysis of documentation to
achieve the best result.</p>
                    </div>

                    <div>
                        <img className="h-40 w-full rounded-lg object-cover" src="/assets/bugreport-pic.png" alt="Screenshot of a Bug Report" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Bug Reporting</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Examined the application and identified bugs, escalated issues to developers through reports such as replication of
reported bugs, and validated implemented fixes.</p>
                    </div>

                    <div>
                        <img className="h-40 w-full rounded-lg object-cover" src="/assets/testexecution-pic.webp" alt="Text Execution Art Screenshot" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Test Execution</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Performed test case executions encompassing functional, validation, and regression testing for both the web and mobile
applications.</p>
                    </div>

                    <div>
                        <img className="h-40 w-full rounded-lg object-cover" src="/assets/smoketesting.webp" alt="Smoke Testing Art Screenshot" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Test Plan Refinement</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Conducted regular reviews and updates to align the smoke testing script with evolving application features and
functionalities.</p>
                    </div>

                    <div>
                        <img className="h-40 w-full rounded-lg object-cover" src="/assets/issue-isolation-pic.png" alt="Issue Isolation Screenshot" />
                        <h2 className="mt-4 text-sm font-semibold capitalize text-gray-800 dark:text-white">Issue Isolation</h2>
                        <p className="mt-1 text-[0.7rem] tracking-wider dark:text-blue-400 text-justify">Developed and maintained detailed documentation on isolated issues, including steps to reproduce, environmental
conditions, and potential impact, enhancing the efficiency of the debugging and fixing process.</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Learnings