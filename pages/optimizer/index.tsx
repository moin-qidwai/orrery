import { useRecoilValue } from "recoil";
import { finalizedCartState } from "../../selectors/cart";

import Randomized from '../../components/randomized';
import Strategies from '../../components/strategies';
import CartContractsTable from '../../components/cart/contracts';
import CartMetrics from '../../components/cart/metrics';

export default function Optimizer() {
    const optimizedCartContracts = useRecoilValue(finalizedCartState);

    if (optimizedCartContracts == null || optimizedCartContracts.length == 0) {
        return (<div>Please add some contracts to your cart.</div>)
    }

    return (
        <div className="bg-white mb-10">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <CartMetrics />

                <div className="divider">Selected Contracts</div> 
                <CartContractsTable />
                
                <div className="divider">Derivatives And Optimization Strategies</div> 
                <Strategies />
                
                <div className="divider">Custom Structure</div>
                <div className="flex justify-center">
                    <button className="btn btn-xs w-3/6 btn-link btn-accent">Build Your Own Strategy</button>
                </div>
            </div>
            <Randomized />
        </div>
    )
}