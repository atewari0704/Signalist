"use client"

import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import TradingViewWidget from "@/components/TradingViewWidget"
import { SINGLE_TICKER_WIDGET_CONFIG, SYMBOL_INFO_WIDGET_CONFIG } from "@/lib/constants"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants"
import { addStockAlert } from "@/lib/actions/alerts.actions"


interface AlertCellProps {
    symbol: string
}



export const AlertCell = ({ symbol }: AlertCellProps) => {
    const [price, setPrice] = useState("")
    const [direction, setDirection] = useState<"above" | "below">("above")
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

    const handleCreateAlert = async () => {
        if (!price) return

        try {
            setIsLoading(true)
            await addStockAlert({
                symbol,
                targetPrice: Number(price),
                condition: direction === "above" ? "ABOVE" : "BELOW"
            })
            setOpen(false)
            setPrice("")
        } catch (error) {
            console.error("Failed to create alert:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        title={`Set alert for ${symbol}`}
                    >
                        <BellIcon className="h-4 w-4" />
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[650px] bg-[#0A0A0A] border-gray-800 text-white p-6 gap-6">
                <DialogTitle className="text-xl font-semibold tracking-tight">Set Price Alert for {symbol}</DialogTitle>

                <TradingViewWidget
                    scriptUrl={`${scriptUrl}symbol-info.js`}
                    config={SYMBOL_INFO_WIDGET_CONFIG(symbol)}
                    className="w-full h-full bg-[#1A1A1A] rounded-lg border border-gray-800 overflow-hidden"
                />

                <div className="flex flex-col gap-4">
                    {/* Toggle */}
                    <div className="flex w-fit bg-[#1A1A1A] rounded-lg p-1 border border-gray-800">
                        <button
                            onClick={() => setDirection("above")}
                            className={cn(
                                "px-6 py-1.5 text-sm font-medium rounded-md transition-all",
                                direction === "above"
                                    ? "bg-[#0b9981] text-white shadow-sm"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            Above
                        </button>
                        <button
                            onClick={() => setDirection("below")}
                            className={cn(
                                "px-6 py-1.5 text-sm font-medium rounded-md transition-all",
                                direction === "below"
                                    ? "bg-[#f23646] text-white shadow-sm"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            Below
                        </button>
                    </div>

                    {/* Input and Button Row */}
                    <div className="flex gap-4 items-center">
                        <div className="relative flex-1">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                                $
                            </div>
                            <Input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Type in Amount"
                                className="pl-7 bg-[#1A1A1A] border-gray-800 text-white h-12 focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:border-gray-600 placeholder:text-gray-500 caret-yellow-500 animate-pulse-caret"
                            />
                        </div>

                        <Button
                            className="h-12 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg whitespace-nowrap"
                            onClick={handleCreateAlert}
                            disabled={isLoading || !price}
                        >
                            {isLoading ? "Creating..." : "Create Alert"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
