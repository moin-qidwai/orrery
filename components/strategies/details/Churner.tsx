import { useRecoilState } from "recoil";
import { churnsState } from "../../../atoms/strategies";

export function Churner() {
    const [churns] = useRecoilState(churnsState);
    return (
        <div>
            The churner provides principle protection in the event of sudden change in churn rate of the business that is providing the contract.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Churn Increase (prior term)</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            churns.map((churn, idx) => (
                                <tr key={'churn-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{churn.increase}%</td> 
                                    <td>${churn.price}</td>
                                    <td><button className="btn btn-xs btn-link btn-accent" >Select</button></td>
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
    id: 'churner',
    title: 'Churner',
    Strategy: Churner
}