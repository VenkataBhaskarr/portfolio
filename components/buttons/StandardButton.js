import styles from './standardbutton.module.scss';
function StandardButton({children , onClick}){
    return(
        <button onClick={onClick} className={styles.standardButton}>
            {children}
        </button>
    )
}
export default StandardButton;