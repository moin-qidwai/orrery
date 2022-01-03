import { atom } from 'recoil';

export const underlyingVariablesState = atom({
    key: "underlyingVariablesState",
    default: [
        {
            id: 1,
            slug: "cac",
            name: "Customer Acquisition Cost",
        },
        {
            id: 2,
            slug: "ltv",
            name: "Lifetime Value",
        },
        {
            id: 3,
            name: "Value",
            slug: "value",
        },
        {
            id: 4,
            name: "Cost",
            slug: "cost",
        },
        {
            id: 5,
            name: "Term",
            slug: "term",
        },
        {
            id: 6,
            name: "Runway",
            slug: "runway",
        },
        {
            id: 7,
            name: "Risk",
            slug: "risk",
        },
        {
            id: 8,
            name: "Total Accounts",
            slug: "totalAccounts",
        },
        {
            id: 9,
            name: "Outstanding Contracts",
            slug: "outstandingContracts",
        },
        {
            id: 10,
            name: "Total Contracts",
            slug: "totalContracts",
        }
    ]
});