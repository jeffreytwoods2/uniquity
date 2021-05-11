import React from "react";
import "./style.css";

function Summary() {
    return (
        <div className="container">
            <p className="text-center fs-4" id="summary">
                Every number sent through this site is saved to a database.
                Try out a number and see if you're the first person on Earth to send it!
            </p>
        </div>
    );
}

export default Summary;