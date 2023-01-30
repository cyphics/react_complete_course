import {useEffect, useState} from "react";

const useCounter = (params) => {
    const [counter, setCounter] = useState(params.start);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + params.step);
        }, 1000);

        return () => clearInterval(interval);
    }, [params]);

    return counter;
}

export default useCounter;