import styles from './PriceSlider.module.css';
import Slider from '@mui/material/Slider';

const PriceSlider = ({value, setValue}) => {
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeFrom = (event) => {
        setValue([event.target.value, value[1]]);
        console.log(value);
    }

    const handleChangeTo = (event) => {
        setValue([value[0], event.target.value]);
    }

    const valueText = (value) => {
        return `${value}`
    }
    return (
        <div className={styles.container}>
            <div className={styles.inputPrices}>
                <input type='number' value={value[0]} onChange={handleChangeFrom} />
                <div className={styles.dash} />
                <input type='number' value={value[1]} onChange={handleChangeTo} />
            </div>
            <div className={styles.sliderColor}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                    max={1000}
                />
            </div>
        </div>
    );
};

export default PriceSlider;