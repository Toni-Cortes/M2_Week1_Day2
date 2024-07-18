

function Weather (props){

    console.log(props.city)
    return(
        <div id="weather-container">
            <h2>{props.city}</h2>
            <p>50°</p>
        </div>
    )
}

export default Weather