import styles from './CatalogHover.module.css';
import '../../styles/commonStyles.css';
import { CategoryContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CatalogHover = ({handleCatalogOpen}) => {
    const { setCategoryArg } = useContext(CategoryContext);

    const navigate = useNavigate();
    const handleCategory = (arg) => {
        setCategoryArg(arg);
        navigate('/category');
        handleCatalogOpen();
    };
    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <p className={styles.element} onClick={() => handleCategory(['молоко', 'сыр', 'яйцо'])}>Молоко, сыр, яйцо</p>
                <p className={styles.element} onClick={() => handleCategory(['Напитки'])}>Напитки</p>
                <p className={styles.element} onClick={() => handleCategory(['Бакалея'])}>Бакалея</p>
                <p className={styles.element} onClick={() => handleCategory(['Непродовольственные товары'])}>Непродовольственные товары</p>
                <p className={styles.element} onClick={() => handleCategory(['Хлеб'])}>Хлеб</p>
                <p className={styles.element} onClick={() => handleCategory(['Кондитерские изделия'])}>Кондитерские изделия</p>
                <p className={styles.element} onClick={() => handleCategory(['Здоровое питание'])}>Здоровое питание</p>
                <p className={styles.element} onClick={() => handleCategory(['Детское питание'])}>Детское питание</p>
                <p className={styles.element} onClick={() => handleCategory(['Фрукты', 'овощи'])}>Фрукты и овощи</p>
                <p className={styles.element} onClick={() => handleCategory(['Чай', 'кофе'])}>Чай, кофе</p>
                <p className={styles.element} onClick={() => handleCategory(['Зоотовары'])}>Зоотовары</p>
                <p className={styles.element} onClick={() => handleCategory(['Мясо', 'птица', 'колбаса'])}>Мясо, птица, колбаса</p>
                <p className={styles.element} onClick={() => handleCategory(['Замороженные продукты'])}>Замороженные продукты</p>
            </div>
        </div>
    );
};

export default CatalogHover;