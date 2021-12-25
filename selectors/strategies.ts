import { selector } from "recoil";
import { randomizeIterationState } from "../atoms/randomize";
import { valueAppreciatorState } from "../atoms/strategies";

export const valueAppreciatorRandomizedState = selector({
    key: "valueAppreciatorRandomizedState",
    get: ({ get }) => {
      const originalState = get(valueAppreciatorState);
      const randomIteration = get(randomizeIterationState);

      if (randomIteration == 0) {
          return originalState;
      }

      const multiplier = randomIntFromInterval(5, 25)/1000;
      const sign = randomIntFromInterval(-1, 1);
      var updatedCost = Math.round((sign > 0 ? originalState * (1+multiplier) : originalState * (1-multiplier))*100)/100;
      updatedCost = updatedCost < 0.6 ? 0.6 : updatedCost;
  
      return updatedCost;
    },
});

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}