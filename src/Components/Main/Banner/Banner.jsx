import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const images = [
    "https://images.unsplash.com/photo-1571156425562-12341e7c9aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1635921481467-fba710b8e65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1551198581-aec5c1556d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1632758479790-50d04c86b97d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    "https://images.unsplash.com/photo-1589495374906-b7f5ca5de879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1617&q=80",
    "https://images.unsplash.com/photo-1587093336587-eeca6cb17cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1500061228850-950b0dc792c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1619887524805-92d8930f5050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1659480141041-c41defa79a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1621211255064-8915268b62f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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