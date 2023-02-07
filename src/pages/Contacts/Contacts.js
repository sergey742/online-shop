import styles from './Contact.module.css'
import '../../styles/commonStyles.css'
import { useNavigate } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/', { replace: true })
    };
    const defaultCoordinates = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.container} common-container`}>
                <div className={styles.path}>
                    <p className={styles.home} onClick={handleHome}>Главная</p>
                    <p>&gt;</p>
                    <p className={styles.pathCompany}>Контакты</p>
                </div>
                <div className={styles.contacts}>
                    <h1 className={styles.text}>Контакты</h1>
                    <div className={styles.contactsInfo}>
                        <div className={styles.contactBlock} >
                            <img className={styles.contactImg} src='images/home.png' alt='' />
                            <div>
                                <p className={styles.firstHalf}>Бухгалтерия, склад</p>
                                <p className={styles.secondHalf}><nobr>+7 82140 92619</nobr></p>
                            </div>
                        </div>
                        <div className={styles.contactBlock} >
                            <img className={styles.contactImg} src='images/percent.png' alt='' />
                            <div>
                                <p className={styles.firstHalf}>Вопросы по системе лояльности</p>
                                <p className={styles.secondHalf}><nobr>+7 908 716 33 97</nobr></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.stores}>
                    <h2>Наши магазины</h2>
                    <div className={styles.cities}>
                        <button className={styles.city}>п.Щельяюр</button>
                        <button className={styles.city}>д.Вертеп</button>
                        <button className={styles.city}>с.Краснобор</button>
                        <button className={styles.city}>д.Диюр</button>
                    </div>
                </div>
                <div className={styles.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBXEj9YJcN4PA_s13GSIPP9omvbfgCp2KE" }}
                        defaultCenter={defaultCoordinates.center}
                        defaultZoom={defaultCoordinates.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Contacts;