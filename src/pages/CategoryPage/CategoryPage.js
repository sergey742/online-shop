import styles from './CategoryPage.module.css';
import '../../styles/commonStyles.css';
import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import PriceSlider from '../../components/PriceSlider/PriceSlider';
import PRODUCTS from '../../Constants/PRODUCTS';
import Product from '../../components/Product/Product';
import Pagination from '../../components/Pagination/Pagination';


const CategoryPage = () => {
    const { categoryArg, setCategoryArg } = useContext(CategoryContext);
    const [value, setValue] = useState([0, 1000]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [filterPrice, setFilterPrice] = useState([]);
    const [allFilters, setAllFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState([1]);
    const [updateEffect, setUpdateEffect] = useState(false)

    const initialValue = [0, 1000];

    const filtersInitialState = [
        {
            id: 0,
            string: `Цена от ${value[0]} до ${value[1]}`,
        },
        {
            id: 1,
            string: 'Фильтр 4'
        },
    ]

    const handlePageChoose = (pageNumber) => {
        if (pageNumber < 1) {
            setPage(1);
            setActivePage(1);
        } else if (pageNumber > pageCount.length) {
            setPage(pageCount.length);
            setActivePage(pageCount.length);
        } else {
            setPage(pageNumber);
            setActivePage(pageNumber);
        }
        if (page !== activePage) {
            setUpdateEffect(prevState => !prevState);
        }
    }

    const handleLoadProducts = () => {
        setProducts(filterPrice.slice((page - 1) * 6, (activePage * 6) + 6));
        if (activePage < pageCount.length) {
            const nextPage = activePage + 1;
            setActivePage(nextPage);
        }
    }

    const handleSliderValue = (arr) => setValue(arr);
    const handleHome = () => navigate('/', { replace: true });

    const handleCatalog = () => {
        navigate('/catalog', { replace: true });
        setCategoryArg([]);
    };

    const handleAllFilters = () => {
        setAllFilters(filtersInitialState);
    };

    const deleteOneFilter = (id) => {
        setAllFilters(allFilters => allFilters.filter(elem => elem.id !== id));
        switch (id) {
            case 0: {
                setValue(initialValue);
                setFilterPrice(filterProducts.filter(elem => elem.discount !== '' ?
                    elem.discount >= initialValue[0] && elem.discount <= initialValue[1] :
                    elem.price >= initialValue[0] && elem.price <= initialValue[1]));
                break;
            }
            default: break;
        }
    };

    const deleteAllFilters = () => {
        setValue(initialValue);
        setFilterPrice(filterProducts.filter(elem => elem.discount !== '' ?
            elem.discount >= initialValue[0] && elem.discount <= initialValue[1] :
            elem.price >= initialValue[0] && elem.price <= initialValue[1]));
        setAllFilters([]);
    };

    const handleApplyFilter = () => {
        setFilterPrice(filterProducts.filter(elem => elem.discount !== '' ?
            elem.discount >= value[0] && elem.discount <= value[1] :
            elem.price >= value[0] && elem.price <= value[1]));
        handleAllFilters();

    };

    useEffect(() => {
        setProducts(filterPrice.slice(((page - 1) * 6), ((page - 1) * 6 + 6)));
        const pageCount = filterPrice.length / 6;
        const pageArray = Array.from(Array(Math.ceil(pageCount)).keys());
        setPageCount(pageArray);
    }, [filterPrice, page, updateEffect]);

    useEffect(() => {
        let arr = [];
        categoryArg.forEach(element => arr = arr.concat(PRODUCTS.filter(elem => elem.category.find(elem => elem.includes(element.toLowerCase())))));
        arr = arr.filter((value, index, clone) => clone.findIndex(value2 => (value2.name === value.name)) === index);
        setFilterProducts(arr);
        setFilterPrice(arr);
        const pageCount = arr.length / 6;
        const pageArray = Array.from(Array(Math.ceil(pageCount)).keys());
        setPageCount(pageArray);

    }, [categoryArg]);

    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.home} onClick={handleCatalog}>Каталог</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>{categoryArg.join(', ')}</p>
                </div>
                <div>
                    <p className={styles.pageName}>{categoryArg.join(', ')}</p>
                    <div className={styles.content}>
                        <div className={styles.filter}>
                            <p className={styles.filterHeader}>Фильтр</p>
                            <PriceSlider value={value} setValue={handleSliderValue} />
                            <div className={styles.categoriesFilter}>
                                {categoryArg.map((elem, index) => <p key={elem} className={styles.categoryFilterElement}>{elem}</p>)}
                            </div>
                            <div className={styles.check}>
                                <label className={styles.switch}>
                                    <input type="checkbox" defaultChecked />
                                    <span className={`${styles.slider} ${styles.round}`}></span>
                                </label>
                                <p>В наличии</p>
                            </div>
                            <button className={styles.apply} onClick={handleApplyFilter}>
                                Применить
                            </button>
                        </div>
                        <div className={styles.products}>
                            {allFilters.length !== 0 && <div className={styles.filterApplied}>
                                {allFilters.map((elem, index) => <div index={index} key={elem.id} className={styles.applied} onClick={() => deleteOneFilter(elem.id)}>
                                    <p>{elem.string}</p>
                                    <p className={styles.close}>&times;</p>
                                </div>)}
                                <div className={styles.clearAllfilters} onClick={deleteAllFilters}>
                                    <p>Очистить фильтры</p>
                                    <p className={styles.close}>&times;</p>
                                </div>
                            </div>}
                            <div className={styles.pageContent}>
                                <div className={styles.page}>
                                    {products.map((elem, index) => <Product index={index} key={index} product={elem} />)}
                                </div>
                                {activePage !== pageCount.length && <div className={styles.more} onClick={handleLoadProducts}>Показать ещё</div>}
                                <Pagination
                                    pageCount={pageCount}
                                    page={page}
                                    setPage={handlePageChoose}
                                    activePage={activePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;