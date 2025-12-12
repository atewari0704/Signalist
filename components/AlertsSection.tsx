"use client";

import React, { useEffect, useState } from "react";
import { getStocksWithAlerts } from "@/lib/actions/alerts.actions";
import { AlertItem } from "@/database/models/alert.model";
import AlertCard from "./AlertCard";
import { Loader2 } from "lucide-react";

const AlertsSection = () => {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                setLoading(true);
                const data = await getStocksWithAlerts();
                setAlerts(data);
            } catch (err) {
                console.error("Failed to fetch alerts:", err);
                setError("Failed to load alerts");
            } finally {
                setLoading(false);
            }
        };

        fetchAlerts();
    }, []);

    if (loading) {
        return (
            <div className="h-full w-full flex items-center justify-center border rounded-xl p-4 bg-zinc-900/20 border-zinc-800">
                <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-full w-full flex items-center justify-center border rounded-xl p-4 bg-zinc-900/20 border-zinc-800 text-red-500">
                {error}
            </div>
        );
    }

    if (alerts.length === 0) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center border rounded-xl p-4 bg-zinc-900/20 border-zinc-800 text-zinc-400">
                <p>No active alerts</p>
            </div>
        );
    }

    return (
        <div className="h-[600px] w-full  border-zinc-800 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            <div className="grid grid-cols-1 gap-4">
                {alerts.map((alert, index) => (
                    <AlertCard key={alert._id || index} alert={alert} />
                ))}
            </div>
        </div>
    );
};

export default AlertsSection;
