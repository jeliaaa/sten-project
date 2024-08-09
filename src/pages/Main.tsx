import React from 'react';
import data from "../mockupData/dashboard.json";
import { Link } from 'react-router-dom';

const Main = () => {
    const colors: Record<string, string> = {
        "totalPipelines": "rgb(76, 175, 80)", // Green
        "runningPipelines": "rgb(33, 150, 243)", // Blue
        "completedPipelines": "rgb(255, 193, 7)", // Amber
        "failedPipelines": "rgb(244, 67, 54)" // Red
    };

    const mappedOverview = Object.entries(data.dashboard.overview).map(([name, amount]) => ({
        name: name.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase()),
        amount,
        color: colors[name] || 'rgb(128, 128, 128)', // Default to gray,
        link: name.split(/(?=[A-Z])/)[0].toLowerCase()
    }));

    return (
        <div className='w-full flex flex-col'>
            <h1 className='ml-3 mb-3 font-bold text-3xl'>Pipelines Overview</h1>
            <div className="w-full border-y-2 flex py-4 sm:flex-row flex-col">
                {mappedOverview.map((element, index) => (
                    <Link
                        to={`/pipelines/${element.link}`}
                        key={index}
                        className="border-x flex flex-col items-center sm:w-1/4 p-4"
                    >
                        <div
                            style={{ backgroundColor: `${element.color}` }}
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                        >
                            <span className='text-white font-bold text-xl'>
                                {element.amount}
                            </span>
                        </div>
                        <span className='text-gray-500 text-lg font-bold text-center'>
                            {element.name}
                        </span>
                    </Link>
                ))}
            </div>
            <div>
                <h1>GOTTA THINK OF STATISTCIS WE WILL NEED BELOW.</h1>
            </div>
        </div>
    );
}

export default Main;
