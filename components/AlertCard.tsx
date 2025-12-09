"use client";

import React from "react";
import { AlertItem } from "@/database/models/alert.model";
import TradingViewWidget from "@/components/TradingViewWidget";
import { SINGLE_TICKER_WIDGET_CONFIG, SYMBOL_INFO_WIDGET_CONFIG } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { removeStockAlert } from "@/lib/actions/alerts.actions";
import { toast } from "sonner";

interface AlertCardProps {
    alert: AlertItem;
}

const AlertCard = ({ alert }: AlertCardProps) => {
    const isAbove = alert.condition === 'ABOVE';

    const handleDelete = async () => {
        try {
            await removeStockAlert({
                symbol: alert.symbol,
                targetPrice: alert.targetPrice,
                condition: alert.condition
            });
            toast.success("Alert removed successfully");
        } catch (error) {
            console.error("Failed to remove alert:", error);
            toast.error("Failed to remove alert");
        }
    };

    return (
        <Card className="flex items-stretch overflow-hidden border-none bg-transparent">
            {/* Left Section: TradingView Symbol Info Widget */}
            <div className="h-[100px] flex-1 overflow-hidden rounded-l-lg">
                <TradingViewWidget
                    scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
                    config={SINGLE_TICKER_WIDGET_CONFIG(alert.symbol)}
                    height={100}
                    className="!w-full"
                />
            </div>

            {/* Right Section: Custom Footer */}
            <div className="flex w-[50%] shrink-0 items-center justify-between px-5 rounded-r-lg ml-px bg-[#141414] border-l-3 border-l-white-500">
                <div className="flex flex-col mr-4">
                    <span className="text-gray-400 text-m font-medium">Alert:</span>
                    <div className={`font-bold text-m mt-0.5 ${isAbove ? "text-[#0b9981]" : "text-[#f23646]"}`}>
                        {isAbove ? "Price > " : "Price < "}
                        ${alert.targetPrice.toFixed(2)}
                    </div>
                </div>

                <button
                    onClick={handleDelete}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    aria-label="Delete alert"
                >
                    <Trash2 className="h-5 w-5" />
                </button>
            </div>
        </Card>
    );
};

export default AlertCard;
