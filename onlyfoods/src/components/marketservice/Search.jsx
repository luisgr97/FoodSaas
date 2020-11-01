import React from "react";
import { InputGroup, Button, Input } from "reactstrap";


function Search(props) {
  return (
    <div className="row text-center">
      <div className="col-12 d-flex m-0">
        <InputGroup
          style={{
            width: "70%",
            margin: "auto",
          }}
        >
          <Input
            style={{
              width: "50%",
              height: "5%",
              outline: "none",
              backgroundColor: "#90caf9",
              color: "white",
              borderRadius: "10px",
              border: "0px white",
              margin: "1rem",
            }}
            placeholder="Que se te antoja? "
          />
        </InputGroup>
        <Button
          style={{
            backgroundColor: "#90caf9",
            width: "20%",
            borderRadius: "30px",
            border: "0px white",
            margin: "auto",
          }}
        >
          Buscar!
        </Button>
      </div>
    </div>
  );
}

export default Search;
