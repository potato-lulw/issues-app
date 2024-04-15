import React from 'react'

interface Props {
    params: {slug : string[]};
    searchParams: {sortOrder: string};
}

const ProductDetails = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>ProductDetails {slug} {sortOrder}</div>
  )
}

export default ProductDetails