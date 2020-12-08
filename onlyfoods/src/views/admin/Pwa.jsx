import React, { useEffect, useState } from "react";

import {
    Card,
    CardBody,
    Row,
    Col, Button
} from "reactstrap";

function Pwa() {

    const [, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };

    // if (!supportsPWA) {
    //     return null;
    //   }

    return (
        <div className="content">
            <Row>
                <Col sm="12">
                    <br></br>
                    <h4>Instalar la aplicación web progresiva</h4>
                    <center>
                        <Card >
                            <CardBody>
                                <Button id="setup_button" aria-label="Install app" title="Install app"
                                    onClick={onClick}
                                >
                                    Install
                                </Button>
                            </CardBody>
                        </Card>
                    </center>
                </Col>
            </Row>
        </div>
    )
};


export default Pwa;

