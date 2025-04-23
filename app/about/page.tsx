import React from "react";

export default function AboutPage() {
    return (
        <main className=" bg-gray-100 text-gray-800 flex justify-center items-center p-6 min-h-150">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-2xl space-y-5">
                <div className="text-center mb-6 space-y-4">
                    <h1 className="text-3xl font-bold text-blue-900">關於我</h1>
                    <p className="text-gray-700 font-bold">這裡是 Claire 的介紹頁面！</p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-shadow duration-300 max-w-md w-full text-center">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">我的 104 履歷</h2>
                    <p className="text-gray-600 mb-4">想更了解關於我的技能嗎？歡迎查看我的 104 履歷！</p>
                    <a
                        href="https://pda.104.com.tw/profile/share/6ROWSFvhNCYkxH0H6igswFvXeyDJ6sEH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-300"
                    >
                        前往履歷
                    </a>
                </div>
            </div>
        </main>


    );
}


