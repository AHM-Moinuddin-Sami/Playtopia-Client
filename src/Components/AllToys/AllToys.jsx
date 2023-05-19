import { useEffect, useState } from "react";

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => setToys(data));
    }, [])

    return (
        <div>
            {
                toys.length
            }
        </div>
    );
};

export default AllToys;