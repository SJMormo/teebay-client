import FormInputs from "./FormInputs";
import useFormContext from "../../Hooks/useFormContext";
import { Form } from "react-bootstrap";

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
      <h2>{title[page]}</h2>
      {/* <h2>{page}</h2> */}

      <div className="button-container">
        <button
          type="button"
          className={`button ${prevHide}`}
          onClick={handlePrev}
          disabled={disablePrev}
        >
          Prev
        </button>

        <button
          type="button"
          className={`button ${nextHide}`}
          onClick={handleNext}
          disabled={disableNext}
        >
          Next
        </button>

        <button
          type="submit"
          className={`button ${submitHide}`}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </div>

      <FormInputs />
    </Form>
  );

  return content;
};
export default MainForm;
