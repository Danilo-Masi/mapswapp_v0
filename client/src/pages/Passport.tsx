import ChangeButton from "@/components/passport/ChangeButton";
import MapLayer from "@/components/passport/MapLayer";
import StatusDialog from "@/components/passport/status/StatusDialog";

export default function Passport() {
    return (
        <div className="h-svh w-full relative">
            <ChangeButton />
            <MapLayer />
            <StatusDialog />
        </div>
    );
}
