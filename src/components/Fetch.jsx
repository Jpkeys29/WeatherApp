import { useState, useEffect } from "react";

const Fetch = () => {
    const [clima, setClima] = useState([])

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=3da3dfd986734b34884171856242405&q=London&aqi=no')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setClima(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error)
            });
    }, []);
    return (
        <ul>
            <li>{clima.location?.name}</li>
            <li>{clima.current.condition.text}</li>
        </ul>
    )
}
export default Fetch;