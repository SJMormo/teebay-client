import React from 'react';
import useFormContext from "../../Hooks/useFormContext";
import { Form } from 'react-bootstrap';

const FormDescription = () => {
    const { data, handleChange } = useFormContext()
    return (
        <Form.Group className="mt-3">
        <Form.Control as="textarea" name="description" placeholder="Product Description" value={data.description} onChange={handleChange} />
      </Form.Group>
        // <div>
        //     <div className="split-container">
        //         <div className="flex-col">
        //             <input
        //                 type="text"
        //                 id="description"
        //                 name="description"
        //                 placeholder="Product Description"
        //                 value={data.description}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //     </div>
        // </div>
    );
};

export default FormDescription;