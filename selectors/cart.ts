import { selector } from "recoil";
import { cartState, selectedCartContractState } from "../atoms/cart";
import { contractsState } from "../atoms/contracts";
import { randomizeIterationState } from "../atoms/randomize";

export const cartedContractsState = selector({
  key: "cartedContractsState",
  get: ({ get }) => {
    const contracts = get(contractsState);
    const cart = get(cartState);
    const cartContracts = contracts.filter(contract => cart.has(contract.id));

    return cartContracts;
  },
});

export const randomizedCartState = selector({
    key: "randomizedCartState",
    get: ({ get }) => {
        const cartedContracts = get(cartedContractsState);
        const randomization = get(randomizeIterationState);

        if (randomization == 0) {
            return cartedContracts;
        }

        const randomizedCart = cartedContracts.map(contract => {
            const multiplier = randomIntFromInterval(5, 25)/1000;
            const sign = randomIntFromInterval(-1, 1);
            var updatedCost = Math.round((sign > 0 ? contract.cost * (1+multiplier) : contract.cost * (1-multiplier))*100)/100;
            updatedCost = updatedCost > contract.value * 0.98 ? Math.round((contract.value * 0.98)*100)/100 : updatedCost;
            const diff = Math.round((((updatedCost - contract.cost)/contract.cost)*100)*1000)/1000;
            return { ...contract, cost: updatedCost, diff: diff };
        });

        return randomizedCart;
    }
});

export const finalizedCartState = selector({
    key: "finalizedCartState",
    get: ({ get }) => {
        const randomizedCart = get(randomizedCartState);
        const selectedContract = get(selectedCartContractState);
        
        const cartContracts = randomizedCart
        .map(contract => selectedContract !== null && contract.id === selectedContract ? ({ ...contract, selected: true }) : ({ ...contract, selected: false }));

        if (!cartContracts.some(contract => contract.selected) && cartContracts.length > 0) {
            cartContracts[0].selected = true;
        }

        return cartContracts;
    }
})  

export const cartMetricState = selector({
    key: "cartMetricState",
    get: ({ get }) => {
      const cartContracts = get(cartedContractsState);
      if (cartContracts.length == 0) {
          return null;
      }

      const lowestRunway = cartContracts.reduce((result, contract) => result.runway < contract.runway ? result : contract);
      const lowestGrowth = cartContracts.reduce((result, contract) => result.netAccountGrowth < contract.netAccountGrowth ? result : contract);
      const lowestOutstandingContracts = cartContracts.reduce((result, contract) => result.outstandingContracts < contract.outstandingContracts ? result : contract);
      const longestTerm = cartContracts.reduce((result, contract) => result.term > contract.term ? result : contract);
      const highestCacToLtv = cartContracts.reduce((result, contract) => result.cacToLtv > contract.cacToLtv ? result : contract);
      return {
          lowestRunwayContract: lowestRunway,
          lowestGrowthContract: lowestGrowth,
          lowestOutstandingContract: lowestOutstandingContracts,
          longestTermContract: longestTerm,
          highestCacToLtvContract: highestCacToLtv
      };
    },
  });

  function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }