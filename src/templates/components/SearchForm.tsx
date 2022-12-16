import {FormEvent, useRef, useState} from "react";
import {motion} from "framer-motion";


const SearchForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = inputRef.current?.value;

        if (query) {
            window.open(`https://google.com/search?q=${query}`, '_blank');
            inputRef.current!.value = '';
        }
    }
    const [focused, setFocused] = useState(false)

    return (
        <form onSubmit={handleSubmit} className={"text-center text-4xl"}>

            <motion.div
                className="relative inline-block"
                animate={{
                }}
            >
                <motion.span
                    className={" absolute inset-0"}
                    animate={{
                        skewX: focused ? -15 : 0,
                        backgroundColor: focused ? "rgba(50, 50, 50, 0.5)" : "rgba(50, 50, 50, 0.2)",
                        scaleY: focused ? 1.2 : 1,
                    }}
                    initial={{backgroundColor: "rgba(50, 50, 50, 0.3)"}}
                />

                <motion.input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    className={
                        `text-center relative bg-transparent py-5 px-7 placeholder-white
                         placeholder-opacity-50 outline-none cursor-pointer overflow-ellipsis whitespace-nowrap`
                    }
                    placeholder={"kek; plop!"}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </motion.div>
        </form>
    );
}


export default SearchForm;