import { selector } from "recoil";
import {
    selectedContractsBuilderState,
    selectedVariableBuilderState,
    barrierBasketTypeBuilderState,
    barrierBreachTypeBuilderState,
    barrierLevelBuilderState,
    barrierPayoffBuilderState,
    barrierRequiredBreachesBuilderState
} from "../atoms/builder";
import { Barrier } from "../types/Barrier";
import { cartedContractsState } from "./cart";

export const builderContractsState = selector({
    key: "builderContractsState",
    get: ({ get }) => {
        const cartedContracts = get(cartedContractsState);
        const selectedContracts = get(selectedContractsBuilderState);

        return cartedContracts.map(contract => ({ ...contract, selected: selectedContracts.includes(contract.id)}));
    }
});

export const builderEditingBarrierState = selector<Barrier | null>({
    key: "builderEditingBarrierState",
    get: ({ get }) => {
        const selectedContracts = get(selectedContractsBuilderState);
        const selectedVariable = get(selectedVariableBuilderState);
        const basketType = get(barrierBasketTypeBuilderState);
        const breachType = get(barrierBreachTypeBuilderState);
        const barrierLevel = get(barrierLevelBuilderState);
        const requiredBreaches = get(barrierRequiredBreachesBuilderState);
        const payoff = get(barrierPayoffBuilderState);

        if (!selectedContracts || !selectedVariable || basketType == null || breachType == null || !barrierLevel || !requiredBreaches || payoff == undefined || payoff == null) {
            return null;
        }

        return {
            variable: selectedVariable,
            contracts: selectedContracts,
            basketType,
            breachType,
            level: barrierLevel,
            requiredBreaches,
            payoff
        };
    }
});