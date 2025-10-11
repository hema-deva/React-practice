import { useEffect, useState } from "react"

export const UseDebounceHook = (value,delay) => {
    const [debounce, setDebounce] = useState(value)
    useEffect(() => {
        const timer= setTimeout(() => {
            setDebounce(value)
            
        },delay)
        return () => clearTimeout(timer)
    },[value,delay])
    return debounce;
}

export const UseThrottleHook = (value,delay) => {
    const [throttle, setThrottle] = useState(value)
    const [lastExecutedDate, setLastExecutedDate] = useState(Date.now());
    
    useEffect(() => {
        let now = Date.now();
        if(now - lastExecutedDate > delay) {
            setThrottle(value);
            setLastExecutedDate(now)
        }

    },[value,delay,lastExecutedDate])
    

    return throttle;
}