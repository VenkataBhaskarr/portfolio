import Reveal from "@/components/utils/Reveal";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import styles from "./contact.module.scss";
function Contact(){
    return(
        <section className="section-wrapper" id="contact">
            <div className={styles.contactWrapper}>
                <Reveal width="100%">
                    <h4 className={styles.contactTitle}>
                        Contact<span>.</span>
                    </h4>
                </Reveal>
                <Reveal width="100%">
                    <p className={styles.contactCopy}>
                        Shoot me an email if you want to connect! You can also find me on{" "}
                        <Link
                            href="https://www.instagram.com/bhaskarsig"
                            target="_blank"
                            rel="nofollow"
                        >
                           Instagram
                        </Link>{" "}
                        or{" "}
                        <Link href="https://www.twitter.com/@Bhaskarstwt" target="_blank" rel="nofollow">
                            Twitter
                        </Link>{" "}
                        if that&apos;s more your speed.
                    </p>
                </Reveal>
                <Reveal width="100%">
                    <Link href="mailto:venkatabhaskarpuppala@gmail.com">
                        <div className={styles.contactEmail}>
                            <AiFillMail size="2.4rem" />
                            <span>venkatabhaskarpuppala@gmail.com</span>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
export default Contact;