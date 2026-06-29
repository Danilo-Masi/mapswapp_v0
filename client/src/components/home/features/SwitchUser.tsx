import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppContext } from "@/context/AppContext"
import { PiggyBank, ShoppingBag } from "lucide-react";

export default function SwitchUser() {

    const { selectedFeature, setSelectedFeature } = useAppContext();
    
    return (
        <Tabs
            value={selectedFeature}
            onValueChange={setSelectedFeature}
            className="w-full md:w-1/3 h-[6svh]">
            <TabsList className="grid w-full grid-cols-2 rounded-lg bg-zinc-200 p-1 text-zinc-800">
                <TabsTrigger value="0" className="cursor-pointer">
                    SELLER <PiggyBank />
                </TabsTrigger>
                <TabsTrigger value="1" className="cursor-pointer">
                    BUYER <ShoppingBag />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
