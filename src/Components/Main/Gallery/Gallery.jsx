import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { PhotoAlbum } from "react-photo-album";

const Gallery = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        AOS.init();
        fetch("https://playtopia-server.vercel.app/galleryPhotos")
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])

    return (
        <div className=' mx-auto'>
            <div className="text-primary-content font-semibold text-center my-10">
                <h3 className='text-xl md:text-6xl mb-5'>Gallery Section</h3>
                <p className=''>Check out some pictures of our products</p>
            </div>
            <div className='' data-aos="fade-up" data-aos-duration="1000">
                <PhotoAlbum layout="columns" photos={photos}>
                </PhotoAlbum>
            </div>
        </div>
    );
};

export default Gallery;