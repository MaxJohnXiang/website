import React from 'react';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-indigo max-w-none text-gray-600">
                <p className="mb-4">Last updated: December 2025</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to Moonbind. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
                <p className="mb-4">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Identity Data includes first name, maiden name, last name, username or similar identifier.</li>
                    <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                    <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
                <p className="mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: privacy@moonbind.com
                </p>
            </div>
        </div>
    );
};

export default Privacy;
