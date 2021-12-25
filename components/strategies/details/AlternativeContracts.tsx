import { useRecoilState } from "recoil";
import { alternativeContractsState } from "../../../atoms/strategies";

export function AlternativeContracts() {
    const [contracts] = useRecoilState(alternativeContractsState);
    return (
        <div>
            The selected contract has a very high customer acquisition cost relative to their lifetime value, the below contracts are similar with lower CAC/LTV ratios.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Name</th> 
                            <th>Value</th> 
                            <th>Cost</th>
                            <th>Cac/LTV (%)</th>
                            <th>Runway (months)</th>
                            <th>Term (months)</th>
                            <th>Replace</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            contracts.map((contract, idx) => (
                                <tr key={'contract-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{contract.name}</td> 
                                    <td>${contract.value}</td> 
                                    <td>${contract.cost}</td> 
                                    <td>{contract.cacToLtv}</td> 
                                    <td>{contract.runway}</td> 
                                    <td>{contract.term}</td> 
                                    <td><button className="btn btn-xs w-3/6 btn-link btn-accent" >Select</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default {
    id: 'alternative_contracts',
    title: 'Alternative Contracts',
    Strategy: AlternativeContracts
}