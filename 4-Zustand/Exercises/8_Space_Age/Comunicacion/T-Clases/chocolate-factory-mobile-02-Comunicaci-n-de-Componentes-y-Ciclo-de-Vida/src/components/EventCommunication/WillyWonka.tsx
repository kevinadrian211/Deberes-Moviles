import { FC, useState } from 'react';
import { OompaLoompaEvent } from "./OompaLoompa.tsx";
import './WillyWonka.css';

export const WillyWonkaEvent: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [report, setReport] = useState<string>("");

    const handleReport = (message: string): void => {
        alert(`Report received: ${message}`);
        setReport(message);
    };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaEvent orders={orders} onOrderChange={() => setOrders("Make more candies 🍭🍭🍭!")} onReport={handleReport} />
            {report && <p>Latest Report: {report}</p>}
        </div>
    );
}
