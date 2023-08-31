import FormInputs from "./FormInputs";
import useFormContext from "../../Hooks/useFormContext";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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

  // Getting current user id
  const {
    loading: loadingUsers,
    error: usersError,
    data: usersData,
  } = useQuery(GET_USERS);
  const [user, loading] = useAuthState(auth);

  if (loadingUsers || loading) return <p>Loading...</p>;
  if (usersError) return <p>Error: {usersError.message}</p>;

  const targetEmail = user?.email;

  const userWithTargetEmail = usersData.users.find(
    (product) => product.email === targetEmail
  );

  const userId = userWithTargetEmail.id
  console.log(userId);

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
