import React from 'react';

const products = [
  { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: '$100' },
  { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: '$200' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;