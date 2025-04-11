export const Props = () => {

    let hours = new Date().getHours()
    let minutes: string | number = new Date().getMinutes()
    const amOrpm = hours >= 12 ? "PM" : "AM"


    let timeOfDay

    if (hours >= 5 && hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else if (hours >= 17 && hours < 19) {
        timeOfDay = "Evening"
    } else {
        timeOfDay = "Night"
    }


    hours = hours % 12
    hours = hours === 0 ? 12 : hours

    minutes = minutes.toString().padStart(2, "0")

    const time = `${hours}:${minutes} ${amOrpm}`

    return (
        <>
            <h4>It is currently {time}</h4>
            <p>The time of the day is {timeOfDay}</p>
        </>
    )
}