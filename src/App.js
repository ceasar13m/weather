import React, {useState} from 'react';
import './App.css';
import {getId, getData} from "./service/http";

const App = () => {
    const [data, changeData] = useState([]);

    const getCityId = async () => {
        let id;
        await getId()
            .then(response => response.json())
            .then(json => id = json[0].woeid);
        return await getData(id)
            .then(response => response.json())
            .then(json => changeData(json.consolidated_weather));
    };
    ;


    return (
        <div className="App">
            {data.map(data => (
                <div>
                    {data.id}
                </div>

            ))}
            <button onClick={getCityId}>Load info</button>
        </div>
    );
};

export default App;
