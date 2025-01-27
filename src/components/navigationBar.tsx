import "../app/globals.css";
import Link from "next/link";
import { JSX } from "react";

type NavigationItem = {
    text: string;
    href: string;
    icon?: JSX.Element;
};

type NavigationBarProps = {
    items: NavigationItem[];
    position: string;
};

function NavigationBar({ items, position }: NavigationBarProps) {
    const isHorizontal = !position.includes("right") && !position.includes("left");

    return (
        <div
            className={`fixed ${position} z-50 ${
                isHorizontal ? "h-20 w-full" : "w-20 h-full"
            } bg-white border-gray-200 dark:bg-gray-700`}
        >
            <div
                className={`${
                    isHorizontal
                        ? "grid mx-auto"
                        : "flex flex-col"
                } h-full font-medium`}
                style={isHorizontal ? { gridTemplateColumns: `repeat(${items.length}, 1fr)` } : {}}
            >
                {items.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className="flex items-center justify-center group border border-gray-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
                    >
                        <div className="flex flex-col items-center justify-center h-20">
                            {item.icon || (
                                <svg
                                    className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                            )}
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                                {item.text}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NavigationBar;
