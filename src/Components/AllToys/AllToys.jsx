import { useEffect, useState } from "react";

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => setToys(data));
    }, [])

    console.log(toys);

    return (
        <div>
            {
                toys.map(toy => toy.toyName)
            }
        </div>
    );
};

export default AllToys;