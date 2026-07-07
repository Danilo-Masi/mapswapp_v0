import PhoneMockup from "./PhoneMockup"

function Section1() {
    return (
        <div className="w-full md:w-[35%] h-auto md:h-full flex flex-col gap-5 items-end border p-6 pb-0 overflow-hidden border-zinc-200 rounded-2xl bg-zinc-50">
            <div className="w-full h-1/2 bg-red-500">
                testo
            </div>
            <PhoneMockup daySelected={1}/>
        </div>
    )
}

function Section2() {
    return (
        <div className="w-full min-h-[50svh] md:min-h-0 h-auto md:h-[50%] flex flex-col md:flex-row gap-5 border p-6 border-zinc-200 rounded-2xl bg-zinc-50">
            <div className="w-full md:w-1/2 h-full bg-red-500">
                testo
            </div>
            <div className="w-full md:w-1/2 h-full bg-green-500">
                immagine
            </div>
        </div>
    )
}

function Section3() {
    return (
        <div className="w-full min-h-[50svh] md:min-h-0 h-auto md:h-[50%] flex flex-col md:flex-row gap-5 border p-6 border-zinc-200 rounded-2xl bg-zinc-50">
            <div className="w-full md:w-1/2 h-full bg-green-500">
                immagine
            </div>
            <div className="w-full md:w-1/2 h-full bg-red-500">
                testo
            </div>
        </div>
    )
}

export default function Seller() {
    return (
        <div className="w-full h-auto md:h-[110svh] flex flex-col md:flex-row gap-16 md:gap-5">
            <Section1 />
            <div className="w-full md:w-[65%] flex flex-col gap-16 md:gap-5">
                <Section2 />
                <Section3 />
            </div>
        </div>
    )
}
