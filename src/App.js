import React, { useEffect } from "react";


//created an api url
const API_URL = 'https://www.omdbapi.com?apikey=c3721b49';

const App = () => {

    //f-ja za pretrazivanje filmova po nazivu
    const searchMoovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
    }

    useEffect(() => {

    }, []); //prima prazan niz ako zelimo da je pozovemo samo u startu
    return (
        <h1> App </h1>
    );
}

export default App;