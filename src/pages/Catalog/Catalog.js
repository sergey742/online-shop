import styles from './Catalog.module.css'
import '../../styles/commonStyles.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Catalog = () => {
    const navigate = useNavigate();
    const { setCategoryArg } = useContext(CategoryContext);
    const handleHome = () => {
        navigate('/', { replace: true })
    };

    const handleCategory = (arg) => {
        setCategoryArg(arg);
        navigate('/category');
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>Каталог</p>
                </div>
                <h1>Каталог</h1>
                <div className={styles.categories}>
                    <div
                        className={`${styles.category} ${styles.categorySpan} ${styles.backgroundImage1}`}
                        onClick={() => handleCategory(['молоко', 'сыр', 'яйцо'])}
                    >
                        {/* <img src='images/eggs.png' alt='' /> */}
                        <p className={styles.categoryName}>Молоко, сыр, яйцо</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage2}`}
                        onClick={() => handleCategory(['Хлеб'])}
                    >
                        <p className={styles.categoryName}>Хлеб</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage3}`}
                        onClick={() => handleCategory(['Фрукты', 'овощи'])}
                    >
                        <p className={styles.categoryName}>Фрукты и овощи</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage4}`}
                        onClick={() => handleCategory(['Замороженные продукты'])}
                    >
                        <p className={styles.categoryName}>Замороженные продукты</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage5}`}
                        onClick={() => handleCategory(['Напитки'])}
                    >
                        <p className={styles.categoryName}>Напитки</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage6}`}
                        onClick={() => handleCategory(['Кондитерские изделия'])}
                    >
                        <p className={styles.categoryName}>Кондитерские изделия</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage7}`}
                        onClick={() => handleCategory(['Чай', 'кофе'])}
                    >
                        <p className={styles.categoryName}>Чай, кофе</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage8}`}
                        onClick={() => handleCategory(['Бакалея'])}>
                        <p className={styles.categoryName}>Бакалея</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage9}`}
                        onClick={() => handleCategory(['Здоровое питание'])}
                    >
                        <p className={styles.categoryName}>Здорове питание</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.categorySpan} ${styles.backgroundImage10}`}
                        onClick={() => handleCategory(['Зоотовары'])}
                    >
                        <p className={styles.categoryName}>Зоотовары</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage11}`}
                        onClick={() => handleCategory(['Детское питание'])}
                    >
                        <p className={styles.categoryName}>Детское питание</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.categorySpan} ${styles.backgroundImage12}`}
                        onClick={() => handleCategory(['Мясо', 'птица', 'колбаса'])}
                    >
                        <p className={styles.categoryName}>Мясо, птица, колбаса</p>
                        <div className={styles.gradient} />
                    </div>
                    <div
                        className={`${styles.category} ${styles.backgroundImage13}`}
                        onClick={() => handleCategory(['Непродовольственные товары'])}
                    >
                        <p className={styles.categoryName}>Непродовольственные товары</p>
                        <div className={styles.gradient} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;