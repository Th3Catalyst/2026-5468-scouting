import { useRef } from 'react'

function scoreDisplay({ ref, children }) {
    return (
        <span className="header" ref={ ref }>{ children }</span>
    )
}

export default function fuelCounter({ classes }: {classes?: string}) {
    if (!classes) {
        classes = ""
    }

    let scoreElement = useRef(null);    
    function changeScore(increment: number) {
        scoreElement.current!.innerText = scoreElement.current!.innerText + increment
    } 
    return (
        <table className={`tableNormal ${classes}`}>
          <tbody>
                <tr>
                    <th colSpan={3}>
                        <span className="header">Fuel Count: </span>
                    </th>
                    <th>
                        <scoreDisplay ref={scoreElement}>0</scoreDisplay>
                    </th>
                </tr>
                <tr>
                    <td>
                        <button className="Jbutton" onClick={() => {changeScore(-1)}}>-1</button>
                    </td>
                    <td>
                        <button className="Jbutton" onClick={() => {changeScore(1)}}>+1</button>
                    </td>
                    <td>
                        <button className="Jbutton" onClick={() => {changeScore(5)}}>+5</button>
                    </td>
                    <td>
                        <button className="Jbutton" onClick={() => {changeScore(10)}}>+10</button>
                    </td>
                </tr>
          </tbody>
      </table>
    )
}
