import React, {useState, useEffect} from 'react'
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";
import Offices from "./components/Offices/Offices";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import JsonData from './data/data.json';


function App() {
    const [landingPageData, setLandingPageData] = useState({});

    function getLandingPageData() {
        setLandingPageData(JsonData)
    }


    useEffect(() => {
        getLandingPageData();
    }, [])

    console.log(landingPageData)
    return (
        <div className="App">
            <Navbar/>
            <Info data={landingPageData.Info}/>
            <Offices data={landingPageData.Offices}/>
            <UsefulLinks data={landingPageData.UsefulLinks}/>
        </div>
    );
}

export default App;
