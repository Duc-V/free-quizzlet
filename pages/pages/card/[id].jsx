import React from 'react';
import { useRouter } from 'next/router';
const Id = () => {
    const router = useRouter();
    const { id } = router.query;

    const cardData = { name: `Card ${id}`, description: `This is card number ${id}.` };
    return (
        <div>
            <h1>{cardData.name}</h1>
            <p>{cardData.description}</p>
        </div>
    );
};

export default Id;
