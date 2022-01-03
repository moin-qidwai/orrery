export enum BreachType {
    AtOrAbove,
    Above,
    AtOrBelow,
    Below
}

export enum BasketType {
    AnyOf,
    WorstOf,
    AllOf
}

export enum BarrierLevelType {
    Percentage,
    Absolute
}

export class BarrierLevel {
    level: number
    type: BarrierLevelType
}

export class Barrier {
    breachType: BreachType;
    basketType: BasketType;
    level: BarrierLevel;
    requiredBreaches: number = 1;
    contracts: Array<number>;
    variable: number;
    payoff: number;
}