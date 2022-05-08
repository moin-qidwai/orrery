import { atom } from 'recoil';

export const riskFreeRateState = atom<number>({
    key: "riskFreeRateState",
    default: 0
});