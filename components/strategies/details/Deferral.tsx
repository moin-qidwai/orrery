import { useRecoilState } from "recoil";
import { deferralState } from "../../../atoms/strategies";

export function Deferral() {
    const [deferrals] = useRecoilState(deferralState);
    return (
        <div>
            A deferral may provide enhanced yield on the condition that under low outstanding contracts the payments to the investor are deferred.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Outstanding Contracts Barrier (%)</th>
                            <th>Additional Yield (%)</th>
                            <th>Buy</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            deferrals.map((deferral, idx) => (
                                <tr key={'deferral-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{deferral.outstanding}%</td> 
                                    <td>{deferral.yield}%</td>
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
    id: 'deferral',
    title: 'Deferral',
    Strategy: Deferral
}