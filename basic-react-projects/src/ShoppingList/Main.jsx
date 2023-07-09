import List from './list'

const data = [
    { id:1,item: 'eggs', quantity: 12, completed: false },
    { id:2,item: 'milk', quantity: 3, completed: true },
    { id:3,item: 'bread', quantity: 36, completed: false },
    { id:4,item: 'butter', quantity: 3, completed: false }
]
export default function Main() {
    return <div>
            <List items={data} />
        </div>
}