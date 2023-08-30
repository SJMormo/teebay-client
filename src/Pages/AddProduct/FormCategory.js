import React from "react";
import useFormContext from "../../Hooks/useFormContext";
import { Col, Form, Row } from "react-bootstrap";

const FormCategory = () => {
  const { data, handleChange } = useFormContext();
  return (
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Select Type</Form.Label>
        <Form.Select
          defaultValue="Select Option"
          name="category"
          value={data.category}
          onChange={handleChange}
        >
          <option>ELECTRONICS</option>
          <option>FURNITURE</option>
          <option>HOME APPLIANCES</option>
          <option>SPORTING GOODS</option>
          <option>OUTDOOR</option>
          <option>TOY</option>
        </Form.Select>
      </Form.Group>
    </Row>
  );
};

export default FormCategory;
