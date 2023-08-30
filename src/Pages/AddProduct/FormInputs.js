import Category from "./FormCategory"
import Title from "./FormTitle"
import Description from "./FormDescription"
import Price from "./FormPrice"
import Summary from "./FormSummary"
import useFormContext from "../../Hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Title />,
        1: <Category />,
        2: <Description />,
        3: <Price />,
        4: <Summary />,
    }

    const content = (
        <div className="d-flex justify-content-center">
            {display[page]}
        </div>
    )

    return content
}
export default FormInputs