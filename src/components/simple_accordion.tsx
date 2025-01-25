"use client";
import { useState } from "react";

type content = {
    headline: string;
    content: any;
};

function simpleAccordion({ headline, content }: content) {
  const [openIndex, setOpenIndex] = useState(null);

  const togglesimpleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: headline,
      content: content,
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-md"
        >
          {/* Akkordeon-Header */}
          <button
            onClick={() => togglesimpleAccordion(index)}
            className="w-full p-4 text-left text-gray-800 font-medium flex justify-between items-center"
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {/* Akkordeon-Inhalt */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen p-4" : "max-h-0"
            }`}
          >
            <div className="text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default simpleAccordion;
