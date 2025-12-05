import React from 'react';

const UserAgreement = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">User Agreement</h1>
            <div className="prose prose-indigo max-w-none text-gray-600">
                <p className="mb-4">Last updated: December 2025</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use of Service</h2>
                <p className="mb-4">
                    You agree to use the service only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
                <p className="mb-4">
                    The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Termination</h2>
                <p className="mb-4">
                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
            </div>
        </div>
    );
};

export default UserAgreement;
