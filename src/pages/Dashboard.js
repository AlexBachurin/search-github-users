import React from 'react';
import { UserInfo, Info, Navbar, Repositories, Search } from '../components';
import { useGlobalContext } from '../context';
const Dashboard = () => {
    const { loading } = useGlobalContext();
    if (loading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img className='loading-img' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1642886493/preloader_nwwndc.gif" alt="loading" />
            </main>
        )
    }
    return <main>
        <Navbar />
        <Search />
        <Info />
        <UserInfo />
        <Repositories />
    </main>;
};

export default Dashboard;
