import styles from './Footer.module.css'
import '../../styles/commonStyles.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleAboutCompany = () => {
        navigate('/about-company', {replace: true});
    }
    const handleContacts = () => {
        navigate('/contacts', {replace: true});
    }
    const handleVacancy = () => {
        navigate('/vacancy', {replace: true});
    }
    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.info}>
                    <img className={styles.logo} src='../../images/logoFooter.svg' alt='logo' />
                    <div className={styles.information}>
                        <p onClick={handleAboutCompany}><nobr>О компании</nobr></p>
                        <p onClick={handleContacts}>Контакты</p>
                        <p onClick={handleVacancy}>Вакансии</p>
                        <p>Статьи</p>
                        <p className={styles.politics}>Политика обработки персональных данных</p>
                    </div>
                </div>
                <div className={styles.socialInfo}>
                    <div className={styles.socials}>
                        <img className={styles.socialImg} src='../../images/instagram.png' alt='Instagram' />
                        <img className={styles.socialImg} src='../../images/vkontakte.png' alt='Vkontakte' />
                        <img className={styles.socialImg} src='../../images/facebook.png' alt='Facebook' />
                        <img className={styles.socialImg} src='../../images/ok.png' alt='OK' />
                    </div>
                    <div className={styles.phoneNumber}>
                        <img src='../../images/phone.png' alt='phone' />
                        <p><nobr>8 800 777 33 33</nobr></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer