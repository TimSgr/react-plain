import "../app/globals.css";
import "../app/styles/slider.css";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

type SliderProps = {
    images: string[];
};

function SimpleCarousel({ images }: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            const totalWidth =
                sliderRef.current.scrollWidth / 2;
            setTrackWidth(totalWidth);
        }
    }, []);
    return (
        <div 
            className="slider_carousel"
            style={{ "--track-width": `${trackWidth}px` } as React.CSSProperties}
        >
            <div className="slider_part" ref={sliderRef}>
                {images.map((image, index) => (
                    <Image
                        key={`image-1-${index}`} // Uniqueness durch Key
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={140}
                    />
                ))}
                {images.map((image, index) => (
                    <Image
                        key={`image-1-copy-${index}`}
                        src={image}
                        alt={`Image ${index + 1} copy`}
                        width={100}
                        height={140}
                    />
                ))}
            </div>
            <div className="slider_part translate-x-full" ref={sliderRef}>
                {images.map((image, index) => (
                    <Image
                        key={`image-2-${index}`} // Uniqueness durch Key
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={140}
                    />
                ))}
                {images.map((image, index) => (
                    <Image
                        key={`image-1-copy-${index}`}
                        src={image}
                        alt={`Image ${index + 1} copy`}
                        width={100}
                        height={140}
                    />
                ))}
            </div>
            <div className="slider_part translate-x-200" ref={sliderRef}>
                {images.map((image, index) => (
                    <Image
                        key={`image-3-${index}`} // Uniqueness durch Key
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={140}
                    />
                ))}
                {images.map((image, index) => (
                    <Image
                        key={`image-1-copy-${index}`}
                        src={image}
                        alt={`Image ${index + 1} copy`}
                        width={100}
                        height={140}
                    />
                ))}
            </div>
        </div>
    );
}

export default SimpleCarousel;
