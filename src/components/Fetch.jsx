import { useState, useEffect } from "react";

const Fetch = () => {
    const [clima, setClima] = useState([])
    useEffect(() => {
        fetch('')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setClima(data);
        })
        .catch(error => {
            console.log('Error fetching data:',error)
        });
    },[]);
    return (
        <ul>
            <li>{clima}</li>
            <li></li>
            <li></li>
            
        </ul>
    )
}


export default Fetch;