import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    return(
    <aside
        className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
            <XMarkIcon
                className='h-6 w-6 text-black-500 cursor-pointer'
                onClick={()=> context.closeCheckoutSideMenu()}></XMarkIcon>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
        {
            context.cartProducts.map(product =>(
                <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageURL={product.images[0]}
                    price={product.price}
                    handleDelete={handleDelete}
                />
            ))
            }
        </div>
        <div className='px-6 py-3'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
        </div>
    </aside>
    )
}

export default CheckoutSideMenu