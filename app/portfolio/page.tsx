import React from "react";

export default function PortfolioPage() {
    return (
        <main className="bg-gray-50 text-gray-800 p-8">
            {/* 標題 */}
            <div className="space-y-4 p-2">
                <h1 className="text-2xl font-bold  text-blue-900 mb-8">畢業專題-智慧能源監控系統(以火鍋店平台實作)</h1>
                <p className="text-gray-600 mb-4 font-bold">下面是專題中火鍋店平台的實際操作過程</p>
            </div>
            {/* 影片區塊 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
                <div className="rounded-lg space-y-4">
                    <p className="font-bold">菜單操作流程</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eaZTRo65_Co?si=8qESr8x4bxuNPMvh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="rounded-lg space-y-4">
                    <p className="font-bold">管理端操作流程</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-LIjkFKoXxg?si=oakRDHSOFl5tkVCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </main>
    );
}
