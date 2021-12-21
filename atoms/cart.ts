import { atom } from 'recoil';

export const cartState = atom({
    key: "cartState", // unique ID (with respect to other atoms/selectors)
    default: new Map<number, number>()
});