import React from 'react';
import "./NoFound.css"
const NoFound = () => {
    return (
        <div className="nofound">
            <div>
                <p>Error <span className="text-danger">404</span></p>
                <p>Page Not Found ,Try again later !</p>
            </div>
        </div>
    );
};

export default NoFound;