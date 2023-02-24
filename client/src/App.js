import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";

const App = () => {
    //👇🏻 state holding the result
    const [result, setResult] = useState({});

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
