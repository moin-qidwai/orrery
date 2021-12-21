
import Image from 'next/image'
import Link from 'next/link'

import { useRecoilState } from "recoil";
import { contractsState } from "../../atoms/contracts";
import { cartState } from "../../atoms/cart";


export default function Contracts() {
    const [contracts] = useRecoilState(contractsState);
    const [cart, setCart] = useRecoilState(cartState);

    function addToCart(id: number) {
        const updatedQuantity = !!cart.get(id) ? cart.get(id)! + 1 : 1;
        const clonedCart = new Map(cart);
        clonedCart.set(id, updatedQuantity);
        setCart(clonedCart);
    }

    function deductFromCart(id: number) {
        const updatedQuantity = !!cart.get(id) ? cart.get(id)! - 1 : 0;
        const clonedCart = new Map(cart);
        if (updatedQuantity == 0) {
            clonedCart.delete(id);
        } else {
            clonedCart.set(id, updatedQuantity);
        }
        setCart(clonedCart);
    }

    function getFromCart(id: number) {
        return !!cart.get(id) ? cart.get(id)! : 0;
    }

    return (
        <div className="bg-white mb-10">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mb-8">
                    <p className="flex justify-center font-bold">Below are a list of available contracts that you can invest in, please add as many as you want in your basket.</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { contracts.map(contract => (
                        <div key={"contract-"+contract.name} className="relative">
                            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none">
                                <Image className="z-10 cursor-pointer hover:opacity-75" src={"/images/"+contract.image} height={400} width={400} alt={contract.name} />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {contract.name}
                                    </h3>
                                    <div className="tooltip" data-tip={"CAC/TLV: "+contract.cacToLtv + "%, RUNWAY: "+contract.runway+"M"}>
                                        <p className={contract.risk == 'high' ? "mt-1 text-sm text-red-600" : contract.risk == 'low' ? "mt-1 text-sm text-green-600" : "mt-1 text-sm text-yellow-600"}>
                                            {contract.risk.replace(/^\w/, (c) => c.toUpperCase())} Risk
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="flex justify-end text-sm font-medium text-gray-900">Value ${contract.value}</p>
                                    <p className="mt-1 flex justify-end text-sm font-medium text-gray-500">Cost ${contract.cost}</p>
                                </div>
                            </div><br/>
                            <div className="relative">
                                <button className="absolute top-0 left-0 rounded-r-none btn btn-error" disabled={getFromCart(contract.id) == 0} onClick={() => deductFromCart(contract.id)}>-</button>
                                <input type="number" placeholder="0" className="w-full pl-14 pr-14 input input-primary input-bordered" disabled value={getFromCart(contract.id)}/> 
                                <button className="absolute top-0 right-0 rounded-l-none btn btn-success" onClick={() => addToCart(contract.id)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            { (cart.size > 0) ? <Link href="/checkout"><button className="sticky btn btn-primary z-20 bottom-20 left-[47%]">Optimize Basket</button></Link>: null }
        </div>
    )
}