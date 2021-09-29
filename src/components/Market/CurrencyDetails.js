import React from 'react';
import { useParams } from 'react-router';

const CurrencyDetails = () => {

    const {name} = useParams();

    console.log("Name - ",name)
    return (
        <div>
            CurrencyDetails
        </div>
    );
};

export default CurrencyDetails;