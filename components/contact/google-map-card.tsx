import Link from "next/link";

export default function GoogleMapCard() {
    return (
        <>
            <div className="w-full mx-auto mt-10 shadow-lg rounded-lg overflow-hidden border border-green-200">
                <iframe
                    className="w-full h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1744890306386!2d74.58184497507917!3d15.27009368526525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8db00255648eb%3A0x20d5a6b72179061c!2sGandhadagudi%20Garden%2C%20Byahatti%2C%20Karnataka%20580023!5e0!3m2!1sen!2sin!4v1716463645854!5m2!1sen!2sin"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div className="p-5 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800">Gandhadagudi Garden</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Hebsur Road, Byahatti, Karnataka 580023
                    </p>

                    <div className="flex items-center mt-3">
                        <div className="text-yellow-400 flex space-x-1">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                        </div>
                        <span className="text-sm text-gray-600 ml-2">(4.2 - 420 reviews)</span>
                    </div>

                    <Link
                        href="https://maps.app.goo.gl/XAhF46L7Wy24JKfP8?g_st=aw"
                        target="_blank"
                        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm">
                        📍 Get Directions
                    </Link>
                </div>
            </div>

        </>
    );
}