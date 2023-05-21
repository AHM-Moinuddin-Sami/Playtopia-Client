import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToysEntry from "./MyToysEntry/MyToysEntry";
import Swal from "sweetalert2";
import useTitle from "../CustomHooks/useTitle";

const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState(null);
    const [update, setUpdate] = useState(null);
    const [deleted, setDeleted] = useState(null);

    const itemsPerPage = 20;

    const totalPages = Math.ceil(toys.length / itemsPerPage);

    const pageNo = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNo.push(i);
    }

    useEffect(() => {
        async function fetchData() {
            console.log(sort);
            let url;
            if (sort) {
                url = `http://localhost:5000/toys?page=${currentPage}&limit=${itemsPerPage}&sort=${sort}&email=${user.email}`;
            }
            else {
                url = `http://localhost:5000/toys?page=${currentPage}&limit=${itemsPerPage}&email=${user.email}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setToys(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage, sort, user, update, deleted]);

    const handleSort = (direction) => {
        setSort(direction);
        setCurrentPage(0);
    };

    const handleUpdate = (id, updatedPrice, updatedDescription, updatedQuantity) => {

        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedDescription, updatedPrice, updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "The values will be updated!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setDeleted(data.modifiedCount);
                            Swal.fire(
                                'Updated!',
                                'Your file has been updated.',
                                'success'
                            )
                        }
                    })

                }
            })

        console.log(updatedDescription, updatedPrice, updatedQuantity)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure you want to delete this entry?',
                        text: "This cannot be reverted!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setUpdate(data.deletedCount);
                            Swal.fire(
                                'Deleted!',
                                'The entry has been successfully deleted.',
                                'success'
                            )
                        }
                    })
                }
            })
    }

    console.log(toys);
    return (
        <div>
            <div className="my-4 text-center">
                <button onClick={() => handleSort(1)} className="btn mr-2">Ascending</button>
                <button onClick={() => handleSort(-1)} className="btn">Descending</button>
            </div>
            <div className="overflow-x-auto min-h-[70vh]">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Toy</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub-category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <MyToysEntry
                                key={toy._id}
                                no={index}
                                name={toy.toyName}
                                seller={toy.sellerName}
                                email={toy.sellerEmail}
                                subCategory={toy.subCategory}
                                price={toy.price}
                                quantity={toy.quantity}
                                id={toy._id}
                                photo={toy.photo}
                                description={toy.description}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                            >

                            </MyToysEntry>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagination text-center">
                <div className="btn-group">
                    {
                        pageNo.map(number => <button
                            key={number}
                            className={`btn active:bg-purple-700 ${currentPage + 1 === number ? 'selected btn-disabled' : ''}`}
                            onClick={() => setCurrentPage(number)}
                        >{number}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;