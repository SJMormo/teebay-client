import React from "react";
import useFormContext from "../../Hooks/useFormContext";
import { Form } from "react-bootstrap";

const FormTitle = () => {
  const { data, handleChange } = useFormContext();
  return (
    <Form.Group className="mt-3">
        <Form.Control type="email" name="title" placeholder="Product Title" value={data.title} onChange={handleChange} />
      </Form.Group>
  );
};

export default FormTitle;
