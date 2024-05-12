import { FC } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
    onReport: (message: string) => void;
}

export const OompaLoompaEvent: FC<OompaLoompaProps> = ({ orders, onOrderChange, onReport }) => {
    return (
        <div className="backgroundOompaLoompa">
            <h1 className="oompaLoompa">{orders}</h1>
            <button onClick={onOrderChange}>Change Orders</button>
            <button onClick={() => onReport("We are out of sugar!")}>Report Problem</button>
            <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
        </div>
    );
};
