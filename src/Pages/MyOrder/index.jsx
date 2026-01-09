import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrder (last)
      <div className='flex-col w-80'>
      {
      context.order?.slice(-1)[0].products.map(product =>(
          <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.images[0]}
              price={product.price}
          />
      ))
      }
      </div>
    </Layout>
  )
}

export default MyOrder