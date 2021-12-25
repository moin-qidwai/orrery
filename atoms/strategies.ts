import { atom } from 'recoil';

export const expandedStrategyIdState = atom({
    key: "expandedStrategyIdState",
    default: ''
});

export const alternativeContractsState = atom({
    key: "alternativeContractsState",
    default: [
        {
            id: 1,
            name: "Anytime Fitness",
            value: 100,
            cost: 95,
            term: 9,
            cacToLtv: 20,
            runway: 18,
            risk: "moderate",
            netAccountGrowth: 33,
            outstandingContracts: 900
        },
        {
            id: 2,
            name: "Traveloc",
            value: 45,
            cost: 39,
            term: 6,
            cacToLtv: 15,
            runway: 11,
            risk: "moderate",
            netAccountGrowth: 21,
            outstandingContracts: 860
        },
        {
            id: 3,
            name: "Nutriboom",
            value: 67,
            cost: 59,
            term: 1,
            cacToLtv: 8,
            runway: 56,
            risk: "low",
            netAccountGrowth: -8,
            outstandingContracts: 370
        },
        {
            id: 4,
            name: "Big Apple",
            value: 199,
            cost: 180,
            term: 12,
            cacToLtv: 46,
            runway: 13,
            risk: "moderate",
            netAccountGrowth: 7,
            outstandingContracts: 540
        },
        {
            id: 5,
            name: "Gamer's Den",
            value: 149,
            cost: 130,
            term: 4,
            cacToLtv: 77,
            runway: 5,
            risk: "high",
            netAccountGrowth: 3,
            outstandingContracts: 100
        },
        {
            id: 6,
            name: "Stadia",
            value: 87,
            cost: 79,
            term: 3,
            cacToLtv: 13,
            runway: 45,
            risk: "low",
            netAccountGrowth: 4,
            outstandingContracts: 230
        },
        {
            id: 7,
            name: "Coursera",
            value: 87,
            cost: 75,
            term: 3,
            cacToLtv: 16,
            runway: 10,
            risk: "moderate",
            netAccountGrowth: 3.5,
            outstandingContracts: 430
        },
        {
            id: 8,
            name: "Udacity",
            value: 87,
            cost: 72,
            term: 3,
            cacToLtv: 25,
            runway: 12,
            risk: "moderate",
            netAccountGrowth: 2,
            outstandingContracts: 540
        },
        {
            id: 9,
            name: "Dance Infinity",
            value: 99,
            cost: 86,
            term: 12,
            cacToLtv: 6,
            runway: 25,
            risk: "low",
            netAccountGrowth: 125,
            outstandingContracts: 1200
        },
        {
            id: 10,
            name: "Sam's Yoga",
            value: 55,
            cost: 44,
            term: 24,
            cacToLtv: 39,
            runway: 5,
            risk: "high",
            netAccountGrowth: 20,
            outstandingContracts: 10
        },
        {
            id: 11,
            name: "AIA",
            value: 4,
            cost: 2.9,
            term: 1,
            cacToLtv: 120,
            runway: 4,
            risk: "high",
            netAccountGrowth: -21,
            outstandingContracts: 170
        },
        {
            id: 12,
            name: "Uniqlo",
            value: 490,
            cost: 470,
            term: 4,
            cacToLtv: 59,
            runway: 21,
            risk: "low",
            netAccountGrowth: 16,
            outstandingContracts: 320
        }
    ]
});

export const churnsState = atom({
    key: "churnsState",
    default: [
        {
            increase: 4,
            price: 0.63
        },
        {
            increase: 6,
            price: 0.75
        },
        {
            increase: 8,
            price: 0.91
        },
        {
            increase: 10,
            price: 1.13
        },
        {
            increase: 12,
            price: 1.25
        },
        {
            increase: 14,
            price: 1.42
        },
        {
            increase: 16,
            price: 1.57
        },
        {
            increase: 18,
            price: 1.88
        },
        {
            increase: 20,
            price: 2.32
        }
    ]
});

export const deferralState = atom({
    key: "deferralState",
    default: [
        {
            outstanding: 4,
            yield: 2.32
        },
        {
            outstanding: 6,
            yield: 1.99
        },
        {
            outstanding: 8,
            yield: 1.57
        },
        {
            outstanding: 10,
            yield: 1.42
        },
        {
            outstanding: 12,
            yield: 1.25
        },
        {
            outstanding: 14,
            yield: 1.13
        },
        {
            outstanding: 16,
            yield: 0.91
        },
        {
            outstanding: 18,
            yield: 0.75
        },
        {
            outstanding: 20,
            yield: 0.34
        }
    ]
});

export const growthExposureState = atom({
    key: "growthExposureState",
    default: [
        {
            asset: "Bitcoin",
            class: "Crypto",
            low: 47000,
            high: 67000,
            quantity: 0.0056,
            additionalInfo: "https://coinmarketcap.com/currencies/bitcoin/"
        },
        {
            asset: "Ethereum",
            class: "Crypto",
            low: 3800,
            high: 7700,
            quantity: 0.098,
            additionalInfo: "https://coinmarketcap.com/currencies/ethereum/"
        },
        {
            asset: "Solana",
            class: "Crypto",
            low: 190,
            high: 250,
            quantity: 1.2,
            additionalInfo: "https://coinmarketcap.com/currencies/solana/"
        },
        {
            asset: "MetaSapiens",
            class: "NFT",
            low: 50,
            high: 700,
            quantity: 1,
            additionalInfo: "https://nft.metasapiens.io/"
        },
        {
            asset: "SolHockey",
            class: "NFT",
            low: 20,
            high: 100,
            quantity: 2,
            additionalInfo: "https://solhockey.com/"
        },
        {
            asset: "Airtable Equity",
            class: "Private Equity",
            low: 10000,
            high: 50000,
            quantity: 0.0062,
            additionalInfo: "https://equityzen.com/company/airtable/"
        }
    ]
});

export const runwayExtenderState = atom({
    key: "runwayExtenderState",
    default: [
        {
            runway: 0.5,
            yield: 3.5
        },
        {
            runway: 1,
            yield: 3.05
        },
        {
            runway: 1.5,
            yield: 2.89
        },
        {
            runway: 2,
            yield: 2.67
        },
        {
            runway: 2.5,
            yield: 2.52
        },
        {
            runway: 3,
            yield: 2.4
        },
        {
            runway: 3.5,
            yield: 2.1
        },
        {
            runway: 4,
            yield: 1.91
        },
        {
            runway: 4.5,
            yield: 1.74
        },
        {
            runway: 5,
            yield: 1.32
        }
    ]
});

export const valueAppreciatorState = atom({
    key: "valueAppreciatorState",
    default: 0.91
});