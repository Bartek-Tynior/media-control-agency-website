import { useRef } from "react";
import websiteContent from "../../website-content";
import { useScroll, motion } from "framer-motion";

export default function About() {

    const element = useRef(null);
    const content = websiteContent.about;

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    return (
        <section className="h-screen md:pt-28 sm:pb-14" id="vision">
            <div className="h-full flex flex-col items-center justify-center">
                <motion.p className="text-3xl h-fit text-center" ref={element} style={{ opacity: scrollYProgress }}>
                    {content.description}
                </motion.p>
            </div>
        </section>
    );
}