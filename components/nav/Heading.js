import styles from './heading.module.scss';
import MyLinks from "./components/MyLinks";
import OutlineButton from "../buttons/OutlineButton";
function Heading(){
    const handleClick = () => {
        window.open("https://bhaskarsportfolio.netlify.app");
    }
    return(
       <header className={styles.heading}>
           <MyLinks />
           <OutlineButton onClick={handleClick}>
               My Resume
           </OutlineButton>
       </header>
    )
}

export default Heading;