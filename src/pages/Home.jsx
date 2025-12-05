import React from 'react';
import { ArrowRight, BookOpen, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Welcome to <span className="text-indigo-400">Moonbind</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10">
                        We are dedicated to bringing the best digital reading experience to users worldwide.
                        Discover, read, and connect.
                    </p>
                    <Link
                        to="/user-agreement"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-gray-50 transition-colors"
                    >
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Our Core Business
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Empowering readers and creators through technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Publishing</h3>
                            <p className="text-gray-600">
                                A vast library of digital books and novels accessible anywhere, anytime.
                                We partner with top authors to bring exclusive content.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <Users className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                            <p className="text-gray-600">
                                Building a vibrant community where readers can discuss, review, and share
                                their favorite stories with like-minded people.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                            <p className="text-gray-600">
                                Our platform supports multiple languages and regions, connecting
                                stories across borders and cultures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
