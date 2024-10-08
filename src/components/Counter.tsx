import { useState } from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div className={classes.counter}>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};
