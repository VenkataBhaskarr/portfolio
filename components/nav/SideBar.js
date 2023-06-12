import {useState, useEffect} from "react";
import styles from "./sidebar.module.scss";
import {motion} from "framer-motion";

function SideBar(){
    const [selected , setSelected] = useState("");
    useEffect(() => {
        const section = document.querySelectorAll(".section-wrapper");
        const options = {
            threshold: 0.3
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setSelected(entry.target.id);
                }
            })
        }, options)

        section.forEach(sec => {
            observer.observe(sec);
        })

    }, [])
    return(
       <motion.nav
           initial={{x: -70}}
           animate={{x: 0}}
           transition={{duration: 0.5}}
           className={styles.sideBar}
       >
           <span className={styles.logo}>
               B<span>.</span>
           </span>
           <motion.a
                initial={{x : -70}}
                animate={{x: 0}}
                transition={{duration: 0.5 , delay: 0.1}}
                href="#about"
                onClick={() => {
                    setSelected("about");
                }}
                className={selected === "about" ? styles.selected : ""}
           >
               About
           </motion.a>
           <motion.a
               initial={{x : -70}}
               animate={{x: 0}}
               transition={{duration: 0.5 , delay: 0.2}}
               href="#projects"
               onClick={() => {
                   setSelected("projects");
               }}
               className={selected === "projects" ? styles.selected : ""}
           >
                Projects
              </motion.a>

           <motion.a
               initial={{x : -70}}
               animate={{x: 0}}
               transition={{duration: 0.5 , delay: 0.4}}
               href="#contact"
               onClick={() => {
                   setSelected("contact");
               }}
               className={selected === "contact" ? styles.selected : ""}
           >
               Contact
           </motion.a>
       </motion.nav>
    )
}

export default SideBar;