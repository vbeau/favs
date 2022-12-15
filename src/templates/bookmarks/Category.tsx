import {AnimatePresence, motion} from "framer-motion";
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

import Content from "./Content";


const Category = ({data, menuItems, idx}: {data: BookmarkTreeNode, menuItems: boolean[], idx: number}) => {

    const { title, children } = data;
    const isOpen = menuItems[idx];

    const transitions = {
        container: {
            hidden: { height: 0, opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1, when: "afterChildren" } },
            show: { height: "auto", opacity: 1, transition: { staggerChildren: 0.1 } }
        },
        item: {
            hidden: { scaleX: 0.5, y: -50, opacity: 0, transition: { duration: 0.25 }, originY: 0 },
            show: { scaleX: 1, y: 0, opacity: 1, transition: { duration: 0.25 }, originY: 1 }
        },
        bg: {
            hidden: { skewX: -8, scale: 1.25, transition: { duration: 0.7 } },
            show: { skewX: 0, scale: 1, transition: { duration: 0.7 } }
        }
    }


    return (
        <AnimatePresence mode={"popLayout"}>
            { isOpen && children && (
                <motion.li
                    key={title}
                    layout
                    variants={transitions.container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <motion.div
                        variants={transitions.item}
                        className={"p-6 py-8 relative"}
                    >
                        <motion.span
                            className={"bg-neutral-700/70 absolute inset-0"}
                            variants={transitions.bg}
                        />

                        <ul
                            className={"relative z-10 flex flex-wrap"}
                        >
                            { children.map((child, idx) =>
                                <li key={idx} className={`p-2  ${!child.children ? 'w-1/2' : 'w-full'}`}>
                                    <Content data={child} depth={1}/>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                </motion.li>
            )}
        </AnimatePresence>
    )
}

export default Category;