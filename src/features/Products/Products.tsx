import { FC, MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { client } from 'src/main'

import { listProducts } from 'src/shared/graphql/queries'
import { Product } from 'src/shared/graphql/API'

import { ProductCard, ProductsContainer } from './styledComponents'

const Products: FC = (): ReactNode => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await client.graphql({ query: listProducts })
        const productData: Product[] = data.listProducts.items || []
        setProducts(productData)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProducts()
  }, [])

  const handleBuyProduct: MouseEventHandler<HTMLDivElement> = async (e) => {
    console.log(e.currentTarget.id)
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)

      await stripe?.redirectToCheckout({
        lineItems: [
          {
            price: e.currentTarget.id,
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: '/success',
        cancelUrl: '/cancel',
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ProductsContainer>
      {products.map(({ id, name }) => (
        <ProductCard key={id} id={id} onClick={handleBuyProduct}>
          {name}
        </ProductCard>
      ))}
    </ProductsContainer>
  )
}

export default Products
