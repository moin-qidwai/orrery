import { useRecoilState } from "recoil";
import { runwayExtenderState } from "../../../atoms/strategies";

export function RunwayExtender() {
    const [runways] = useRecoilState(runwayExtenderState);
    return (
        <div>
            The runway extender help increase the yield of the investment while increasing risk of principal loss.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Minimum Runway (months)</th>
                            <th>Additional Yield (%)</th>
                            <th>Buy</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            runways.map((runway, idx) => (
                                <tr key={'runway-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{runway.runway} Months</td> 
                                    <td>{runway.yield}%</td>
                                    <td><button className="btn btn-xs btn-link btn-accent">Select</button></td>
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
    id: 'runway_extender',
    title: 'Runway Extender',
    Strategy: RunwayExtender
}