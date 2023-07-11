import { useState } from 'react'
export default function Score({ numPlayers = 3, target = 5 }) {
    const players = []
    let isWinning = false
    const initializeScores = function (arr) {
        for (let i = 0; i < numPlayers; i++) {
            arr.push({ id: i, score: 0 })
        }
        return arr
    }
    initializeScores(players)

    const reset = function (arr) {
        arr.length = 0
        initializeScores(arr)
        setScores([...arr])
    }
    const [scores, setScores] = useState([...players])
    const updateScore = function()
    {
        setScores([...scores])
    }
    const playerScore = function (score) {
        return <li key={score.id}>
            <span>Player {score.id + 1} :- {score.score}</span>
            <button onClick={() => {
                score.score+=1
                updateScore(score)
                if (score.score === target) {
                    alert(`Player ${score.id + 1} is the Winner! :)`)
                    isWinning = true
                    reset(players)
                }
            }}>+1</button>
        </li>
    }


    const display = function () {
        const arr = []
        for (let i = 0; i < numPlayers; i++) {
            arr.push(playerScore(scores[i]))
        }
        return arr
    }



    return <div>
        <h4>First to {target} wins!!!</h4>
        <ul>
            {display()}
        </ul>
    </div>
}