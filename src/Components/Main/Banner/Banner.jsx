import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const images = [
    "https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1615806647582-53fea422c9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1573141335932-9b22c45aa2df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1583334648584-6c2ba1fb41cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
];

const Banner = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <div className="mt-4 rounded-lg min-h-[75vh] bg-base-200 w-11/12 mx-auto" style={{ backgroundImage: `url("https://i.ibb.co/7rhL3xr/dg-P4-EYWVvkl-n6zzb-Elf-transformed.jpg")` }}>
            <div className="z-0 gap-4 p-4 justify-between  items-center flex flex-col lg:flex-row-reverse ">
                <Marquee speed={200} className="my-10 w-[20vh] rounded-lg">
                    {
                        images.map((image, i) => <img
                            key={i}
                            src={image}
                            className=" h-[75vh] w-[100vh] object-cover "
                        >
                        </img>)
                    }

                </Marquee>
                <div className="min-w-[50%] text-center">
                    <h1 className="text-5xl font-bold">Welcome to Playtopia!</h1>
                    <p className="py-6">The best way to pass the time is with our wonderful boardgames and puzzles, that will captivate you for hours and make you come back for more and more!</p>
                    <Link to={"/allToys"} className="btn btn-primary">Check out our wonderful collection!</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;