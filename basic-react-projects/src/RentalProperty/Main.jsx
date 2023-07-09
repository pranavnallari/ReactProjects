import PropertyList from './PropertyList'


const data = [
    { id: 12093, name: 'Desert Yurh', rating: 4.3, price: 1350 },
    { id: 12123, name: 'Mount Rushmore', rating: 3.3, price: 1000 },
    { id: 12034, name: 'Logan Cabin', rating: 4.7, price: 1550 },
    { id: 12548, name: 'Oceanview Beach', rating: 3.9, price: 1200 },
    { id: 12321, name: 'Gold Campground', rating: 4.6, price: 1050 },
    { id: 12327, name: 'Redneck Treehouse', rating: 4.1, price: 1300 }
]
export default function Main() {
    return (
        <div>   
            <PropertyList properties={data} />
        </div>
    )
}