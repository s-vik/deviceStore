import { Spinner } from "react-bootstrap";


const Preloader = () => (
    <Spinner style={{margin: "0 auto", position: "sticky", top: "50%"}} animation="grow" />
)

export default Preloader;