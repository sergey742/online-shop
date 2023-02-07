import styles from './Product.module.css';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ratingCount from '../../helpers/ratingCount';
import { productPlus, store } from '../../app/store';

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
    )
}

const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/category/product/${product.id}`);
    }

    const ratingValue = ratingCount(product);

    const handleCart = () => {
        store.dispatch(productPlus(product.id));
    };

    return (
        <div className={styles.container} >
            <div className={styles.productInfo} onClick={handleNavigate}>
                <div className={styles.productImage}>
                    <img src={product.image} alt='' />
                </div>
                <div className={styles.subContainer}>
                    {product.discount === '' ?
                        <p className={styles.price}>{product.price.toFixed(2)} &#8381;</p> :
                        <DiscountPrice product={product} />}
                    <p className={styles.description}>
                        {product.description}
                    </p>
                    <div className={styles.rating}>
                        <Rating
                            name="read-only"
                            value={ratingValue}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <button className={styles.inCart} onClick={handleCart}>В корзину</button>
        </div>
    );
};

export default Product;