import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import MainLinks from "./components/MainLinks";
import SearchForm from "./components/SearchForm";
import Bookmarks from "./bookmarks/Bookmarks";
import Background from "./components/Background";



function App() {

    return (
        <>
            <Background/>

            <SimpleBar className={"h-screen w-screen"}>
                <div className={"px-12 py-32"}>
                    <header className={"mb-40"}>
                        <MainLinks/>
                    </header>

                    <main className={"space-y-32"}>
                        <SearchForm/>

                        <Bookmarks/>
                    </main>
                </div>
            </SimpleBar>
        </>
    )
}

export default App
