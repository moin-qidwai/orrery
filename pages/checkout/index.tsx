import { useRecoilValue } from "recoil";
import { optimizedCartState, cartMetricState } from "../../selectors/cart";

export default function Checkout() {
    const optimizedCartContracts = useRecoilValue(optimizedCartState);
    const cartMetrics = useRecoilValue(cartMetricState);
    if (cartMetrics == null) {
        return (<div>Please add some contracts to your cart.</div>)
    }

    const mRunway = cartMetrics.lowestRunwayContract;
    const mGrowth = cartMetrics.lowestGrowthContract;
    const mLeft = cartMetrics.lowestOutstandingContract;
    const mTerm = cartMetrics.longestTermContract;
    const mCacToLtv = cartMetrics.highestCacToLtvContract;

    return (
        <div className="bg-white mb-10">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="w-full shadow stats">
                    <div className="stat">
                        <div className="stat-title opacity-70">Lowest Runway</div>
                        <div className="stat-value text-lg text-info">{mRunway.name}</div> 
                        <div className="stat-desc opacity-100">Only <span className="font-bold underline text-red-500">{mRunway.runway} months</span> of runway left</div>
                        <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent">Optimize</button></div>
                    </div> 
                    <div className="stat">
                        <div className="stat-title opacity-70">Lowest Growth</div>
                        <div className="stat-value text-lg text-secondary">{mGrowth.name}</div>
                        <div className="stat-desc opacity-100">
                            <span className={mGrowth.netAccountGrowth < 0 ? 'text-red-500 font-bold underline' : 'text-orange-500 font-bold underline'}>
                                { mGrowth.netAccountGrowth < 0 ? 'Declined' : 'Grew' } {mGrowth.netAccountGrowth < 0 ? mGrowth.netAccountGrowth * -1 : mGrowth.netAccountGrowth}%
                            </span>
                        </div>
                        <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent">Optimize</button></div>
                    </div> 
                    <div className="stat">
                        <div className="stat-title opacity-70">Lowest Outstanding Contracts</div>
                        <div className="stat-value text-lg text-info">{mLeft.name}</div>
                        <div className="stat-desc opacity-100">Only <span className="font-bold underline text-red-500">{mLeft.outstandingContracts}</span> contracts available.</div>
                        <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent">Optimize</button></div>
                    </div> 
                    <div className="stat">
                        <div className="stat-title opacity-70">Longest Term</div> 
                        <div className="stat-value text-lg text-primary">{mTerm.name}</div> 
                        <div className="stat-desc opacity-100">Term of <span className="font-bold underline text-orange-500">{mTerm.term} months</span></div>
                        <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent">Optimize</button></div>
                    </div> 
                    <div className="stat">
                        <div className="stat-title opacity-70">Highest CAC/LTV</div> 
                        <div className="stat-value text-lg text-info">{mCacToLtv.name}</div> 
                        <div className="stat-desc opacity-100">CAC/LTV of <span className="font-bold underline text-orange-500">{mCacToLtv.cacToLtv}%</span></div>
                        <div className="stat-desc opacity-100 mt-1"><button className="btn btn-xs w-5/6 btn-accent">Optimize</button></div>
                    </div> 
                </div>

                <div className="divider">Selected Contracts</div> 
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
                                <th>Optimizations</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                optimizedCartContracts.map((contract, idx) => (
                                    <tr>
                                        <th>{idx+1}</th> 
                                        <td>{contract.name}</td> 
                                        <td>${contract.value}</td> 
                                        <td>${contract.cost}</td> 
                                        <td>{contract.cacToLtv}</td> 
                                        <td>{contract.runway}</td> 
                                        <td>{contract.term}</td> 
                                        <td><button className="btn btn-xs w-3/6 btn-link btn-accent">Optimize</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="divider">Optimization Strategies</div> 
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="card text-center shadow-2xl lg:card-side bg-primary text-primary-content">
                            <div className="card-body">
                                <p>Credit Default Swap</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-primary">Add</button> 
                                <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-primary text-primary-content">
                            <div className="card-body">
                                <p>Alternative Contract</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-primary">Add</button> 
                                <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-secondary text-secondary-content">
                            <div className="card-body">
                                <p>Runway Lock</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-secondary">Add</button> 
                                <button className="btn btn-secondary">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-accent text-accent-content">
                            <div className="card-body">
                                <p>Value Increase Participation</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-accent">Add</button> 
                                <button className="btn btn-accent">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-accent text-accent-content">
                            <div className="card-body">
                                <p>Alternative Investment Participation</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-accent">Add</button> 
                                <button className="btn btn-accent">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-primary text-primary-content">
                            <div className="card-body">
                                <p>Autocallable</p> 
                                <div className="justify-center card-actions">
                                <button className="btn btn-primary">Add</button> 
                                <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-secondary text-secondary-content">
                            <div className="card-body">
                                <p>Churner</p> 
                                <div className="justify-center card-actions">
                                    <button className="btn btn-secondary">Add</button> 
                                    <button className="btn btn-secondary">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center shadow-2xl lg:card-side bg-secondary text-secondary-content">
                            <div className="card-body">
                                <p>Deferral</p> 
                                <div className="justify-center card-actions">
                                    <button className="btn btn-secondary">Add</button> 
                                    <button className="btn btn-secondary">More info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}