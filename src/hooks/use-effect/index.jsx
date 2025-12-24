import { useState, useEffect } from "react";


export const EffectExample = () => {
    const [data, setData] = useState([]);
    const [showPedro, setShowPedro] = useState(false)
    
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));

    }, []);

    useEffect(() => {
        console.log("Pedro")

    }, [showPedro])

    
    const Pedro = () => {
        setShowPedro((prev => !prev))
    }

    return (
        <div>
            <p>I am a Developer: {showPedro? "Yes": "No"}</p>
            <button onClick={Pedro}
                >
                Toggle
                </button>
            <h1> Posts </h1>
            <ul>
                {data.map((item) =>(
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}