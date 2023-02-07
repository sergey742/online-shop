import styles from './Vacancies.module.css'
import '../../styles/commonStyles.css'
import { useNavigate } from 'react-router-dom';

const Vacancies = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/', { replace: true })
    };
    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>Вакансии</p>
                </div>
                <h1>Вакансии</h1>
                <div className={styles.vacancies}>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                    <div className={styles.vacancy}>
                        <p className={styles.post}>Должность</p>
                        <p className={styles.paragraph}>Требования</p>
                        <div className={styles.text}>Текст про требования текст про требования текст про требования текст про требования текст про требования</div>
                        <p className={styles.paragraph}>Обязанности</p>
                        <div className={styles.text}>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</div>
                        <p className={styles.paragraph}>Условия</p>
                        <div className={styles.text}>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</div>
                        <p className={styles.paragraph}>Звоните</p>
                        <div className={styles.number}>
                            <img className={styles.image} src='images/phone.png' alt='' />
                            <div className={styles.textNum}>+7 904 271 35 90</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vacancies;