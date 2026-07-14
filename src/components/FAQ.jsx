import FAQItem from "./FAQItem";

function FAQ() {
    return (
        <div className="px-6 md:px-12 lg:px-24 py-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-white mt-2"> Frequently Asked Questions </h1>
            <div className="mt-10 space-y-6">
                <FAQItem
                    question="What services do you provide?"
                    answer="We provide professional Web Development and UI/UX Design services tailored to meet your business needs."
                />

                <FAQItem
                    question="How long does it take to complete a website?"
                    answer="Project timelines depend on the scope, but most business websites are completed within 1-4 weeks."
                />

                <FAQItem
                    question="Do you create responsive websites?"
                    answer="Yes, every website we build is fully responsive and optimized for desktop, tablet, and mobile devices."
                />

                <FAQItem
                    question="Can you redesign an existing website?"
                    answer="Absolutely! We can redesign your current website with a modern, user-friendly, and professional look."
                />

                <FAQItem
                    question="Do you provide website maintenance and support?"
                    answer="Yes, we offer ongoing maintenance, updates, and technical support to keep your website running smoothly."
                />

                <FAQItem
                    question="How can I get started with MA Software Solution?"
                    answer="Simply contact us with your project requirements, and we'll discuss the best solution for your business."
                />

                <FAQItem
                    question="Will my website be SEO-friendly?"
                    answer="Yes, we follow SEO best practices to help improve your website's visibility on search engines."
                />

                <FAQItem
                    question="Can I update my website after it's launched?"
                    answer="Yes, we can build your website with an easy-to-manage system or provide support whenever updates are needed."
                /> 
            </div>
        </div>

    );
}

export default FAQ;
