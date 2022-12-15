
import {motion} from "framer-motion";


const Link = ({url, title}: {url: string, title: string}) => {

    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={url}
            className={`
                block text-xl
                bg-neutral-500/10 py-5 px-4 flex align-center gap-3
            `}
            target={"_blank"}
        >
            <img src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`} alt={title}/>
            <span className={"overflow-hidden overflow-ellipsis whitespace-nowrap"}>
                {title}
            </span>
        </motion.a>

    )
}

export default Link;