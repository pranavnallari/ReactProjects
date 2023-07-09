import List from './list'

const data = [
    { item: 'eggs', quantity: 12, completed: false },
    { item: 'milk', quantity: 3, completed: true },
    { item: 'bread', quantity: 36, completed: false },
    { item: 'butter', quantity: 3, completed: false }
]
export default function Main() {
    return <div>
            <List items={data} />
        </div>
}