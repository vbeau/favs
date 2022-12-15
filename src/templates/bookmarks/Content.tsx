import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import Link from "../Link";
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;


const Content = ({data, depth}: {data: BookmarkTreeNode, depth: number}) => {

    const { title, url, children } = data;
    const [isOpen, setIsOpen] = useState(false);


    const transitions = {
        container: {
            hidden: { height: 0, opacity: 0, transition: { staggerChildren: 0.025, staggerDirection: -1, when: "afterChildren" } },
            show: { height: "auto", opacity: 1, transition: { staggerChildren: 0.05 } }
        },
        item : {
            hidden: {scaleY: 0, x: 10, opacity: 0, transition: {duration: 0.25}, originY: 0.5},
            show: {scaleY: 1, x: 0, opacity: 1, transition: {duration: 0.25}, originY: 0.5}
        }
    }


    if (url) {
        return <Link url={url} title={title}/>
    }

    return (
        <>
            <motion.button
                whileHover={{scale: 1.025}}
                whileTap={{scale: 0.975}}
                className={"py-4 px-6 w-full relative"}
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.span
                    initial={{ scaleX: 1, skewX: 0 }}
                    className={"bg-neutral-800/25 absolute inset-0"}
                    animate={{
                        skewX: !isOpen ? 0 : -9,
                        scaleX: !isOpen ? 1 : 0.98,
                    }}
                />
                <div className={"z-10 relative flex justify-between"}>
                    {title}
                    <span>{isOpen ? "-" : "+"}</span>
                </div>
            </motion.button>

            <AnimatePresence mode={"wait"}>
                { (children && isOpen) && (
                    <motion.div
                        key={title}
                        variants={transitions.container}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        layout
                    >
                        <ul
                            className={"pt-2 flex flex-wrap"}
                        >
                            { children.map((child, idx) => (
                                <motion.li key={idx} variants={transitions.item} className={`px-2 py-2 ${!child.children ? 'w-1/2' : 'w-full'}`}>
                                    <Content data={child} depth={depth + 1}/>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}


export default Content;