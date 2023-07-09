import './Property.css'
export default function Property({name="Your MOM",rating=3.4,price=1200})
{
    return (
        <div className="Property">
            <h1>{name}</h1>
            <h2>${price} a night</h2>
            <h4>{rating}⭐</h4>
        </div>
    )
}