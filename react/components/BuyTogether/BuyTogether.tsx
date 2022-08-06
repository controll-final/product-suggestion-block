import React, { useEffect } from 'react'
import { useProduct } from "vtex.product-context";

type Props = {
  name: string
}

function BuyTogether({ name }: Props) {
  const product = useProduct();

  useEffect(() => {
    console.log(product);
  })

  return <div>Hey, {name}</div>
}

export default BuyTogether;
