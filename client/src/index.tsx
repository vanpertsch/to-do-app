import ReactDOM from "react-dom";

import Welcome from "./welcome";
import App from "./app";

// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

fetch("/user/id.json")
    .then((response) => response.json())
    .then((data) => {
        if (!data.userId) {
            ReactDOM.render(<Welcome />, document.querySelector("main"));
        } else {
            ReactDOM.render(
                <App user={data.userId} />,
                document.querySelector("main")
            );
        }
    });
