import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/commonStyles.css';
import { store } from '../../app/store';
import CartProduct from '../../components/CartProduct/CartProduct';
import { useState } from 'react';

const Cart = () => {
    const navigate = useNavigate();
    const handleHome = () => navigate('/', { replace: true });
    const [products, setProducts] = useState(store.getState().product);

    // const products = store.getState().product;

    store.subscribe(() => setProducts(store.getState().product));

    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>Корзина</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.contentName}>Корзина</p>
                    <div className={styles.productList}>
                        {products.map(elem => <CartProduct key={elem.id} id={elem.id} count={elem.count} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;