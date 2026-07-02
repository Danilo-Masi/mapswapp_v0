import { useAppContext } from "@/context/AppContext";
import PreviewMap from "./PreviewMap";
import PreviewInfo from "./PreviewInfo";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { europeItineraries } from "@/data/itineraries/europeItineraries";

export default function PreviewCardMobile() {
    const { isPreviewOpen, setPreviewOpen, selectedItinerary } = useAppContext();

    const itinerary = europeItineraries.find(it => it.id === selectedItinerary);

    return (
        <Drawer open={isPreviewOpen} onOpenChange={setPreviewOpen}>
            <DrawerContent className="p-3 flex flex-col gap-4">
                <PreviewMap itinerary={itinerary} />
                <PreviewInfo itinerary={itinerary} />
            </DrawerContent >
        </Drawer>
    )
}
