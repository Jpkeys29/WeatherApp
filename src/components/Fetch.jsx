// import { useState, useEffect } from "react";

// const Fetch = () => {
//     const [clima, setClima] = useState([]);
//     const [location, setLocation] = useState('New York');

//     // const handleLocation = (e) => {
//     //     setLocation(e.target.value)
//     // }

//     useEffect(() => {
        // fetch(`http://api.weatherapi.com/v1/current.json?key=3da3dfd986734b34884171856242405&q=${location}&aqi=no`)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setClima(data);
    //         })
    //         .catch(error => {
    //             console.log('Error fetching data:', error)
    //         });
    // }, [location]); //avoids unnecessary fetches
//     return (
//         <ul>
//             <li><h1>{clima.location?.name}</h1> </li>
//             {/* <li><h3>{clima.location?.localtime}</h3></li> */}
//             <li>{clima.current?.condition.text}</li>
//             <li><h1>{clima.current?.feelslike_f}</h1></li>

//         </ul>
//     )
// }
// export default Fetch;