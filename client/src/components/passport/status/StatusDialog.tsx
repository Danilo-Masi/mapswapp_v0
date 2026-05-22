import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Flag, Heart } from "lucide-react"

export default function StatusDialog() {
    return (
        <Dialog open>
            <DialogContent className="z-50 max-w-md p-6" showCloseButton={false}>

                {/* HEADER */}
                <DialogHeader >
                    <DialogTitle className="text-2xl font-bold text-balance flex items-center justify-start gap-2 w-full">
                        France
                    </DialogTitle>
                    <DialogDescription className="text-sm text-zinc-500">
                        Have you been here or planning to go?
                    </DialogDescription>
                </DialogHeader>
                {/* CONTENT */}
                <div className="w-full flex justify-center gap-3">
                    <Button className="w-[calc(50%-6px)] py-6 rounded-2xl">
                        <Flag />
                        Visited
                    </Button>
                    <Button className="w-[calc(50%-6px)] py-6 rounded-2xl">
                        <Heart />
                        Want
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    )
}