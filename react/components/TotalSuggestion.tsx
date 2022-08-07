import React, { Fragment, useMemo } from 'react'
import IconEqual from '../icons/IconEqual'

import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles } from 'vtex.css-handles'

interface Props {
  cartItems: CartItem[]
  BuyButton: React.ComponentType<{ skuItems: CartItem[] }>
}

const CSS_HANDLES = [
  'valueTitle',
  'totalValue',
]

export default function TotalSuggestion({
  cartItems,
  BuyButton
}: Props) {

  const handles = useCssHandles(CSS_HANDLES)

  const totalProducts = cartItems.length
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total: number, currentItem: CartItem) => {
      return total + currentItem.sellingPrice / 100
    }, 0)
  }, [cartItems])

  return (
    <Fragment>
      <div className="self-center ma5 mv5">
        <IconEqual />
      </div>
      <div className="w-100 mh2 mh6-l w-20-l self-center mv4">
        <div className={`mv5 ${handles.valueTitle}`}>
          {`Compre os ${totalProducts} produtos por`}
        </div>
        <div className={`mv5 ${handles.totalValue}`}>
          <FormattedCurrency value={totalPrice} />
        </div>
        <BuyButton skuItems={cartItems} />
      </div>
    </Fragment>
  )
}
