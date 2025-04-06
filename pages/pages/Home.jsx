import React  from "react";
import Deck from "@/components/Deck";
import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from "./Home.module.css"
const Home = () => {

    return (
        <div className={styles.home}>
            <Deck />
            <Link href={
                {pathname: 'pages/CreateCard'}
            }>
                <Button/>
            </Link>
        </div>
    );
};

export default Home;
