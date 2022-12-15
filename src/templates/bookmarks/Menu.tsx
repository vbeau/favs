import {motion} from "framer-motion";
import {Dispatch, SetStateAction} from "react";
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;


type MenuProps = {
    data: BookmarkTreeNode,
    setMenuItems: Dispatch<SetStateAction<boolean[]>>,
    menuItems: boolean[],
    idx: number
}

const Menu = ({data, setMenuItems, menuItems, idx}: MenuProps) => {

    const { title } = data;
    const isOpen = menuItems[idx];


    return (
        <motion.button
            whileHover={{ translateY: -5, scale: 1 }}
            whileTap={{ scale: 0.925 }}
            onClick={() => {
                const newMenuItems = Array.from({length: menuItems.length}, () => false);
                setMenuItems(
                    [...newMenuItems.slice(0, idx), !isOpen, ...newMenuItems.slice(idx + 1)]
                )
            }}
            animate={{
                translateY: !isOpen ? 0 : 8,
                scale: !isOpen ? (menuItems.filter((item) => item).length === 0 ? 1 : 0.8) : 1.15,
            }}
            className={
                `relative block text-3xl font-bold text-center px-6 py-4`
            }
        >
            <motion.span
                className={"bg-neutral-700 absolute inset-0"}
                style={{ skewX: -10 }}
                animate={{
                    rotate: !isOpen ? 0 : 100,
                    scale: !isOpen ? 1 : 0.7,
                    skewX: !isOpen ? -10 : 0,
                    opacity: !isOpen ? (menuItems.filter((item) => item).length === 0 ? 1 : 0.8) : 1
                }}
            />
            <motion.span
                className={"relative z-10 block"}
                animate={{
                    scale: !isOpen ? 1 : 1.2
                }}
            >
                {title}
            </motion.span>
        </motion.button>
    )
}

export default Menu;