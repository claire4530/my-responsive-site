import React from "react";

export default function ContactPage() {
  return (
    <main className=" bg-gray-100 text-gray-800 flex justify-center items-center p-6 min-h-150">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-2xl space-y-5">
        <h1 className="text-2xl font-bold text-center text-gray-800 animate__animated animate__fadeIn">
          聯繫方式
        </h1>

        <div className="space-y-3">
          <ContactItem 
            icon="📱"
            title="Phone"
            link="tel:+0925292773"
            text="0925292773"
          />
          <ContactItem 
            icon="✉️"
            title="Email"
            link="mailto:claire4530@gmail.com"
            text="claire4530@gmail.com"
          />
          <ContactItem 
            icon={<span className="text-base font-bold text-green-600">LINE</span>}
            title="Line"
            link="https://line.me/ti/p/claire45304530"
            text="claire45304530"
          />
          <ContactItem 
            icon="🔗"
            title="GitHub"
            link="https://github.com/claire4530"
            text="github.com/claire4530"
          />
          <ContactItem 
            icon="🎮"
            title="Discord"
            link="https://discord.gg/claire4530"
            text="claire4530#1234"
          />
        </div>
      </div>
    </main>
  );
}

const ContactItem = ({ icon, title, link, text }: { icon: string, title: string, link: string, text: string }) => {
  return (
    <div className="flex items-center space-x-4 group hover:bg-gray-100 rounded-lg p-3 transition-all duration-300 ease-in-out transform hover:scale-105">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <p className="font-semibold text-gray-700">{title}</p>
        <a href={link} className="text-blue-500 hover:underline">
          {text}
        </a>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg text-gray-500">→</span>
      </div>
    </div>
  );
};
