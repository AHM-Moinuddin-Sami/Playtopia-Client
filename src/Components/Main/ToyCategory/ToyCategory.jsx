import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategoryCard from './ToyCategoryCard/ToyCategoryCard';

const ToyCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://playtopia-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data));

    }, []);

    return (
        <div className='my-5 md:mx-auto'>
            <h3 className='text-center md:text-6xl text-primary-content mb-5 font-semibold'>Browse toys by Category</h3>
            <Tabs>
                <div className="text-center">
                    <TabList >
                        <Tab>Traditional Boardgames</Tab>
                        <Tab>Tabletop Boardgames</Tab>
                        <Tab>Puzzles</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='bg-cover' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1642056446459-1f10774273f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")` }}>
                        <div className='grid md:grid-cols-3 md:w-10/12 md:mx-auto gap-3 rounded justify-items-center'>
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
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='bg-cover' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80")` }}>
                        <div className='grid md:grid-cols-3 md:w-10/12 md:mx-auto gap-3 rounded justify-items-center'>
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
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='bg-cover' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")` }}>
                        <div className='grid md:grid-cols-3 md:w-10/12 md:mx-auto gap-3 rounded justify-items-center'>
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
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyCategory;