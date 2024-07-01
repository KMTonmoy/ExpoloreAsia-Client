import React from 'react';

const Faq = () => {
    return (
        <div className="my-20">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border rounded-lg p-6 bg-white shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">What payment methods do you accept?</h2>
                        <p className="text-gray-700">We accept various payment methods, including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Rest assured, your payment information is secure and encrypted for your protection.</p>
                    </div>
                    <div className="border rounded-lg p-6 bg-white shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Do you offer international shipping?</h2>
                        <p className="text-gray-700">Yes, we offer international shipping to most countries worldwide. However, please note that shipping times and fees may vary depending on your location. Feel free to reach out to our customer support team for more information.</p>
                    </div>
                    <div className="border rounded-lg p-6 bg-white shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">How can I track my order?</h2>
                        <p className="text-gray-700">Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package. If you encounter any issues or have questions about tracking your order, please don't hesitate to contact us.</p>
                    </div>
                    <div className="border rounded-lg p-6 bg-white shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">What is your return policy?</h2>
                        <p className="text-gray-700">Our return policy allows you to return items within 30 days of delivery for a full refund or exchange. Items must be unused, in their original packaging, and accompanied by proof of purchase. Please review our complete return policy on our website for more details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
