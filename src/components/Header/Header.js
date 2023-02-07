import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext, SearchResultContext } from '../../App';
import styles from './Header.module.css';
import '../../styles/commonStyles.css';
import CatalogHover from '../CatalogHover/CatalogHover';
import Search from '../Search/Search';
import CATEGORIES from '../../Constants/CATEGORIES';
import PRODUCTS from '../../Constants/PRODUCTS';

const Header = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { setSearchResult } = useContext(SearchResultContext);

    const navigate = useNavigate();
    const handleCatalog = () => {
        navigate('/catalog', { replace: true });
        setIsCatalogOpen(false);
    }
    const handleHome = () => {
        navigate('/', { replace: true })
    }

    const handleCart = () => {
        navigate('/cart');
    }

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const handleCatalogOpen = () => setIsCatalogOpen(prevstate => !prevstate);

    const [openSearch, setOpenSearch] = useState(false);
    const [searchList, setSearchList] = useState([]);

    const handleCloseSearch = () => {
        setOpenSearch(false);
    }
    const handleOpenSearch = (event) => {
        const input = event.target.value;
        if (!input) {
            return setOpenSearch(false);
        } else {
            const filterSearchCategories = CATEGORIES.filter(elem => elem.includes(input.toLowerCase()));
            const filterSearchNames = PRODUCTS.filter(elem => elem.name.includes(input.toLowerCase()));
            const searchArray = filterSearchCategories.concat(filterSearchNames);
            setSearchList(searchArray.map((elem, index) => <Search
                searchElement={elem}
                key={index}
                open={openSearch}
                handleClose={handleCloseSearch}
            />))
            setOpenSearch(true);
        }
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            setSearchResult(event.target.value);
            navigate('/searchResult', { replace: true });
            event.target.value = '';
            setOpenSearch(false);
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.catalogHover}>
                {isCatalogOpen && <CatalogHover handleCatalogOpen={handleCatalogOpen} />}
            </div>
            <div className={`${styles.container} common-container`}>
                <div className={styles.logoDiv} onClick={handleHome}>
                    <img src='../../images/Group.svg' alt='logo' />
                    <p>Северяночка</p>
                </div>
                <div className={styles.buttonAndSearch} >
                    <button onMouseEnter={handleCatalogOpen} className={styles.catalog} onClick={handleCatalog}>
                        <div className={styles.iconCatalog}>
                            <span className={styles.iconButton} />
                            <span className={styles.iconButton} />
                            <span className={styles.iconButton} />
                        </div>
                        <p>Каталог</p>
                    </button>
                    <div className={styles.fullSearch}>
                        <div className={styles.search}>
                            <input className={styles.searchInput} onChange={handleOpenSearch} onKeyDown={handleSearch} type='text' placeholder='Найти товар' />
                            <img src='../../images/search.png' alt='' />
                        </div>
                        <div className={styles.searchResults}>
                            {openSearch && searchList}
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.elementMenu}>
                        <img src='../../images/heart.png' alt='' />
                        <p>Избранное</p>
                    </div>
                    <div className={styles.elementMenu}>
                        <img src='../../images/package.png' alt='' />
                        <p>Заказы</p>
                    </div>
                    <div className={styles.elementMenu} onClick={handleCart}>
                        <img src='../../images/shopping-cart.png' alt='' />
                        <p>Корзина</p>
                    </div>
                </div>
                <div className={styles.account}>
                    <img className={styles.accountImg} src='../../images/user.png' alt='userIcon' />
                    <p>UserName</p>
                    <button className={styles.accountMenu}>
                        <img src='../../images/chevron-down.png' alt='' />
                    </button>
                </div>
                {/* Mobile */}
                <div className={styles.mobileBottom}>
                    <button className={styles.catalogMobile} onClick={handleCatalog}>
                        <div className={styles.iconCatalog}>
                            <span className={styles.iconButton} />
                            <span className={styles.iconButton} />
                            <span className={styles.iconButton} />
                        </div>
                        <p>Каталог</p>
                    </button>
                    <div className={styles.menuMobile}>
                        <div className={styles.elementMenu}>
                            <img src='../../images/heart.png' alt='' />
                            <p>Избранное</p>
                        </div>
                        <div className={styles.elementMenu}>
                            <img src='../../images/package.png' alt='' />
                            <p>Заказы</p>
                        </div>
                        <div className={styles.elementMenu}>
                            <img src='../../images/shopping-cart.png' alt='' />
                            <p>Корзина</p>
                        </div>
                    </div>
                    <div className={styles.accountMobile}>
                        <img className={styles.accountImg} src='../../images/user.png' alt='userIcon' />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header
