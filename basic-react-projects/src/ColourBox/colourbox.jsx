import Box from "./box"
export default function ColourBox()
{
    const boxes=[]
    for(let i=0;i<16;i++)
    {
        boxes.push(<Box/>)
    }
    return <div style={{"display":"flex","height":"600px","width":"600px","flexWrap":"wrap"}}>
        {boxes}
    </div>
}