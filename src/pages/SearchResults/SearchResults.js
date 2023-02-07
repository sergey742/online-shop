import styles from './SearchResults.module.css';
import '../../styles/commonStyles.css';
import { useContext } from 'react';
import { SearchResultContext } from '../../App';
import Product from '../../components/Product/Product';
import PRODUCTS from '../../Constants/PRODUCTS';

const SearchResults = () => {
    const {searchResult} = useContext(SearchResultContext);
    const filterProductName = PRODUCTS.filter(elem => elem.name.includes(searchResult.toLowerCase()));
    const filterCategory = PRODUCTS.filter(elem => elem.category.find(elem => elem.includes(searchResult.toLowerCase())));
    const searchArray = filterProductName.concat(filterCategory);
    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <p className={styles.pageName}>Результат поиска</p>
                <div className={styles.request}>
                    <p>по запросу</p>
                    <p className={styles.requestName}>{searchResult}</p>
                </div>
                <div className={styles.result}>
                    {searchArray.length !== 0 ? 
                    searchArray.map((elem,index) => <Product product={elem} key={index} />) : 
                    <p className={styles.nothing}>Ничего не найдено</p>}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;