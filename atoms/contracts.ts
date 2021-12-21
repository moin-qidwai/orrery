import { atom } from 'recoil';

export const contractsState = atom({
    key: "contractsState", // unique ID (with respect to other atoms/selectors)
    default: [
        {
            id: 1,
            name: "Netflix",
            image: "netflix.jpg",
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
            name: "Spotify",
            image: "spotify.jpg",
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
            name: "Apple Music",
            image: "apple.png",
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
            name: "Shopify",
            image: "shopify.png",
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
            name: "Abby's Coffee Shop",
            image: "coffee.png",
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
            name: "Apple TV",
            image: "apple.png",
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
            name: "Disney",
            image: "disney.png",
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
            name: "HBO",
            image: "hbo.jpg",
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
            name: "Roblox",
            image: "roblox.png",
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
            name: "Bob The Builder",
            image: "bob.jpg",
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
            name: "Obama's Sweatshop",
            image: "obama.jpg",
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
            name: "Dr Do Little",
            image: "doctor.jpg",
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