import styles from './home.module.scss';
import SideBar from "../nav/SideBar";
import Heading from "../nav/Heading";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./Projects/Projects";
import Contact from "./contact/Contact";
function Home(){
    return(
        <>
        <div className={styles.home}>
           <SideBar />
              <main>
                <Heading />
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
              </main>

        </div>

        </>
    )
}
export default Home;