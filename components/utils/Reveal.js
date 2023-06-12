import {useEffect, useRef} from "react";
import {motion , useInView , useAnimation} from "framer-motion";

function Reveal({children}){
    const ref = useRef(null);
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const isInView = useInView(ref, {once : true});
    useEffect(() => {
      if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
      }else{
            mainControls.start("hidden");
            slideControls.start("hidden");
      }
    }, [mainControls , slideControls , isInView])
    return (
        <div ref={ref} style = {{position : "relative" , overflow : "hidden"}}>
           <motion.div
               variants={{
                   hidden: { opacity : 0 , y: 75},
                   visible: { opacity : 1 , y: 0},
               }}
               initial="hidden"
               animate={mainControls}
               transition={{duration: 0.5 , delay: 0.25}}
           >
                {children}
           </motion.div>

            <motion.div
                variants={{
                    hidden: { x : 0},
                    visible: { x : "100%"}
                    }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5 , ease: "easeInOut"}}
                style={{
                    position: "absolute",
                    top: 4,
                    left: 0,
                    right: 0,
                    bottom: 4,
                    background: "var(--brand)",
                    zIndex:20
                }}

            />
        </div>
    )
}

export default Reveal;