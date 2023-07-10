import { useState } from "react";
const data = [
    "#8d14f8",
    "#7f8145",
    "#17af56",
    "#16e8ea",
    "#8391d0",
    "#dfc80c",
    "#b0f3e8",
    "#3f1ba8",
    "#733df3",
    "#af03c9",
    "#863d5d",
    "#c4ff84",
    "#31eb8d"
]
export default function Box()
{
    const [colour,setColour] = useState("white")
    const changeColour = () => {setColour(data[randIndex])}
    const randIndex = Math.floor(Math.random()*data.length)
    const styles = {"backgroundColor":colour,"width":"150px","height":"150px"}
    return <div onMouseOver={changeColour} style={styles}>
    </div>
}