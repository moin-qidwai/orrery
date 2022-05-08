import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { riskFreeRateState } from "../atoms/rate";
import getPusherChannel from "../services/pusher.service";

export default function RiskFreeRateListener() {
    const [rate, setRate] = useRecoilState(riskFreeRateState);
    const channel = getPusherChannel();
    
    useEffect(() => {
        channel.bind('message', (newRate: number) => setRate(newRate));
    }, [rate]);
    
    return (<div></div>)
}