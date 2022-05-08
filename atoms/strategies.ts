import { atom } from 'recoil';
import { AlternativeContract } from '../domain/contract';

export const expandedStrategyIdState = atom({
    key: "expandedStrategyIdState",
    default: ''
});

export const alternativeContractsState = atom<AlternativeContract[]>({
    key: "alternativeContractsState",
    default: []
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