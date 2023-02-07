import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';



const Search = ({ searchElement, handleClose, open }) => {
    const navigate = useNavigate();

    const handleElement = () => {
        navigate('/', { replace: true })
        handleClose();
    };
    return (
        <div className={styles.container} >
            {searchElement?.name ? <p onClick={handleElement}>{searchElement.name}</p> : <p onClick={handleElement} className={styles.category}>{searchElement}</p>}
        </div>
    )
}

export default Search;