import FormInputs from "./FormInputs";
import useFormContext from "../../Hooks/useFormContext";
import { Button, Col, Form, Row } from "react-bootstrap";

const MainForm = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const content = (
    <Form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
      <h2 className="d-flex justify-content-center">{title[page]}</h2>
      {/* <h2>{page}</h2> */}

      <FormInputs />
      
        <Row>
          <Col className="d-flex justify-content-evenly">
            <Button
              type="button"
              className={`button ${prevHide}`}
              onClick={handlePrev}
              disabled={disablePrev}
            >
              Prev
            </Button>
          </Col>
          <Col className="d-flex justify-content-evenly">
            {nextHide ? (
              <></>
            ) : (
              <Button type="button" onClick={handleNext} disabled={disableNext}>
                Next
              </Button>
            )}

            {submitHide ? (
              <></>
            ) : (
              <Button
                type="submit"
                className={`button ${submitHide}`}
                disabled={!canSubmit}
              >
                Submit
              </Button>
            )}
          </Col>
        </Row>
    </Form>
  );

  return content;
};
export default MainForm;
