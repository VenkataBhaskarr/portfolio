import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import Reveal from "@/components/utils/Reveal";

export const Stats = () => {
    return (
        <div className={styles.stats}>
            <Reveal>
                <div className={styles.statColumn}>
                    <h4>
                        <AiFillCode size="2.4rem" color="var(--brand)" />
                        <span>I'm good at</span>
                    </h4>
                    <div className={styles.statGrid}>
                        <span className="chip">JavaScript</span>
                        <span className="chip">Java</span>
                        <span className="chip">React</span>
                        <span className="chip">NodeJS</span>
                        <span className="chip">Express</span>
                        <span className="chip">Golang</span>
                        <span className="chip">Supabase</span>
                        <span className="chip">Appwrite</span>
                        <span className="chip">MongoDB</span>
                        <span className="chip">Docker</span>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.statColumn}>
                    <h4>
                        <AiFillSmile size="2.4rem" color="var(--brand)" />
                        <span>I want to be good at</span>
                    </h4>
                    <div className={styles.statGrid}>
                        <span className="chip">Rust</span>
                        <span className="chip">Low latency systems</span>
                        <span className="chip">GraphQL</span>
                        <span className="chip">Python</span>
                        <span className="chip">Next.js</span>
                        <span className="chip">AWS</span>
                        <span className="chip">Tailwind</span>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};
export default Stats;
