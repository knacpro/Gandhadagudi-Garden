import Image from "next/image"
import Link from "next/link"

export default function ContactForm() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
                <h3 className="text-[#a4b743] uppercase text-sm font-medium mb-2">PHONE</h3>
                <p className="text-3xl font-light mb-2">+91 96204 65007</p>
                <Link href="tel:+919620465007" className="inline-block text-black text-sm border-b border-[#a4b743] pb-0.5">
                    Call Now
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-center">
                <div className="flex-1 text-center">
                    <h3 className="text-[#a4b743] uppercase text-sm font-medium mb-2">EMAIL</h3>
                    <p className="text-xl font-light mb-2">info@gandhadagudigarden.com</p>
                    <Link
                        href="mailto:info@wildernestdandeli.com"
                        className="inline-block text-black text-sm border-b border-[#a4b743] pb-0.5"
                    >
                        Send Mail
                    </Link>
                </div>

                <div className="w-px bg-gray-200 mx-4"></div>

                <div className="flex-1 text-center">
                    <h3 className="text-[#a4b743] uppercase text-sm font-medium mb-2">ADDRESS</h3>
                    <p className="text-xl font-light mb-2 leading-relaxed">
                        Hebsur Road, Byahatti Hubballi,
                        <br />
                        Karnataka 580023
                    </p>
                    <Link
                        href="https://maps.google.com/?q=Hassanmad, Ambewadi Gram Dandeli, Karnataka 581325"
                        target="_blank"
                        className="inline-block text-black text-sm border-b border-[#a4b743] pb-0.5"
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
                            className="w-[800px] h-[430px] rounded-none"
                        />
                    </div>
                </div>

                <div className="space-y-8 mt-16">
                    <div className="text-center">
                        <p className="text-[#a4b743] text-sm mb-2">CONTACT US TO GET MORE DETAILS</p>
                        <h2 className="text-4xl font-light">
                            LET'S START A<br />
                            CONVERSATION
                        </h2>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 rounded-none" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone" className="w-full border border-gray-300 p-3 rounded-none" />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full border border-gray-300 p-3 rounded-none"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#a4b743] text-white py-3 px-6 hover:bg-[#94a63c] transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
