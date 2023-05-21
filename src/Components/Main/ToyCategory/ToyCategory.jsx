import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategoryCard from './ToyCategoryCard/ToyCategoryCard';

const ToyCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));

    }, []);

    return (
        <div className='my-5'>
            <h3 className='text-center text-5xl mb-5 font-semibold'>Browse toys by Category</h3>
            <Tabs>
                <div className="text-center">
                    <TabList >
                        <Tab>Traditional Boardgames</Tab>
                        <Tab>Tabletop Boardgames</Tab>
                        <Tab>Puzzles</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 justify-items-center bg-white' style={{ backgroundImage: `url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg")` }}>
                        {
                            toys.map(toy => {
                                if (toy.subCategory === "traditional")
                                    return <ToyCategoryCard key={toy._id}
                                        name={toy.toyName}
                                        photo={toy.photo}
                                        price={toy.price}
                                        rating={toy.rating}
                                        id={toy._id}
                                    ></ToyCategoryCard>
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 justify-items-center bg-white' style={{ backgroundImage: `url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg")` }}>
                        {
                            toys.map(toy => {
                                if (toy.subCategory === "tabletop")
                                    return <ToyCategoryCard key={toy._id}
                                        name={toy.toyName}
                                        photo={toy.photo}
                                        price={toy.price}
                                        rating={toy.rating}
                                        id={toy._id}
                                    ></ToyCategoryCard>
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 justify-items-center bg-white' style={{ backgroundImage: `url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg")` }}>
                        {
                            toys.map(toy => {
                                if (toy.subCategory === "puzzle")
                                    return <ToyCategoryCard key={toy._id}
                                        name={toy.toyName}
                                        photo={toy.photo}
                                        price={toy.price}
                                        rating={toy.rating}
                                        id={toy._id}
                                    ></ToyCategoryCard>
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyCategory;