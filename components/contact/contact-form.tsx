"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [packageType, setPackageType] = useState("");
    const [numPeople, setNumPeople] = useState("");

    const resultRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "ba81d733-25b6-4860-b8fe-33c8315f625c");

        const formObject = Object.fromEntries(formData);
        const json = JSON.stringify(formObject);

        if (resultRef.current) resultRef.current.innerHTML = "Please wait...";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (response.ok && resultRef.current) {
                resultRef.current.innerHTML = result.message;
            } else {
                console.error(result);
                if (resultRef.current)
                    resultRef.current!.innerHTML =
                        result.message || "Error occurred";
            }
        } catch (error) {
            console.error(error);
            if (resultRef.current)
                resultRef.current!.innerHTML = "Something went wrong!";
        } finally {
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                if (resultRef.current) resultRef.current.style.display = "none";
            }, 3000);
        }
    };
    return (
        <div className="w-full mx-auto px-4 py-12 bg-green-100">
            <div className="text-center mb-10 sm:mb-0">
                <h3 className="text-green-700 uppercase text-sm font-bold mb-2">PHONE</h3>
                <p className="text-3xl font-light mb-2 text-green-800">+91 9740806599</p>
                <Link href="tel:+919740806599" className="font-semibold inline-block text-green-600 text-sm hover:border-b hover:border-green-500 pb-0.5">
                    Call Now
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-center">
                <div className="flex-1 text-center mb-10 sm:mb-0">
                    <h3 className="text-green-700 uppercase text-sm font-bold mb-2">EMAIL</h3>
                    <p className="text-xl font-light mb-2 text-green-800">gandhadagudigardenbyahatti@gmail.com</p>
                    <Link
                        href="mailto:gandhadagudigardenbyahatti@gmail.com"
                        className="font-semibold inline-block text-green-600 text-sm hover:border-b hover:border-green-500 pb-0.5"
                    >
                        Send Mail
                    </Link>
                </div>

                <div className="w-px bg-gray-200 mx-4"></div>

                <div className="flex-1 text-center">
                    <h3 className="text-green-700 uppercase text-sm font-bold mb-2">ADDRESS</h3>
                    <p className="text-xl font-light mb-2 leading-relaxed text-green-800">
                        Hebsur Road, Byahatti Hubballi,
                        <br />
                        Karnataka 580023
                    </p>
                    <Link
                        href="https://maps.app.goo.gl/XAhF46L7Wy24JKfP8?g_st=aw"
                        target="_blank"
                        className="font-semibold inline-block text-green-600 text-sm hover:border-b hover:border-green-500 pb-0.5"
                    >
                        Get Direction
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-12 flex flex-col items-center text-center">


                    <div className="mt-36 mr-10">
                        <Image
                            src="/images/group.png"
                            alt="People white water rafting in a red raft"
                            width={800}
                            height={450}
                            className="ml-5 sm:ml-0 w-[800px] h-[430px] sm:h-[510px] rounded-none"
                        />
                    </div>
                </div>

                <div className="space-y-8 mt-16">
                    <div className="text-center">
                        <p className="text-green-700 text-sm font-bold mb-2">CONTACT US TO GET MORE DETAILS</p>
                        <h2 className="text-4xl font-semibold text-green-800">
                            LET&apos;S START A<br />
                            CONVERSATION
                        </h2>
                    </div>

                    <form id="form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Name" id="name"
                                name="name"
                                onChange={e => setName(e.target.value)}
                                value={name} className="w-full border border-green-900 p-3 rounded-none" />
                            <input type="text" placeholder="Email" id="email"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email} className="w-full border border-green-900 p-3 rounded-none" />

                        </div>
                        <div className="flex space-x-4">
                            <input type="tel" placeholder="Phone" id="phone"
                                name="phone"
                                onChange={e => setNumber(e.target.value)}
                                value={number} className="w-full border border-green-900 p-3 rounded-none" />
                            <input type="text" placeholder="Subject" id="subject"
                                name="subject"
                                onChange={e => setSubject(e.target.value)}
                                value={subject} className="w-full border border-green-900 p-3 rounded-none" />

                        </div>
                        <div className="flex space-x-4">
                            <select
                                name="package"
                                id="package"
                                className="p-2 border border-green-900 rounded w-full"
                                value={packageType}
                                onChange={e => setPackageType(e.target.value)}
                            >
                                <option value="">Select Package</option>
                                <option value="family-package">Family Package</option>
                                <option value="weekend-package">Weekend Package</option>
                                <option value="students-package">Students Package</option>
                                <option value="corporate-package">Corporate Package</option>
                            </select>

                            <input
                                type="number"
                                placeholder="Number of people"
                                id="numPeople"
                                name="numPeople"
                                onChange={e => setNumPeople(e.target.value)}
                                value={numPeople}
                                className="w-full border border-green-900 p-3 rounded-none"
                            />

                        </div>

                        <div>
                            <textarea
                                placeholder="Message"
                                id="comments"
                                name="comments"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                rows={5}
                                className="w-full border border-green-900 p-3 rounded-none"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 px-6 hover:bg-green-500 transition-colors"
                            >
                                Submit
                            </button>
                            <div
                                id="result"
                                ref={resultRef}
                                className="text-green-500 ml-4"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
