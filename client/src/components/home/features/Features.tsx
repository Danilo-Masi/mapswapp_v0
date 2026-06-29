import SwitchUser from "./SwitchUser";
import { useAppContext } from "@/context/AppContext";
import Seller from "./Seller";
import Buyer from "./Buyer";

export default function Features() {
    const { selectedFeature } = useAppContext();

    return (
        <section className="w-[95%] md:w-5/6 flex flex-col items-center gap-16" id="features">
            <h1 className="text-6xl max-w-xl font-extrabold text-center text-zinc-900 leading-tight text-balance">
                Plan less. Experience more.
            </h1>
            <SwitchUser />
            {selectedFeature === "0" ? <Seller /> : <Buyer />}
        </section>
    )
}