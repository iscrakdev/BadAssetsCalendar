import "./App.css";
import EventPage from "./EventPage";
import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routing(){
    return (
        <BrowserRouter>
            <div className = "routing">
                <Navigation Navigation={Navigation}></Navigation>
                    <Routes>
                        <Route path="/events" element={<EventPage />}/>
                    </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Routing