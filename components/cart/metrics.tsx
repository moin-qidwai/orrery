import { useRecoilState, useRecoilValue } from "recoil";
import { selectedCartContractState } from "../../atoms/cart";
import { cartMetricState } from "../../selectors/cart";

export default function CartMetrics() {
    const cartMetrics = useRecoilValue(cartMetricState);
    const [_, setSelectedContractId] = useRecoilState(selectedCartContractState);
    
    if (cartMetrics == null) {
        return null
    }

    function selectContract(id: number) {
        setSelectedContractId(id);
    }

    const mRunway = cartMetrics.lowestRunwayContract;
    const mGrowth = cartMetrics.lowestGrowthContract;
    const mLeft = cartMetrics.lowestOutstandingContract;
    const mTerm = cartMetrics.longestTermContract;
    const mCacToLtv = cartMetrics.highestCacToLtvContract;

    return (
        <div className="w-full shadow stats">
            <div className="stat">
                <div className="stat-title opacity-70">Lowest Runway</div>
                <div className="stat-value text-lg text-info">{mRunway.name}</div> 
                <div className="stat-desc opacity-100">Only <span className="font-bold underline text-red-500">{mRunway.runway} months</span> of runway left</div>
                <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent" onClick={() => selectContract(mRunway.id)}>Optimize</button></div>
            </div> 
            <div className="stat">
                <div className="stat-title opacity-70">Lowest Growth</div>
                <div className="stat-value text-lg text-secondary">{mGrowth.name}</div>
                <div className="stat-desc opacity-100">
                    <span className={mGrowth.netAccountGrowth < 0 ? 'text-red-500 font-bold underline' : 'text-orange-500 font-bold underline'}>
                        { mGrowth.netAccountGrowth < 0 ? 'Declined' : 'Grew' } {mGrowth.netAccountGrowth < 0 ? mGrowth.netAccountGrowth * -1 : mGrowth.netAccountGrowth}%
                    </span>
                </div>
                <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent"  onClick={() => selectContract(mGrowth.id)}>Optimize</button></div>
            </div> 
            <div className="stat">
                <div className="stat-title opacity-70">Lowest Outstanding Contracts</div>
                <div className="stat-value text-lg text-info">{mLeft.name}</div>
                <div className="stat-desc opacity-100">Only <span className="font-bold underline text-red-500">{mLeft.outstandingContracts}</span> contracts available.</div>
                <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent"  onClick={() => selectContract(mLeft.id)}>Optimize</button></div>
            </div> 
            <div className="stat">
                <div className="stat-title opacity-70">Longest Term</div> 
                <div className="stat-value text-lg text-primary">{mTerm.name}</div> 
                <div className="stat-desc opacity-100">Term of <span className="font-bold underline text-orange-500">{mTerm.term} months</span></div>
                <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent"  onClick={() => selectContract(mTerm.id)}>Optimize</button></div>
            </div> 
            <div className="stat">
                <div className="stat-title opacity-70">Highest CAC/LTV</div> 
                <div className="stat-value text-lg text-info">{mCacToLtv.name}</div> 
                <div className="stat-desc opacity-100">CAC/LTV of <span className="font-bold underline text-orange-500">{mCacToLtv.cacToLtv}%</span></div>
                <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent" onClick={() => selectContract(mCacToLtv.id)}>Optimize</button></div>
            </div> 
        </div>
    )

}