import StandardButton from "components/buttons/StandardButton.js"
import styles from './hero.module.scss';
import Reveal from "components/utils/Reveal.js";
function Hero(){
    const handleClick = () => {
        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    }
    return(
       <section className={`section-wrapper ${styles.hero}`}>
           <div className={styles.copyWrapper}>
               <Reveal>
                   <h1 className={styles.title}>
                       Hey, I&apos;m Bhaskar<span>.</span>
                       {/*Hey, Bhaskar here<span>.</span>*/}
                   </h1>
               </Reveal>

               <Reveal>
                    <h2 className={styles.subTitle}>
                        I&apos;m a <span>Student Developer</span>
                    </h2>
               </Reveal>

               <Reveal>
                    <p className={styles.aboutCopy}>
                        I'm grateful for what i am and what i am doing as a software developer. I always try to solve real-world problems with software. Let's work together to bring our ideas to life!
                    </p>
               </Reveal>

               <Reveal>
                     <StandardButton onClick={handleClick}>
                         Contact Me
                     </StandardButton>
               </Reveal>
           </div>
       </section>
    )
}
export default Hero;