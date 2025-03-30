import React, { useEffect } from "react";
import Deck from "../components/Deck";
import Button from "../components/Button/Button";
import Link from "next/link";
const Home = () => {

    return (
        <div>
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
