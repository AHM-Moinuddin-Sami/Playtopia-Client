import Marquee from "react-fast-marquee";

const logos = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Hasbro_logo.svg/1200px-Hasbro_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pathfinder_RPG_1e_logo.svg/1920px-Pathfinder_RPG_1e_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Wizards_of_the_Coast_logo_2021.webp/200px-Wizards_of_the_Coast_logo_2021.webp.png",
    "https://upload.wikimedia.org/wikipedia/en/f/fa/A_logo_for_Pressman_Toys.png",
    "https://upload.wikimedia.org/wikipedia/en/f/fe/Games_Workshop_logo.svg",
    "https://cdn11.bigcommerce.com/s-gyhhtwx4/images/stencil/original/logo_1_hi_1676652181__04422.orig_1_1680205232.original.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Beziergameslogo-The-New-Cla.png",

];

const Partners = () => {
    return (
        <div>
            <h3 className='text-center text-6xl text-primary-content my-10 font-semibold'>Our Partners</h3>
            <Marquee speed={300} className="my-10 md:w-[10vh]">
                {
                    logos.map((logo, i) => <img
                        key={i}
                        src={logo}
                        className="h-[15vh] md:w-fit"
                    >
                    </img>)
                }

            </Marquee>
        </div>
    );
};

export default Partners;