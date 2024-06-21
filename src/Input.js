import React, { useState } from 'react';
import tinyid from 'tiny-unique-id';
import db from './firebase';


function Input() {
    const [input, setInput] = useState('')
    const [shorten, setShorten] = useState('')

    const handleDb = async() => {
        try {
            const slug = tinyid.unique()
            await db.collection('urls').add({
                url: input,
                slug: slug
            });
            setShorten(`${window.location.origin}/${slug}`);
        } catch (error) {
            console.error('Error adding document:', error);
            // Handle error 
        }
    }

    // const copyToClipboard = () => {
    //     navigator.clipboard.writeText(shorten)
    //         .then(() => {
    //             setCopySuccess(true);
    //             setTimeout(() => setCopySuccess(false), 1500); // Reset after 1.5 seconds
    //         })
    //         .catch(err => {
    //             console.error('Failed to copy:', err);
    //             setCopySuccess(false);
    //             // Handle error (e.g., show error message to user)
    //         });
    // };

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white w-screen h-screen ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5 ">
                Welcome to <span className="text-red-500">URL</span> Shortener
            </h1>
            <div className="mt-4 w-full max-w px-4  custom-width">
                <div className="flex w-full border-1 bg-gray-700 p-10 rounded-lg border-gray-600">
                    <input
                        type="url"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-3 text-lg rounded-l-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 placeholder-gray-500"
                        placeholder="Enter long URL"
                    />
                    <button
                        onClick={handleDb}
                        className="p-3 text-lg font-semibold text-gray-900 bg-gray-300 rounded-r-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Shorten URL
                    </button>
                </div>
                    <input
                        type="text"
                        disabled
                        className="w-full p-3 mt-3 text-lg rounded-lg border-2 border-gray-600 bg-gray-800 placeholder-gray-500 cursor-pointer"
                        value={shorten}
                    />
            </div>
            <div className="mt-6 text-center">
                <p className="text-lg">
                Get your <span className="text-red-500">URL</span> Short
                </p>
                <p className="mt-2 text-sm text-gray-400">
                Designed and Developed by NIKHIL<br />
                Get it on <a href="https://github.com/nikhil-x24" className="text-blue-500 hover:underline">Github</a> Connect with me on <a href="https://www.linkedin.com/in/nikhil301/" className="text-blue-500 hover:underline">LinkedIn</a>
                </p>
            </div>
        </div>

    )
}

export default Input
