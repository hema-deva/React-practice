import { useEffect, useState } from "react";
import { UseCounterHook } from "./UseCounterHook"
import { UseDebounceHook, UseThrottleHook } from "./UseDebounceAndThrottleHook";

export const ExampleCustomHooks = () => {
    const {count, increment , decrement} = UseCounterHook(0);
    const [inputval, setInputval] = useState('')
    const debounce= UseDebounceHook(inputval,5000);
    const throttle = UseThrottleHook(inputval, 1000);

    useEffect(() => {
        if(debounce) {
            console.log(debounce);
        }

        if(throttle) {
            console.log(throttle);
        }
    },[debounce,throttle])
    return <>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <input value={inputval} onChange={(e) => setInputval(e.target.value)}/>
    </>
}