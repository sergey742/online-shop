import styles from './Home.module.css'
import '../../styles/commonStyles.css';
import PRODUCTS from '../../Constants/PRODUCTS';
import Product from '../../components/Product/Product';
import ARTICLES from '../../Constants/ARTICLES';
import Article from '../../components/Article/Article';
import { useState } from 'react';

const Home = () => {
    const [discountOpen, setDiscountOpen] = useState(false);
    const filterDiscount = PRODUCTS.filter(elem => elem.discount !== '');
    const [discountProducts, setDiscountProducts] = useState(filterDiscount.slice(0, 4));

    const handleDiscountProducts = () => {
        if (discountProducts.length > 4) {
            setDiscountProducts(filterDiscount.slice(0, 4));
            setDiscountOpen(false)
        } else {
            setDiscountProducts(filterDiscount.slice(0, discountProducts.length + 8));
            setDiscountOpen(true);
        }
    }

    const handleLoadDiscountProducts = () => {
        setDiscountProducts(filterDiscount.slice(0, discountProducts.length + 8));
    }

    const [newOpen, setNewOpen] = useState(false);
    const [newProducts, setNewProducts] = useState((PRODUCTS.slice(-4).reverse()));

    const handleNewProducts = () => {
        if (newProducts.length > 4) {
            setNewProducts(PRODUCTS.slice(-4).reverse());
            setNewOpen(false);
        } else {
            setNewProducts(PRODUCTS.slice(-(newProducts.length + 8)).reverse());
            setNewOpen(true);
        }
    }

    const handleLoadNewProducts = () => {
        setNewProducts(PRODUCTS.slice(-(newProducts.length + 8)).reverse());
    }

    const threeArticles = ARTICLES.slice(-3);
    const articles = threeArticles.map((elem, index) => <Article article={elem} key={index} />)
    return (
        <div className={styles.background}>
            <div className={styles.delivery}>
                <img className={styles.deliveryImg} src='images/basket.png' alt='' />
                <p>Доставка бесплатно от 1000 ₽</p>
            </div>
            <div className={`${styles.container} common-container`}>
                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraphName}>Акции</p>
                        <div className={styles.paragraphMore} onClick={handleDiscountProducts}>
                            <p>Все акции</p>
                            <p>&gt;</p>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {discountProducts.map((elem, index) => <Product product={elem} key={index} />)}
                    </div>
                    <div className={styles.loadMore}>
                        {discountOpen && <p onClick={handleLoadDiscountProducts}>Загрузить ещё</p>}
                    </div>
                </div>
                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraphName}>Новинки</p>
                        <div className={styles.paragraphMore} onClick={handleNewProducts}>
                            <p>Все новинки</p>
                            <p>&gt;</p>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {newProducts.map((elem, index) => <Product product={elem} key={index} />)}
                    </div>
                    <div className={styles.loadMore}>
                        {newOpen && <p onClick={handleLoadNewProducts}>Загрузить ещё</p>}
                    </div>
                </div>
                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraphName}>Покупали раньше</p>
                        <div className={styles.paragraphMore}>
                            <p>Все покупки</p>
                            <p>&gt;</p>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {/* {newProducts} */}
                    </div>
                </div>
                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraphName}>Специальные предложения</p>

                    </div>
                    <div className={styles.specialOffers}>
                        <div className={`${styles.specialOffer} ${styles.bgOffer1}`}>
                            <div className={styles.specialOffersText}>
                                <p className={styles.firstHalf}>Оформите карту «Северяночка»</p>
                                <p className={styles.secondHalf}>И получайте бонусы при покупке в магазинах и на сайте</p>
                            </div>
                            <img src='images/loyality.png' alt='' />
                        </div>
                        <div className={`${styles.specialOffer} ${styles.bgOffer2}`}>
                            <div className={styles.specialOffersText}>
                                <p className={styles.firstHalf}>Покупайте акционные товары</p>
                                <p className={styles.secondHalf}>И получайте вдвое больше бонусов</p>
                            </div>
                            <img src='images/sales.png' alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <p className={styles.paragraphName}>Наши магазины</p>
                </div>
                <div className={styles.paragraphContainer}>
                    <div className={styles.paragraph}>
                        <p className={styles.paragraphName}>Статьи</p>
                        <div className={styles.paragraphMore}>
                            <p>Все статьи</p>
                            <p>&gt;</p>
                        </div>
                    </div>
                    <div className={styles.articles}>
                        {articles}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;