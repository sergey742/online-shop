import styles from './AboutCompany.module.css'
import '../../styles/commonStyles.css'
import { useNavigate } from 'react-router-dom';

const AboutCompany = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>О компании</p>
                </div>
                <div className={styles.about}>
                    <div className={styles.aboutCompany}>
                        <h1>О компании</h1>
                        <div className={styles.aboutText}>
                            Мы непрерывно развиваемся и
                            работаем над совершенствованием сервиса,
                            заботимся о наших клиентах,
                            стремимся к лучшему будущему.
                        </div>
                    </div>
                    <div className={styles.aboutImg}>
                        <img className={styles.backgroundPeople} src='images/bg-people.png' alt='' />
                        <img className={styles.people} src='images/people.png' alt='' />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoBlock}>
                        <span className={styles.pseudoList}>
                            <img className={styles.backgroundBird} src='images/vector.png' alt='' />
                            <img className={styles.bird} src='images/color.png' alt='' />
                        </span>
                        <div className={styles.block}>
                            <div className={styles.firstHalf}>
                                Мы занимаемся розничной торговлей
                            </div>
                            <div className={styles.secondHalf}>
                                Более 20 лет.
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.pseudoList}>
                            <img className={styles.backgroundBird} src='images/vector.png' alt='' />
                            <img className={styles.bird} src='images/color.png' alt='' />
                        </span>
                        <div className={styles.block}>
                            <div className={styles.firstHalf}>
                                Основная миссия компании
                            </div>
                            <div className={styles.secondHalf}>
                                Максимальное качество товаров и услуг по доступной цене.
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.pseudoList}>
                            <img className={styles.backgroundBird} src='images/vector.png' alt='' />
                            <img className={styles.bird} src='images/color.png' alt='' />
                        </span>
                        <div className={styles.block}>
                            <div className={styles.firstHalf}>
                                Отличительная черта нашей сети
                            </div>
                            <div className={styles.secondHalf}>
                                Здоровая и полезная продукция местного производства внаших магазинах.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.thanks}>
                    <img className={styles.logo} src='images/Group.svg' alt='' />
                    <div className={styles.thankYou}>
                       <p>Спасибо за то, что вы с нами. Северяночка, везет всегда!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;