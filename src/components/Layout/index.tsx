import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../Main/SideBar';
import { RightSideBar } from '../Main/RightSideBar';
// Styles
import styles from './index.module.scss';

export const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <SideBar />
            <Outlet />
            <RightSideBar />
        </div>
    );
};
