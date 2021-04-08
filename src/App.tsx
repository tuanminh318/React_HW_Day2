import React from 'react';
import './App.css';
import {RatingBar} from "./components/RatingBar";
import {SwitchesGroup} from "./components/Notification";

function App() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className="App">
            <RatingBar ratingNumber={list}/>
            <div className="notification" style={{marginTop: 50}}>
                <h2>NOTIFICATIONS </h2>
                <div className="main">
                    <h5>Control you notification and aut-follow settings</h5>
                    <SwitchesGroup title={"Email Notification"} subtitle={"Commits data and history"} isOn={false}/>
                    <SwitchesGroup title={"Push Notification"} subtitle={"Commits data and history"} isOn={false}/>
                    <SwitchesGroup title={"Monthly Notification"} subtitle={"Commits data and history"} isOn={false}/>
                    <SwitchesGroup title={"Quarter Notification"} subtitle={"Commits data and history"} isOn={false}/>
                </div>
            </div>
        </div>
    );
}

export default App;
