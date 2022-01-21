import React from 'react';
import { UserInfo, Info, Navbar, Repositories, Search } from '../components';

const Dashboard = () => {
    return <main>
        <Navbar />
        <Search />
        <Info />
        <UserInfo />
        <Repositories />
    </main>;
};

export default Dashboard;
