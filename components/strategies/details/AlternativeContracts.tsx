import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { alternativeContractsState } from "../../../atoms/strategies";
import { alternativeContractsRandomizedState } from "../../../selectors/strategies";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export function AlternativeContracts() {
    const [_, setContracts] = useRecoilState(alternativeContractsState);
    const contracts = useRecoilValue(alternativeContractsRandomizedState);

    useEffect(() => {
        if (contracts.length === 0) {
            fetch('api/contracts?limit=1000').then((res) => res.json()).then((data) => setContracts(data));
        }
    }, []);

    const columnDefs = [
        { field: 'id' },
        { field: 'name' },
        { field: 'value' },
        { field: 'cost' },
        { field: 'profit' },
        { field: 'cacToLtv' },
        { field: 'runway' },
        { field: 'term' }
    ];

    const getRowId = (params: { data: { id: any; }; }) => params.data.id;

    return (
        <div>
            The selected contract has a very high customer acquisition cost relative to their lifetime value, the below contracts are similar with lower CAC/LTV ratios.
            <div className="overflow-x-auto">
                <div className="ag-theme-alpine" style={{height: 400, width: '100%' }}>
                    <AgGridReact
                        getRowId={getRowId}
                        rowBuffer={50}
                        rowData={contracts}
                        columnDefs={columnDefs}>
                    </AgGridReact>
                </div>
            </div>
        </div>
    )
}

export default {
    id: 'alternative_contracts',
    title: 'Alternative Contracts',
    Strategy: AlternativeContracts
}