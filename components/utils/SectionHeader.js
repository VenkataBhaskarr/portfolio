import styles from './sectionheader.module.scss';
import Reveal from "@/components/utils/Reveal";
function SectionHeader({title , dir = "r"}){
    return(
        <div
            className={styles.sectionHeader}
            style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
        >
            <div className={styles.line} />
            <h3>
                <Reveal>
          <span className={styles.title}>
            {title}
              <span>.</span>
          </span>
                </Reveal>
            </h3>
        </div>
    )
}
export default SectionHeader;