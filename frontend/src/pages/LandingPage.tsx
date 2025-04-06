import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            {/* Header Section */}
            <header className="px-10 py-3 bg-white shadow-md text-gray-900">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Bloghub</h1>
                    <div className='flex items-center'>
                        <Link to={'/signin'}>
                            <button className=" text-black rounded-full cursor-pointer mr-4 hidden lg:block">Sign in</button>
                        </Link>
                        <Link to={'/signup'}>
                            <button className="px-6 py-2 text-black rounded-full border cursor-pointer hover:bg-black hover:text-white">Get Started</button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="text-center py-32">
                <h2 className="text-5xl font-extrabold mb-6">Share Your Stories, Inspire the World</h2>
                <p className="text-lg mb-8">Discover resources, share experiences, and connect with like-minded individuals.</p>
                <Link to={'/signup'}>
                    <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full cursor-pointer shadow-lg hover:bg-gray-100">Get Started</button>
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white text-gray-900">
                <div className="container mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-12">Why Blog with Us?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="p-8 shadow-lg rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Express Yourself</h4>
                            <p>Share your stories in a clean, beautiful format with a simple editor.</p>
                        </div>
                        <div className="p-8 shadow-lg rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Connect with Others</h4>
                            <p>Engage with readers and build a community around your passion.</p>
                        </div>
                        <div className="p-8 shadow-lg rounded-lg">
                            <h4 className="text-xl font-bold mb-2">Grow Your Reach</h4>
                            <p>Share your articles across platforms to reach a global audience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
