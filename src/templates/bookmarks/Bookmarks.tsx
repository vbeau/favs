import {useEffect, useRef, useState} from "react";
import {useOnClickOutside} from "usehooks-ts";

import {mockData} from "../../data/mock";

import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

import Category from "./Category";
import Menu from "./Menu";



const Bookmarks = () => {

    const [bookmarks, setBookmarks] = useState<BookmarkTreeNode[]>([]);
    const [menuItems, setMenuItems] = useState<boolean[]>([]);
    const ref = useRef(null);

    useEffect(() => {
        if (import.meta.env.DEV) {
            setBookmarks(mockData);
        } else {
            chrome.bookmarks.getTree().then((result) => {
                if (result[0].children) {
                    const mainBar = result[0].children.find((child) => child.title === "Bookmarks")?.children;

                    if (mainBar && mainBar[0].children) {
                        setBookmarks(mainBar[0].children);
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        setMenuItems(Array.from({length: bookmarks.length}, () => false));
    }, [bookmarks])

    const handleClickOutside = () => {
        setMenuItems(
            [...Array.from({length: menuItems.length}, () => false)]
        )
    }
    useOnClickOutside(ref, handleClickOutside)


    return (
        <section className={"flex flex-col items-center"}>
            <div ref={ref}>
                <ul className={"inline-flex items-center gap-6 justify-center"}>
                    { bookmarks.map((bookmark, idx) => (
                        <li key={idx}>
                            <Menu data={bookmark} setMenuItems={setMenuItems} menuItems={menuItems} idx={idx}/>
                        </li>
                    ))}
                </ul>

                <ul className={"mt-20 max-w-3xl w-full mx-auto"}>
                    { bookmarks.map((bookmark, idx) => (
                        <Category data={bookmark} menuItems={menuItems} idx={idx} key={idx}/>
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default Bookmarks;