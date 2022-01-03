import { atom } from 'recoil';
import { Barrier, BarrierLevel, BarrierLevelType, BasketType, BreachType } from '../types/Barrier.d';

export const selectedContractsBuilderState = atom<Array<number>>({
    key: "selectedContractsBuilderState",
    default: []
});

export const selectedVariableBuilderState = atom({
    key: "selectedVariableBuilderState",
    default: 0
});

export const barrierBreachTypeBuilderState = atom<BreachType | null>({
    key: "barrierBreachTypeBuilderState",
    default: null
});

export const barrierBasketTypeBuilderState = atom<BasketType | null>({
    key: "barrierBasketTypeBuilderState",
    default: null
});

export const barrierLevelBuilderState = atom<BarrierLevel>({
    key: "barrierLevelBuilderState",
    default: { level: 100, type: BarrierLevelType.Percentage }
});

export const barrierRequiredBreachesBuilderState = atom<number>({
    key: "barrierRequiredBreachesBuilderState",
    default: 1
});

export const barrierPayoffBuilderState = atom<number>({
    key: "barrierPayoffBuilderState",
    default: 100
});

export const barriersBuilderState = atom<Array<Barrier>>({
    key: "barriersBuilderState",
    default: []
});
