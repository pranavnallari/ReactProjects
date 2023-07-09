import Slot from "./slot"

export default function SlotMain() {
    return (
       <div>
        <Slot val1="+" val2="+" val3="+"/>
        <Slot val1="-" val2="+" val3="-" />
        <Slot val1="-" val2="-" val3="-" />
       </div>
    )
}