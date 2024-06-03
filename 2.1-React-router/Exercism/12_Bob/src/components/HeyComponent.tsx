import React, { useState } from 'react';

const answers: string[] = [
    "Whatever.",
    "Sure.",
    "Whoa, chill out!",
    "Calm down, I know what I'm doing!",
    "Fine. Be that way!"
];

const hey = (message: string): string => {
    const speech = message.trim();
    if (speech === "") return answers[4];
    const isQuestion = speech.endsWith("?") ? 1 : 0;
    const isYelling = /[A-Z]+/.test(speech) && speech === speech.toUpperCase() ? 2 : 0;
    return answers[isQuestion + isYelling];
};

const HeyComponent: React.FC = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        const reply = hey(message);
        setResponse(reply);
    };

    return (
        <div>
            <input type="text" value={message} onChange={handleChange} placeholder="Type your message" />
            <button onClick={handleClick}>Send</button>
            <p>{response}</p>
        </div>
    );
};

export default HeyComponent;
