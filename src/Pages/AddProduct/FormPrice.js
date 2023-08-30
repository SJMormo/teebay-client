import React from "react";
import useFormContext from "../../Hooks/useFormContext";
import { Col, Form, Row } from "react-bootstrap";

const FormPrice = () => {
  const { data, handleChange } = useFormContext();
  return (
    <>
      <Row className="mb-3">
        <Form.Group className="mt-5" as={Col} controlId="formGridZip">
          <Form.Control type="number" name="price" placeholder="Product Price" value={data.price} onChange={handleChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Rent Cost</Form.Label>
          <Form.Control type="number" name="rentPrice" placeholder="Rent Price" value={data.rentPrice} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select Type</Form.Label>
          <Form.Select defaultValue="Select Option" name="rentalType" value={data.rentalType} onChange={handleChange}>
            <option>Per Hour</option>
            <option>Per Month</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </>

    // <>
    //   <Form.Group className="mt-3">
    //     <Form.Control
    //       type="number"
    //       name="price"
    //       placeholder="Product Price"
    //       value={data.price}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>
    //   <Form.Group className="mt-3">
    //     <Form.Control
    //       type="number"
    //       name="price"
    //       placeholder="Product Price"
    //       value={data.price}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>
    // </>

    // <div>
    //     <div className="split-container">
    //         <div className="flex-col">
    //             <input
    //                 type="text"
    //                 id="price"
    //                 name="price"
    //                 placeholder="Product Price"
    //                 value={data.price}
    //                 onChange={handleChange}
    //                 required
    //             />
    //         </div>
    //     </div>
    // </div>
  );
};

export default FormPrice;
