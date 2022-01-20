import React from 'react';
import { UserInfo, Info, Navbar, Repositories, Search } from '../components';
import { Pie3D, Bar3D, Column3D, Doughnut2D } from '../charts/index'
const Dashboard = () => {
    return <main>
        <Navbar />
        <Search />
        <Info />
        <UserInfo />
        <Pie3D />
        <Bar3D />
        <Column3D />
        <Doughnut2D />
    </main>;
};

export default Dashboard;
