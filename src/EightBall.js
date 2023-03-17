import { useState } from "react";
import "./EightBall.css"

function EightBall() {
    let answerArr = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]

    const [eightBallColor, changeColor] = useState('black');
    const [answer, getAnswer] = useState('Think of a Question');


    const reset = () => {
        changeColor('black');
        getAnswer('Think of a Question')
    }

    const generateAnswer = () => {
        const idx = Math.floor(Math.random() * (answerArr.length + 1));
        changeColor(answerArr[idx]['color']);
        getAnswer(answerArr[idx]['msg'])
    }


    return (
        <div>
            <div onClick={eightBallColor === 'black' ? generateAnswer : null} className={`eight-ball ${eightBallColor}`}>
                {answer}
            </div >
            {eightBallColor === 'black' ? null : <p><button onClick={reset} className="eight-ball-button">reset</button></p>}
        </div>
    )
}

export default EightBall