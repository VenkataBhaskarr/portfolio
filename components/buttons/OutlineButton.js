import styles from './outlineButton.module.scss';
function OutlineButton({children, onClick}){
    return(
        <button className={styles.outlineButton} onClick={onClick}>
            {children}
        </button>
    )
}
export default OutlineButton;