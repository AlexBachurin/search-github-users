import React from 'react';
import { Card, Followers, Info, Navbar, Repositories, Search, User } from '../components';
import { Pie3D, Bar3D, Column3D, Doughnut2D } from '../charts/index'
const Dashboard = () => {
    return <main>
        <Navbar />
        <Search />
        <Info />
        <User />
        <Followers />
        <Pie3D />
        <Bar3D />
        <Column3D />
        <Doughnut2D />
    </main>;
};

export default Dashboard;
