"use client"

import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"

interface AlertCellProps {
    symbol: string
}

export const AlertCell = ({ symbol }: AlertCellProps) => {
    return (
        <div className="flex items-center justify-center">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => console.log("Set alert for:", symbol)}
                title={`Set alert for ${symbol}`}
            >
                <BellIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}
