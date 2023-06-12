import styles from './projects.module.scss';
import {useState, useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';
import Reveal from "@/components/utils/Reveal";
import Link from 'next/link';
import {AiFillGithub, AiOutlineExport} from 'react-icons/ai';
function Project({title, imgSrc, code, tech, description}){
    const [hovered, setHovered] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const controls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);
    return(
        <>
           <motion.div
               ref={ref}
               variants={{
                   hidden: { opacity: 0, y: 100 },
                   visible: { opacity: 1, y: 0 },
               }}
               initial="hidden"
               animate={controls}
               transition={{ duration: 0.75 }}
           >
               <div
                   onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}
                   onClick={() => setIsOpen(true)}
                   className={styles.projectImage}
               >
                   <img
                       src={imgSrc}
                       alt={`An image of the ${title} project.`}
                       style={{
                           width: hovered ? "90%" : "85%",
                           rotate: hovered ? "2deg" : "0deg",
                       }}
                   />
               </div>
               <div className={styles.projectCopy}>
                   <Reveal width="100%">
                       <div className={styles.projectTitle}>
                           <h4>{title}</h4>
                           <div className={styles.projectTitleLine} />

                           <Link href={code} target="_blank" rel="nofollow">
                               <AiFillGithub size="2.8rem" />
                           </Link>
                       </div>
                   </Reveal>
                   <Reveal>
                       <div className={styles.projectTech}>{tech.join(" - ")}</div>
                   </Reveal>
                   <Reveal>
                       <p className={styles.projectDescription}>
                           {description}{" "}
                           <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
                       </p>
                   </Reveal>
               </div>
           </motion.div>
        </>
    )
}

export default Project;