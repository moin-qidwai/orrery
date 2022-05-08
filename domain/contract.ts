type AlternativeContract = {
    id: number,
    name: string,
    value: number,
    cost: number,
    profit: number | undefined | null,
    term: number,
    cacToLtv: number,
    runway: number,
    risk: "moderate" | "high" | "low",
    netAccountGrowth: number,
    outstandingContracts: number
  }

export type { AlternativeContract }