import BG from "../../assets/images/plop.jpg";



const Background = () => (
    <div className={
        `fixed opacity-80 inset-0 pointer-events-none w-full h-full overflow-hidden
        after:bg-gradient-to-t after:from-neutral-900 after:absolute after:inset-0 after:top-[75%]
        before:bg-gradient-to-b before:from-neutral-900 before:absolute before:inset-0 before:bottom-[75%] before:z-10`
    }>
        <img src={BG} alt="" className={"absolute inset-0 w-full h-full object-top object-cover"}/>
    </div>
)

export default Background;