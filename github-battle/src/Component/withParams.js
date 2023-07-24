import { useParams } from "react-router-dom";

const withParams = (wrappedComponent) => (props) => {
    const params = useParams();
    //etc.... other react-router-dom v6 hooks

    return(
        <wrappedComponent
        {...props}
        params={params}
        //etc...
        />
    )
}
export default withParams;