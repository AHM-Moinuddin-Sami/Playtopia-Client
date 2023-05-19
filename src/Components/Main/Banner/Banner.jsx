import { useEffect, useState } from "react";

const images = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80"

]

const Banner = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <div className="relative w-full h-[100vh]">
            {images.map((image, index) => (
                <img
                    key={index}
                    className={`absolute bg-gradient-to-b from-black to-gray-600  top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                    src={image}
                    alt={`Image ${index}`}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                TEXT
            </div>
        </div>
    );
};

export default Banner;