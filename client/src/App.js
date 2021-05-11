import React from "react";
import Confirm from "./components/Confirm";
import Header from "./components/Header";
import NumForm from "./components/NumForm";
import Summary from "./components/Summary";

function App() {
    return (
        <div>
            <Header />
            <Summary />
            <NumForm />
        </div>
    );
}

export default App;