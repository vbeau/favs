import {ReactElement} from "react";
import { motion } from "framer-motion";


type LinkType = {
    name: string,
    link?: string,
    icon?: ReactElement
}

const MainLinks = () => {

    const links: LinkType[] = [
        { name: "GitHub", link: "https://github.com" },
        { name: "BitBucket", link: "https://bitbucket.org" },
        { name: "Youtube", link: "https://www.youtube.com" },
        { name: "Reddit", link: "https://reddit.com" },
        { name: "LinkedIn", link: "https://www.linkedin.com" },
        { name: "Outlook", link: "https://outlook.live.com/" },
        { name: "Soundcloud", link: "https://soundcloud.com" },
    ];

    return (
        <section>
            <ul className={"grid grid-cols-3 justify-center gap-10 max-w-4xl mx-auto"}>
                { links.map((link, index) => (
                    <li key={index} className={"flex flex-row gap-5 items-center"}>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={link.link}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"text-2xl text-neutral-100 flex gap-4"}
                        >
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                className={"w-10 h-10 bg-neutral-700/70 flex items-center justify-center"}
                            >
                                <span className={"text-2xl text-neutral-100"}>
                                    {link.icon}
                                </span>
                            </motion.div>

                            {link.name}
                        </motion.a>
                    </li>
                )) }
            </ul>

        </section>
    );

}

export default MainLinks;