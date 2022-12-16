import {motion} from "framer-motion";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import MainLinks from "./components/MainLinks";
import SearchForm from "./components/SearchForm";
import Bookmarks from "./bookmarks/Bookmarks";
import Background from "./components/Background";



function App() {

    const transitions = {
        links: {
            hidden: { translateY: -15, opacity: 0 },
            show: { translateY: 0, opacity: 1, transition: { delay: 0, duration: 0.5 } }
        },
        search: {
            hidden: { translateY: -15, opacity: 0 },
            show: { translateY: 0, opacity: 1, transition: { delay: 0.15, duration: 0.5 } }
        },
        bookmarks: {
            hidden: { translateY: -15, opacity: 0 },
            show: { translateY: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
        }
    }

    return (
        <>
            <Background/>

            <SimpleBar className={"h-screen w-screen"}>
                <div className={"px-12 py-32"}>
                    <header className={"mb-40"}>
                        <motion.div
                            variants={transitions.links}
                            initial={"hidden"}
                            animate={"show"}
                        >
                            <MainLinks/>
                        </motion.div>
                    </header>

                    <main className={"space-y-32"}>
                        <motion.div
                            variants={transitions.search}
                            initial={"hidden"}
                            animate={"show"}
                        >
                            <SearchForm/>
                        </motion.div>

                        <motion.div
                            variants={transitions.bookmarks}
                            initial={"hidden"}
                            animate={"show"}
                        >
                            <Bookmarks/>
                        </motion.div>
                    </main>
                </div>
            </SimpleBar>
        </>
    )
}

export default App
