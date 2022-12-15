import Bookmarks from "./bookmarks/Bookmarks";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import BG from '../assets/images/plop.jpg';


function App() {

    return (
        <SimpleBar className={"h-screen w-screen"}>
            <div className={"p-12 flex flex-col gap-5 space-y-20"}>
                <div className={
                    `fixed opacity-80 inset-0 pointer-events-none w-full h-full overflow-hidden
                     after:bg-gradient-to-t after:from-neutral-900 after:absolute after:inset-0 after:top-[75%]
                     before:bg-gradient-to-b before:from-neutral-900 before:absolute before:inset-0 before:bottom-[75%] before:z-10`
                }>
                    <img src={BG} alt="" className={"absolute inset-0 w-full h-full object-top object-cover"}/>
                </div>

                <div className={"relative z-10"}>
                    <header className={"text-4xl mb-20 text-center"}>
                        kekplop
                    </header>

                    <main>
                        <Bookmarks/>
                    </main>
                </div>
            </div>
        </SimpleBar>
    )
}

export default App
