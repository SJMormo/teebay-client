import React from 'react';
import useFormContext from "../../Hooks/useFormContext";

const FormSummary = () => {
    const { data, handleChange } = useFormContext()
    return (
        <div>
            <h1 className='mt-3'>Summay</h1>
            <h5>Title: {data.title}</h5>
            <h5>Category: {data.category}</h5>
            <h5>Description: {data.description}</h5>
            <h5>Price: ${data.price}, To rent: ${data.rentPrice} {data.rentalType}</h5>
        </div>
    );
};

export default FormSummary;