import styles from './Pagination.module.css';

const Pagination = ({ pageCount, page, setPage, activePage }) => {
    return (
        <div className={styles.pages}>
            <p className={styles.prevPage} onClick={() => setPage(page - 1) }>&lt;</p>
            {pageCount.map((elem) => <p className={elem + 1 === activePage ? styles.activePage : '' } key={elem} onClick={() => setPage(elem + 1)}>{elem + 1}</p>)}
            <p className={styles.nextPage} onClick={() => setPage(page + 1)}>&gt;</p>
        </div>
    );
};

export default Pagination;