import "./slot.css"
export default function Slot({val1,val2,val3}) {
    const isWin = val1===val2 && val1===val3
    const msg=isWin?"You Win!!":"You Lose :("
    const style={color:isWin?"green":"red"}
return <div className="Slot">
        <h1 className="head" style={style}>{msg}</h1>
        <h1>{val1} {val2} {val3}</h1>
        {isWin?<p>Congrats!!!</p>:null}
    </div>
}