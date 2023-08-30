import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Select a Title for Your Product",
    1: "Select Categories",
    2: "Select Description",
    3: "Select Price",
    4: "Summary",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    rentPrice: "",
    rentalType: "",
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      title: "",
      category: "",
      description: "",
      price: "",
      rentPrice: "",
      rentalType: "",
    }));
  }, []);

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = e.target.value;
    // const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    titleForm,
    categoryForm,
    descriptionForm,
    priceForm,
    ...requiredInputs
  } = data;

  const canSubmit =
    // [...Object.values(requiredInputs)].every(Boolean) && 
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key === "title")
    .map((key) => data[key])
    .every(Boolean);
  const canNextPage2 = Object.keys(data)
    .filter((key) => key === 'category')
    // .map((key) => data[key])
    .every(Boolean);
  const canNextPage3 = Object.keys(data)
    .filter((key) => key === 'description')
    .map((key) => data[key])
    .every(Boolean);
  const canNextPage4 = Object.keys(data)
    .filter((key) => key === 'price')
    .map((key) => data[key])
    .every(Boolean);


  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3) || 
    (page === 3 && !canNextPage4);

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
