import styles from './ProductInformation.module.css';
import '../../styles/commonStyles.css';
import { useParams } from 'react-router-dom';
import PRODUCTS from '../../Constants/PRODUCTS';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import Product from '../../components/Product/Product';
import ratingCount from '../../helpers/ratingCount';
import { useState } from 'react';
import { productPlus, store } from '../../app/store';
// import CATEGORIES from '../../Constants/CATEGORIES';

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

const SimilarProduct = ({ product }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/category/product/${product.id}`);
    }
    return (
        <div className={styles.similarProduct} onClick={handleNavigate}>
            <img src={product.image} alt='' />
            <p>{product.price.toFixed(2)} &#8381;</p>
        </div>
    );
};

const RateInfo = ({ rate, counter }) => {
    return (
        <div className={styles.rateContainer}>
            <p>{rate}</p>
            <Rating
                name="read-only"
                value={rate}
                readOnly
            />
            <p>{counter(rate)}</p>
        </div>
    );
};

const Comment = ({ comment }) => {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.user}>
                <img src={comment.userImage} alt='' />
                <p>{comment.userName}</p>
            </div>
            <div className={styles.rateAndDate}>
                <Rating
                    name="read-only"
                    value={comment.rate}
                    readOnly
                />
                <div className={styles.commentDate}>{comment.date}</div>
            </div>
            <p className={styles.commentDescription}>{comment.description}</p>
        </div>
    )
}

const ProductInformation = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    // const commentRef = useRef();
    const product = PRODUCTS.find(elem => elem.id === Number(params.id));
    const indexProduct = PRODUCTS.findIndex(elem => elem.id === product.id);
    const date = new Date();
    const formatDate = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;
    const [inputValue, setInputValue] = useState('');

    const sendComment = () => {
        const comment = {
            rate: value,
            description: inputValue,
            date: formatDate,
            userName: 'Мария',
            userImage: '../../images/user.png'
        };
        PRODUCTS[indexProduct].comment.push(comment);
        setValue(0);
        setInputValue('');
    }

    const changeInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const handleHome = () => navigate('/', { replace: true });
    const handleCatalog = () => navigate('/catalog');

    const similarProducts = PRODUCTS.slice(0, 4);
    
    const filterDiscount = PRODUCTS.filter(elem => elem.discount !== '');
    const discountProducts = filterDiscount.slice(0, 4);

    const ratingValue = ratingCount(product);
    const rateArray = Array.from(Array(5).keys()).reverse();
    const ratingCounter = (rate) => {
        let counter = 0;
        if (typeof product.comment !== "undefined") {
            product.comment.forEach(elem => elem.rate === rate ? counter += 1 : counter);
        }
        return counter;
    };

    const productComment = product.comment.slice(-3);

    const handleProductInCart = () => {
        store.dispatch(productPlus(product.id));
    }

    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.home} onClick={handleCatalog}>Каталог</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>{product.name}</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.pageName}>{product.description}</p>
                    <div className={styles.briefInfo}>
                        <div>арт.{product.id}</div>
                        <div className={styles.ratingAbout}>
                            <div className={styles.rating}>
                                <Rating
                                    name="read-only"
                                    value={ratingValue}
                                    readOnly
                                />
                            </div>
                            <div className={styles.commentCount}></div>
                        </div>
                        <div className={styles.share}>
                            <img src='../../images/heart1.png' alt='' />
                            <div>Поделиться</div>
                        </div>
                        <div className={styles.save}>
                            <img src='../../images/share-2.png' alt='' />
                            <div><nobr>В избранное</nobr></div>
                        </div>
                    </div>
                    <div className={styles.aboutProduct}>
                        <img className={styles.mainImage} src={`../../${product.image}`} alt='' />
                        <div className={styles.information}>
                            {product.discount === '' ?
                                <p className={styles.price}>{product.price.toFixed(2)} &#8381;</p> :
                                <DiscountPrice product={product} />}
                            <div>
                                <div className={styles.inCart} onClick={handleProductInCart}>
                                    <img src='../../images/shopping-cart-white.png' alt='' />
                                    <p>В корзину</p>
                                </div>
                                <div className={`${styles.bonus} ${styles.greenBonus}`}>Вы получаете <b>10 бонусов</b></div>
                                <div className={styles.bonus}>Уведомить о снижении цены</div>
                            </div>
                            <div className={styles.briefProductInfo}>
                                <p className={styles.oddLine}>Бренд</p>
                                <p className={`${styles.oddLine} ${styles.baldColumn}`}>{product.brand}</p>
                                <p className={styles.evenLine}>Страна производителя</p>
                                <p className={`${styles.evenLine} ${styles.baldColumn}`}>{product.country}</p>
                                <p className={styles.oddLine}>Упаковка</p>
                                <p className={`${styles.oddLine} ${styles.baldColumn}`}>{product.weight} г</p>
                            </div>
                        </div>
                        <div className={styles.similar}>
                            <p className={styles.similarText}>Похожие</p>
                            <div className={styles.similarMap}>
                                {similarProducts.map(elem => <SimilarProduct key={elem.id} product={elem} />)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.alsoBuy}>
                        <p className={styles.productsParagraph}>С этим товаров покупают</p>
                        <div className={styles.alsoProducts}>
                            {similarProducts.map(elem => <Product key={elem.id} product={elem} />)}
                        </div>
                    </div>
                    <div className={styles.comments}>
                        <p className={styles.productsParagraph}>Отзывы</p>
                        <div className={styles.commentsBlock}>
                            <div className={styles.scale}>
                                <div className={styles.overallRating}>
                                    <Rating
                                        name="read-only"
                                        value={ratingValue}
                                        readOnly
                                    />
                                    <p>{Math.round(ratingValue)} из 5</p>
                                </div>
                                <div className={styles.ratingScale}>
                                    {rateArray.map(elem => <RateInfo key={elem} rate={elem + 1} counter={ratingCounter} />)}
                                </div>
                            </div>
                            <div className={styles.inputComment}>
                                <div className={styles.usersComments}>
                                    {productComment.map((elem, index) => <Comment key={index} comment={elem} />)}
                                </div>
                                <div className={styles.newComment}>
                                    <div className={styles.userRating}>
                                        <p>Ваша оценка</p>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                    <textarea type='text' className={styles.inputText} value={inputValue} onChange={changeInputValue} placeholder='Отзыв' />
                                    <div className={styles.sendComment} onClick={sendComment}>Отправить отзыв</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.discountProducts}>
                        <p className={styles.productsParagraph}>Акции</p>
                        <div className={styles.alsoProducts}>
                            {discountProducts.map(elem => <Product product={elem} key={elem.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;