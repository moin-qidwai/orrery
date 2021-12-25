import { useRecoilState } from "recoil";
import { growthExposureState } from "../../../atoms/strategies";

export function GrowthExposure() {
    const [growthExposure] = useRecoilState(growthExposureState);
    return (
        <div>
            This strategy can help provide exposure into growth assets by utilizing the yield received from the contract.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Asset</th>
                            <th>Asset Class</th>
                            <th>52 Week Low</th>
                            <th>52 Week High</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Buy</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            growthExposure.map((asset, idx) => (
                                <tr key={'asset-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{asset.asset}</td>
                                    <td>${asset.class}</td> 
                                    <td>${asset.low}</td> 
                                    <td>${asset.high}</td> 
                                    <td>${asset.quantity}</td>
                                    <td><a href={asset.additionalInfo} target="_blank"  rel="noreferrer" className="link link-primary">Additional Details</a></td>
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
    id: 'growth_exposure',
    title: 'Growth Exposure',
    Strategy: GrowthExposure
}