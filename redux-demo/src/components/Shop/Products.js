import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
    {
        id: 'p1',
        title: 'First',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        id: 'p2',
        title: 'Second',
        price: 6,
        description: 'good shit'
    },

]
const Products = (props) => {
    return (
      <section className={classes.products}>
          <h2>Buy your favorite products</h2>
          <ul>
              {products.map(p => {
                  return (
                    <ProductItem
                      key={p.id}
                      id={p.id}
                      title={p.title}
                      price={p.price}
                      description={p.description}
                    />
                  )
              })}
          </ul>
      </section>
    );
};

export default Products;
