import { useRecoilState } from "recoil";
import { randomizeIterationState } from "../atoms/randomize";

export default function Randomized() {
    const [randomIteration, setRandomIteration] = useRecoilState(randomizeIterationState);
    setTimeout(() => setRandomIteration(randomIteration+1), 2000);
    return (<div></div>)
}