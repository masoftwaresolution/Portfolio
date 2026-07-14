import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Contact() {
    const [phone, setPhone] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_j2zhqda',
            'template_34a0l3e',
            form.current,
            'iAOQNMv6DIh8ab86a'
        )
            .then(() => {
                alert("Message Sent Successfully!");
            })
            .catch((error) => {
                alert("Failed to send message");
                console.log(error);
            });
    };

    return (
        <div>
            <div className="bg-[url('/images/contact.jpg')] bg-cover bg-center h-[70vh]">
                <div className="bg-black/70 h-full flex flex-col justify-center items-center text-white text-center px-6">
                    <p className="text-blue-400 font-semibold mb-4">MA Software Solution </p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="max-w-3xl text-lg text-gray-300 text-left md:text-center lg:text-center">Get in touch with us to discuss your web development ideas, business goals, and creative projects. We are ready to build modern, responsive, and high-performing websites for your brand.</p>
                </div>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center min-h-screen bg-slate-950 pt-2 md:pt-4 lg:pt-0 px-6 md:px-12 lg:px-24">
                <form ref={form} onSubmit={sendEmail} className="bg-slate-900 border border-blue-900 hover:border-cyan-400 p-8 mt-6 py-6 rounded-xl shadow-lg lg:w-1/2">
                    <h1 className="text-white text-3xl font-bold text-center mb-6">Request a Qoute </h1>
                    <input type="text" name="name" placeholder="Your Name" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <input type="email" name="email" placeholder="Your Email" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <input type="text" name="subject" placeholder="Subject" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <input
                        type="hidden"
                        name="time"
                        value={new Date().toLocaleString()}
                    />
                    <div className="mb-4">
                        <PhoneInput
                            defaultCountry="pk"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputProps={{
                                name: "phone",
                                required: true,
                            }}
                            className="w-full"
                            inputClassName="!w-full !h-[50px] !bg-slate-900 !text-white !border !border-white !rounded-r-lg"
                            countrySelectorStyleProps={{
                                buttonClassName:
                                    "!bg-slate-900 !border !border-white !rounded-l-lg hover:!bg-slate-800",
                                dropdownClassName:
                                    "!bg-slate-900 !text-white !border !border-slate-700",
                            }}
                        />
                    </div>
                    <textarea name="message" placeholder="Message" className="text-white w-full border p-3 mb-4 rounded-lg h-32" required ></textarea>
                    <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900"> Send Message </button>
                </form>
                <div className="mx-auto md:w-1/2 lg:max-w-sm md:px-auto py-10">
                    <div className="h-auto w-full bg-slate-900 border border-blue-900 hover:border-cyan-400 hover:-translate-y-2 rounded-2xl">
                        <div className="flex justify-center items-center text-3xl text-white pt-8 " ><FaPhoneAlt /></div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-2">Call Us</h1>
                        <h1 className="text-gray-300 text-center font-semibold pt-2">+923413035086</h1>
                        <p className="text-gray-300 pb-4 text-center font-semibold pt-2">Available Monday-Saturday, 9 AM - 8 PM</p>
                    </div>
                    <div className="h-auto w-full my-4 bg-slate-900 border border-blue-900 hover:border-cyan-400 hover:-translate-y-2 rounded-2xl">
                        <div className="flex justify-center items-center text-3xl text-white pt-8 " ><FaEnvelope /></div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-2">Email</h1>
                        <h1 className="text-gray-300 text-center font-semibold pt-2">masoftwaresolution7@gmail.com</h1>
                        <p className="text-gray-300 pb-4 text-center font-semibold pt-2">We usually reply within 24 hours.</p>
                    </div>
                    <div className="h-auto w-full px-4 bg-slate-900 border border-blue-900 hover:border-cyan-400 hover:-translate-y-2 rounded-2xl">
                        <div className="flex justify-center items-center text-3xl text-white pt-8 " ><FaMapMarkerAlt /></div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-2">Location</h1>
                        <h1 className="text-white text-center font-semibold pt-2">One Unit Chowk,</h1>
                        <p className="text-gray-300 pb-4 text-center font-semibold pt-2">Bahawalpur Punjab, Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;