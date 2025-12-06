"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatMarketCapValue, formatPrice } from "@/lib/utils"
import { AlertCell } from "./alert-cell"

export type WatchListRow = {
  Company: string;
  Symbol: string;
  Price: number;
  Change: number;
  MarketCap: number;
  peRatio: number;
}

export const columns: ColumnDef<WatchListRow>[] = [
  {
    accessorKey: "Company",
    header: "Company",
    cell: ({ row }) => <div className="font-medium">{row.getValue("Company")}</div>
  },
  {
    accessorKey: "Symbol",
    header: "Symbol",
    cell: ({ row }) => <div className="font-medium">{row.getValue("Symbol")}</div>
  },
  {
    accessorKey: "Price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => {
      return <div className="text-left font-medium">{formatPrice(row.getValue("Price"))}</div>
    }
  },
  {
    accessorKey: "Change",
    header: () => <div className="text-left">Change</div>,
    cell: ({ row }) => {
      const change = parseFloat(row.getValue("Change"))
      const isPositive = change > 0
      return (
        <div className={`text-left font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "+" : ""}{change.toFixed(2)}%
        </div>
      )
    }
  },
  {
    accessorKey: "MarketCap",
    header: () => <div className="text-left">Market Cap</div>,
    cell: ({ row }) => {
      return <div className="text-left">{formatMarketCapValue(row.getValue("MarketCap"))}</div>
    }
  },
  {
    accessorKey: "peRatio",
    header: () => <div className="text-left">P/E Ratio</div>,
    cell: ({ row }) => {
      const val = row.getValue("peRatio") as number
      return <div className="text-left">{val ? val.toFixed(1) : "N/A"}</div>
    }
  },
  {
    id: "alert",
    header: () => <div className="text-center">Add Alert</div>,
    cell: ({ row }) => <AlertCell symbol={row.original.Symbol} />
  },
]
