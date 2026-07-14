import { useState } from "react";

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false); 

    return (<div className="bg-gray-900 border border-blue-900 hover:border-cyan-400 shadow-lg rounded-xl p-5 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.10)]">
        <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center"
        > <h3 className="text-lg font-semibold text-left text-white">
                {question} </h3>


            <span className="text-2xl text-white">
                {open ? "-" : "+"}
            </span>
        </button>

        {open && (
            <p className="mt-4 text-gray-300">
                {answer}
            </p>
        )}
    </div>


    );
}

export default FAQItem;
