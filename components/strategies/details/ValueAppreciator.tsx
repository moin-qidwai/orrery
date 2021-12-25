import { useRecoilValue } from "recoil";
import { valueAppreciatorRandomizedState } from "../../../selectors/strategies";

export function ValueAppreciator() {
    const cost = useRecoilValue(valueAppreciatorRandomizedState)
    return (
        <div>
            The value appreciator provides exposure to the increase in value of the underlying standardized contracts.
            <br/>
            <div className="w-full flex justify-center">
                <div className="w-1/6 my-6 indicator">
                    <div className="w-full indicator-item indicator-bottom indicator-center">
                        <button className="w-full rounded-t-none btn btn-primary">Buy</button>
                    </div> 
                    <div className="w-full card">
                        <div className="card-body">
                            <h2 className="text-center card-title">{cost}%</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {
    id: 'value_appreciator',
    title: 'Value Appreciator',
    Strategy: ValueAppreciator
}