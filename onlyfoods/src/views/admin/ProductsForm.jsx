import { useState } from "react";
// import { Table, Input, Button, Row, Col } from "reactstrap";
// import ReactLoading from "react-loading";
// import axios from "axios";
import './App.css';

const ProductsForm = props => {

    const initialState = {
        products: props.products
    }

    const [values, setValues] = useState(initialState);

    const handler = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: parseInt(value) });
    }

    return (
        <div>

        </div>
    );
}

export default ProductsForm;