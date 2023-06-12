import MyLinks from "@/components/nav/components/MyLinks";
import styles from './about.module.scss';
import Reveal from "@/components/utils/Reveal";
import {AiOutlineArrowRight} from "react-icons/ai";
import SectionHeader from "@/components/utils/SectionHeader";
import Stats from "./Stats";

function About(){
    return(
       <section id="about" className="section-wrapper">
           <SectionHeader title="About" dir="l"/>
           <div className={styles.about}>
               <div>
                   <Reveal>
                       <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                           Hey! I&apos;m Bhaskar, if you haven&apos;t already gathered that by
                           now. I&apos;m a student software developer from India 🇮🇳,
                           . I love backend systems built using golang,node and rust, but
                           love building with whatever tools are right for the project.
                       </p>
                   </Reveal>
                   <Reveal>
                       <p className={styles.aboutText}>
                           I currently work for Google on Google Photos. I also toss in my ¢2
                           with the design systems teams from time to time (once an artist,
                           always an artist, amirite?).
                       </p>
                   </Reveal>
                   <Reveal>
                       <p className={styles.aboutText}>
                           Outside of work, I love hanging out with my friends. Any given Sunday
                           you&apos;ll find me happily hanging with my friends.️
                       </p>
                   </Reveal>
                   <Reveal>
                       <p className={styles.aboutText}>
                           I&apos;m passively looking for new positions where I can merge my
                           love for code with my passion. If you think
                           you&apos;ve got an opening that I might like, let&apos;s connect
                           🔗
                       </p>
                   </Reveal>
                   <Reveal>
                       <div className={styles.links}>
                           <div className={styles.linksText}>
                               <span>My links</span>
                               <AiOutlineArrowRight />
                           </div>
                           <MyLinks />
                       </div>
                   </Reveal>
               </div>
               <Stats />
           </div>
       </section>
    )
}

export default About;