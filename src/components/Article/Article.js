import styles from './Article.module.css';

const Article = ({article}) => {
    return (
        <div className={styles.container}>
            <img src={article.image} alt='' />
            <div className={styles.subContainer}>
                <p className={styles.date}>{article.date}</p>
                <div className={styles.article}>
                    <p className={styles.articleName}>{article.articleName}</p>
                    <p className={styles.articleDescription}>{article.articleText}</p>
                </div>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
    );
};

export default Article;