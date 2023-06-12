import {
    AiFillHeart,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillCode,
    AiFillCodepenCircle, AiFillMail,
} from "react-icons/ai";
import {FaCode} from "react-icons/fa";
import {motion} from "framer-motion";
import styles from "./headinglinks.module.scss";
import Link from "next/link";

function MyLinks(){
    return(
        <div className={styles.links}>
           <motion.span
               initial = {{opacity: 0, y: -30}}
               animate={{opacity: 1, y: 0}}
               transition={{delay: 0.0, duration: 0.5}}
           >
               <Link href="https://twitter.com/@Bhaskarstwt">
                    <AiFillTwitterCircle size="2.4rem"/>
               </Link>

           </motion.span>

            <motion.span
                initial = {{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1, duration: 0.5}}
            >
                <Link href="https://github.com/VenkataBhaskarr">
                    <AiFillGithub size="2.4rem"/>
                </Link>

            </motion.span>

            <motion.span
                initial = {{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2, duration: 0.5}}
            >
                <Link href="https://leetcode.com/bhaskar_3000">
                       <AiFillCode size="2.4rem"/>
                </Link>
            </motion.span>
        </div>
    )
}
export default MyLinks;