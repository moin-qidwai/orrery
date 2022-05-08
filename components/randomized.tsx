import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { randomizeIterationState } from "../atoms/randomize";

export default function Randomized() {
    const [randomIteration, setRandomIteration] = useRecoilState(randomizeIterationState);

    useEffect(() => {
        const timeout = setTimeout(() => setRandomIteration(randomIteration+1), 500);
        return () => clearTimeout(timeout)
    }, [randomIteration])
    
    return (<div></div>)
}