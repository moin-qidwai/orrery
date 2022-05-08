import { useRecoilState } from "recoil";
import { expandedStrategyIdState } from "../../atoms/strategies";

import details from './details';

export default function Strategies() {
    const [expandedStrategyId, setExpandedStrategyId] = useRecoilState(expandedStrategyIdState);

    function open(id: string) {
        if (expandedStrategyId == id) {
            setExpandedStrategyId('');
        } else {
            setExpandedStrategyId(id);
        }
    }

    function expansionClass(id: string) {
        return (expandedStrategyId == id ? 'collapse-open' : 'collapse-close')
    }

    return (
        <div>
            {
                details.map(implementation => (
                    <div key={implementation.id} tabIndex={0} onClick={() => open(implementation.id)} className={"collapse cursor-pointer w-full collapse-arrow " + expansionClass(implementation.id)}> 
                        <div className="collapse-title text-xl font-medium">
                            {implementation.title}
                        </div> 
                        <div className="collapse-content"> 
                            { expandedStrategyId === implementation.id ? <implementation.Strategy/> : null }
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}