interface ContinentCardProps {
    name: string;
    image: string;
    itineraries: number;
    active?: boolean;
    onClick?: () => void;
}

export default function ContinentCard({
    name,
    image,
    itineraries,
    active = false,
    onClick,
}: ContinentCardProps) {
    return (
        <button
            onClick={onClick}
            className={`
                group
                relative
                w-36
                h-36
                rounded-3xl
                border-2
                bg-white
                overflow-hidden
                transition-all
                duration-300
                cursor-pointer
                hover:-translate-y-1
                hover:shadow-xl
                ${active
                    ? "border-blue-500 shadow-lg shadow-blue-500/20"
                    : "border-zinc-200 hover:border-blue-300"}
            `}
        >
            {/* Active indicator */}
            {active && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500" />
            )}

            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <img
                    src={image}
                    alt={name}
                    className={`
                        w-14
                        h-14
                        object-contain
                        transition-all
                        duration-300
                        ${active
                            ? "opacity-100 scale-105"
                            : "opacity-50 group-hover:opacity-80"}
                    `}
                />

                <div className="flex flex-col items-center">
                    <p
                        className={`
                            font-bold
                            ${active
                                ? "text-blue-500"
                                : "text-zinc-800"}
                        `}
                    >
                        {name}
                    </p>

                    <p className="text-xs text-zinc-500">
                        {itineraries} itineraries
                    </p>
                </div>
            </div>
        </button>
    );
}