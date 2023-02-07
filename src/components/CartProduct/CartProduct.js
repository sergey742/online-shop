import styles from './CartProduct.module.css';
import PRODUCTS from '../../Constants/PRODUCTS';
import { deleteProduct, productMinus, productPlus, store } from '../../app/store';

const DiscountPrice = ({ product }) => {
    return (
        <div className={styles.discountContainer}>
            <div className={styles.newPrice}>
                <p className={styles.actualPrice}>
                    {product.discount.toFixed(2)} &#8381;
                </p>
                <p className={styles.priceDescription}>
                    С картой
                </p>
            </div>
            <div className={styles.oldPrice}>
                <p className={styles.nonActualPrice}>
                    {product.price.toFixed(2)} &#8381;
                </p>
                <p className={styles.priceDescriptionOld}>
                    Обычная
                </p>
            </div>
        </div>
    );
};

const OverallDiscountPrice = ({product, count}) => {
    return(
        <div className={styles.overallDiscountPrice}>
            <p className={styles.overallPrice}>{product.discount * count} &#8381;</p>
            <p className={styles.withoutDiscount}>{product.price * count} &#8381;</p>
        </div>
    );
};

const CartProduct = ({id, count}) => {
    const product = PRODUCTS.find(elem => elem.id === id);

    const handleCountPlus = () => {
        store.dispatch(productPlus(product.id));
    };

    const handleCountMinus = () => {
        store.dispatch(productMinus(product.id));
    };

    const handleDeleteProduct = () => {
        store.dispatch(deleteProduct(product.id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftPart}>
                    <img src={product.image} alt='' />
                    <div className={styles.productDescription}>
                        <p className={styles.productName}>{product.description}</p>
                        {product.discount === '' ?
                            <p className={styles.price}>{product.price.toFixed(2)} &#8381;</p> :
                            <DiscountPrice product={product} />}
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.counter}>
                        <p className={styles.plusMinus} onClick={handleCountMinus}>&#8211;</p>
                        <p className={styles.count}>{count}</p>
                        <p className={styles.plusMinus} onClick={handleCountPlus}>+</p>
                    </div>
                    <div className={styles.overallSum}>
                        {product.discount === '' ?
                            <p className={styles.overallPrice}>{product.price * count} &#8381;</p> :
                            <OverallDiscountPrice product={product} count={count} />}
                    </div>
                </div>
            </div>
            <div className={styles.bin} onClick={handleDeleteProduct}>
                <img src='../../images/recycling-bin.png' alt='' />
            </div>
        </div>
    );
};

export default CartProduct;