import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id:1,
    price: 10,
    title: "iPhone 15",
    description:"A Basic phone from the Apple new product list"
  },
  {
    id:2,
    price: 20,
    title: "iPhone 15 Pro",
    description:"Pro Model for the professionals."
  },
  {
    id:3,
    price: 30,
    title: "iPhone 15 Pro Max",
    description:"Top product in the 15 product list from Apple."
  }];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{PRODUCTS.map(product =>(
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
