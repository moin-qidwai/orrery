
const providers = [
    {
        name: 'AIA',
        quote: 10
    },
    {
        name: 'The Insurance Corp',
        quote: 11
    },
    {
        name: 'InsureYou',
        quote: 12
    },
    {
        name: 'Morgan Stanley',
        quote: 8
    },
    {
        name: 'Goldman Sachs',
        quote: 7
    },
    {
        name: 'Credit Suisse',
        quote: 9
    },
    {
        name: 'JP Morgan',
        quote: 2
    }
]

export function CreditDefaultSwap() {
    return (
        <div>
            Buy insurance using a credit default swap from one of the below institutions.
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>Name</th>
                            <th>Most Recent Quote</th>
                            <th>RFQ</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            providers.map((provider, idx) => (
                                <tr key={'provider-id-'+idx}>
                                    <th>{idx+1}</th> 
                                    <td>{provider.name}</td>
                                    <td>{provider.quote}% 1M Ago</td>
                                    <td><button className="btn btn-xs w-3/6 btn-link btn-accent" >Request Quote</button></td>
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
    id: 'credit_default_swap',
    title: 'Credit Default Swap',
    Strategy: CreditDefaultSwap
}