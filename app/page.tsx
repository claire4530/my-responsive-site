import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-[#FDFCFB] text-gray-800 flex justify-center items-center p-6 min-h-screen">
            <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-2xl space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-blue-900">我是張恬寧!</h1>
                    <p className="text-gray-700 font-semibold">不知道能放什麼，那我就來分享我的狗吧!</p>
                </div>

                {/* 圖片區：3張一排，2排 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div
                            key={num}
                            className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-md"
                        >
                            <Image
                                src={`/dog${num}.jpg`}
                                alt={`狗狗 ${num}`}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}


