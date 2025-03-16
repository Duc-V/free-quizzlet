import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/KingBedRounded';
import FolderIcon from '@mui/icons-material/Folder';
const Navbar = () => {

    const [showList, setShowList] = React.useState(false);

    const handleMenuClick = () => {
        setShowList(!showList);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.menu} onClick={handleMenuClick}>
                <MenuIcon fontSize="large"/>
            </div>
            {showList && (
            <div className={styles.list}>
                <div className={styles.icon}>
                    <HomeRoundedIcon fontSize="large"/>
                    <Link href='/'>Home</Link>
                </div>
                <div className={styles.icon}>
                    <FolderIcon fontSize="large"/>
                    <Link href='/pages/Collection'>Collections</Link>
                </div>
            </div>
            )}
        </nav>
    );
};

export default Navbar;
