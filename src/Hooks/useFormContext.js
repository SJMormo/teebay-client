import { useContext } from "react";
import FormContext from "../Context/FormContext";

const useFormContext = () => {
    return useContext(FormContext)
}

export default useFormContext