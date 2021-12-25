import { useRecoilState, useRecoilValue } from "recoil";
import { selectedCartContractState } from "../../atoms/cart";
import { finalizedCartState } from "../../selectors/cart";


export default function CartContractsTable() {
    const contracts = useRecoilValue(finalizedCartState);
    const [_, setSelectedContractId] = useRecoilState(selectedCartContractState);

    function selectContract(id: number) {
        setSelectedContractId(id);
    }

    return (
        <div>
            <div className="overflow-x-auto">
                    <table className="table w-full table-compact">
                        <thead>
                            <tr>
                                <th></th> 
                                <th>Name</th> 
                                <th>Value</th> 
                                <th>Cost</th>
                                <th>Difference</th>
                                <th>Cac/LTV (%)</th>
                                <th>Runway (months)</th>
                                <th>Term (months)</th>
                                <th>Optimizations</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                contracts.map((contract, idx) => (
                                    <tr key={'contract-id-'+idx} className={contract.selected ? 'active' : ''}>
                                        <th>{idx+1}</th> 
                                        <td>{contract.name}</td> 
                                        <td>${contract.value}</td> 
                                        <td className={contract.diff < 0 ? 'text-rose-500' : 'text-lime-500'}>${contract.cost}</td> 
                                        <td className={contract.diff < 0 ? 'text-rose-500' : 'text-lime-500'}>{contract.diff}%</td> 
                                        <td>{contract.cacToLtv}</td> 
                                        <td>{contract.runway}</td> 
                                        <td>{contract.term}</td> 
                                        <td><button className="btn btn-xs w-3/6 btn-link btn-accent" onClick={() => selectContract(contract.id)}>Optimize</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    )

}