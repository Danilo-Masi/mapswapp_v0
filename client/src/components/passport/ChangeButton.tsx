import { Earth, Pin } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";


export default function ChangeButton() {
    return (
        <ButtonGroup className="z-50 absolute top-2 left-1/2 -translate-x-1/2">
            <Button variant="outline" className="py-5 px-5"><Earth />World</Button>
            <Button variant="outline" className="py-5 px-5"><Pin />Cities</Button>
        </ButtonGroup>
    )
}
