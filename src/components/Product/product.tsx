const Product = () => {
  const product = {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    discount: 90,
    rating: 4.7,
    isFavorite: false,
  };
  return (
    <ol>
      <li>{product.id}</li>
      <li>{product.name}</li>
      <li>{product.imageUrl}</li>
      <li>{product.price}</li>
      <li>{product.discount}</li>
      <li>{product.rating}</li>
      <li>{product.isFavorite}</li>
    </ol>
  );
};

export default Product;
