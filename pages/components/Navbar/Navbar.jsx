import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/KingBedRounded';
import FolderIcon from '@mui/icons-material/Folder';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon}>
                <MenuIcon fontSize="large"/>
            </div>
            <div className={styles.icon}>
                <HomeRoundedIcon fontSize="large"/>
                <Link href='/'>Home</Link>
            </div>
            <div className={styles.icon}>
                <FolderIcon fontSize="large"/>
                <Link href='/pages/Collection'>Collections</Link>
            </div>
        </nav>
    );
};

export default Navbar;
