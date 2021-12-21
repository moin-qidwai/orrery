import { selector } from "recoil";
import { cartState } from "../atoms/cart";
import { contractsState } from "../atoms/contracts";

export const optimizedCartState = selector({
  key: "optimizedCartState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const contracts = get(contractsState);
    const cart = get(cartState);
    const cartContracts = contracts.filter(contract => cart.has(contract.id));
    return cartContracts;
  },
});

export const cartMetricState = selector({
    key: "cartMetricState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const cartContracts = get(optimizedCartState);
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