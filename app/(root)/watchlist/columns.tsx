"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
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
  },
  {
    accessorKey: "Symbol",
    header: "Symbol",
  },
  {
    accessorKey: "Price",
    header: "Price",
  },
  {
    accessorKey: "Change",
    header: "Change",
  },
  {
    accessorKey: "MarketCap",
    header: "MarketCap",
  },
  {
    accessorKey: "peRatio",
    header: "PE Ratio",
  },
]