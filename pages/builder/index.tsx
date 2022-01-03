import { useRecoilValue, useRecoilState } from "recoil";
import { underlyingVariablesState } from "../../atoms/variables";
import { 
    selectedContractsBuilderState,
    selectedVariableBuilderState,
    barrierBreachTypeBuilderState,
    barrierBasketTypeBuilderState,
    barrierLevelBuilderState,
    barrierRequiredBreachesBuilderState,
    barrierPayoffBuilderState,
    barriersBuilderState
} from "../../atoms/builder";

import { builderContractsState, builderEditingBarrierState } from "../../selectors/builder";
import { BarrierLevelType, BasketType, BreachType } from "../../types/Barrier.d";

export default function Builder() {
    const contracts = useRecoilValue(builderContractsState);
    const underlyingVariables = useRecoilValue(underlyingVariablesState);
    const editingBarrier = useRecoilValue(builderEditingBarrierState);

    const [selectedContracts, updateSelectedContracts] = useRecoilState(selectedContractsBuilderState);
    const [selectedVariable, updateSelectedVariable] = useRecoilState(selectedVariableBuilderState);
    const [breachType, updateBreachType] = useRecoilState(barrierBreachTypeBuilderState);
    const [basketType, updateBasketType] = useRecoilState(barrierBasketTypeBuilderState);
    const [barrierLevel, updateBarrierLevel] = useRecoilState(barrierLevelBuilderState);
    const [requiredBreaches, updateRequiredBreaches] = useRecoilState(barrierRequiredBreachesBuilderState);
    const [payoff, updatePayoff] = useRecoilState(barrierPayoffBuilderState);

    const [barriers, updateBarriers] = useRecoilState(barriersBuilderState);

    function contractSelected(contractId: number) {
        if (selectedContracts.includes(contractId)) {
            updateSelectedContracts(selectedContracts.filter(id => id !== contractId));
        } else {
            updateSelectedContracts([...selectedContracts, contractId]);
        }
    }

    function variableSelected(variableId: number) {
        updateSelectedVariable(variableId);
    }

    function onChangeBreachType(event: { target: { value: string }}) {
        updateBreachType(Number(event.target.value));
    }

    function onChangeBasketType(event: { target: { value: string }}) {
        updateBasketType(Number(event.target.value));
    }

    function addBarrier() {
        if (editingBarrier != null) {
            updateBarriers([...barriers, editingBarrier]);
            updateBreachType(null);
            updateBasketType(null);
            updateBarrierLevel({ level: 100, type: BarrierLevelType.Percentage });
            updateSelectedVariable(0);
            updateSelectedContracts([]);
            updateRequiredBreaches(1);
            updatePayoff(100);
        }
    }

    return (
        <div className="bg-white mb-10">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
                    <div className="w-full">
                        <label htmlFor="contracts-modal" className="w-full btn btn-wide modal-button">Select Contracts</label> 
                        <input type="checkbox" id="contracts-modal" className="modal-toggle" /> 
                        <div className="modal">
                            <div className="modal-box">
                                {
                                    contracts.map(contract => (
                                        <div key={'builder-contract-'+contract.id} className="p-6 card bordered">
                                            <div className="form-control">
                                                <label className="cursor-pointer label">
                                                    <span className="label-text">{contract.name}</span> 
                                                    <input type="checkbox" checked={contract.selected} className="checkbox" onChange={() => contractSelected(contract.id)}/>
                                                </label>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                <div className="modal-action">
                                    <label htmlFor="contracts-modal" className="btn">Done</label> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <select className="select select-bordered select-primary w-full" value={selectedVariable} onChange={(e) => variableSelected(Number(e.target.value))}>
                            <option disabled={false}>Underlying Variable</option> 
                            {
                                underlyingVariables.map(variable => (
                                    <option key={'builder-underlying-variable-option-'+variable.id} value={variable.id}>{variable.name}</option>)
                                )
                            }
                        </select>
                    </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-5 xl:gap-x-8">
                    <div className="w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Breach Type</span>
                            </label>
                            <select className="select select-bordered select-primary w-full" value={breachType?.valueOf()} onChange={onChangeBreachType}>
                                <option key={'builder-breach-type-above'} value={BreachType.Above.valueOf()}>Above</option>
                                <option key={'builder-breach-type-at-or-above'} value={BreachType.AtOrAbove.valueOf()}>At Or Above</option>
                                <option key={'builder-breach-type-at-or-below'} value={BreachType.AtOrBelow.valueOf()}>At Or Below</option>
                                <option key={'builder-breach-type-below'} value={BreachType.Below.valueOf()}>Below</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Basket Type</span>
                            </label> 
                            <select className="select select-bordered select-primary w-full" value={basketType?.valueOf()} onChange={onChangeBasketType}>
                                <option key={'builder-basket-type-any'} value={BasketType.AnyOf}>Any Of</option>
                                <option key={'builder-basket-type-all'} value={BasketType.AllOf}>All Of</option>
                                <option key={'builder-basket-type-worst'} value={BasketType.WorstOf}>Worst Of</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Required Number Of Breaches</span>
                            </label> 
                            <input type="number" value={requiredBreaches} className="input input-primary input-bordered" onChange={(e) => updateRequiredBreaches(Number(e.target.value))}/>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="form-control"> 
                            <label className="label">
                                <span className="label-text">Barrier Level</span>
                            </label> 
                            <div className="relative">
                                <input type="number" placeholder="Barrier Level" value={barrierLevel.level} className="w-full input input-primary input-bordered" 
                                    onChange={(e) => updateBarrierLevel({ level: Number(e.target.value), type: BarrierLevelType.Percentage})} /> 
                                <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">%</button>
                            </div>
                        </div> 
                    </div>

                    <div className="w-full">
                        <div className="form-control"> 
                            <label className="label">
                                <span className="label-text">Payoff</span>
                            </label> 
                            <div className="relative">
                                <input type="number" placeholder="Barrier Payoff" value={payoff} className="w-full input input-primary input-bordered" onChange={(e) => updatePayoff(Number(e.target.value))}  /> 
                                <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">%</button>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="mt-4 w-full flex justify-center">
                    <button className="btn btn-accent" disabled={editingBarrier === null} onClick={addBarrier}>Add Barrier</button>
                </div> 

                <div className="divider">Finalized Barriers</div>

                <div className="overflow-x-auto">
                    <table className="table w-full table-compact">
                        <thead>
                            <tr>
                                <th></th> 
                                <th>Contracts</th> 
                                <th>Variable</th> 
                                <th>Breach Type</th>
                                <th>Basket Type</th>
                                <th>Required Breaches</th>
                                <th>Barrier Level</th>
                                <th>Payoff</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                barriers.map((barrier, idx) => (
                                    <tr key={'barrier-id-'+idx}>
                                        <th>{idx+1}</th> 
                                        <td>{contracts.filter(contract => barrier.contracts.includes(contract.id)).map(contract => contract.name).join(', ')}</td> 
                                        <td>{underlyingVariables.filter(v => barrier.variable == v.id).map(v => v.name)[0]}</td> 
                                        <td>{BreachType[barrier.breachType]}</td> 
                                        <td>{BasketType[barrier.basketType]}</td> 
                                        <td>{barrier.requiredBreaches}</td> 
                                        <td>{barrier.level.level}%</td> 
                                        <td>{barrier.payoff}%</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="divider"></div>

                <div className="mt-4 w-full flex justify-center">
                    <button className="btn btn-accent" disabled={barriers.length == 0} onClick={addBarrier}>Issue Structured Investment</button>
                </div>
            </div>
        </div>
    )
}