"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ExpandableBoxProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttons: { label: string; onClick: () => void }[];
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttons,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex border-solid rounded-xl border-black border p-2 flex-col items-center single_box ${
        isExpanded ? "expanded" : ""
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={50}
        style={{
          width: "33%",
          height: "auto",
          padding: "10px 0px",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Title */}
      <h2>{title}</h2>

      {/* Description */}
      {isExpanded && (
        <div className="more_content flex flex-col">
          <p>{description}</p>
          <div className="flex justify-between p-8">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="border-solid rounded-xl border-black border p-2"
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableBox;
