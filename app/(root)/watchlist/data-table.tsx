"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Star } from "lucide-react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { WatchListRow } from "./columns"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    onRemove?: (symbol: string) => void
}

export function DataTable<TData, TValue>({
    columns,
    data,
    onRemove,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="rounded-lg border border-gray-600 bg-gray-800 overflow-hidden">
            <Table className="w-full">
                <TableHeader className="bg-gray-700">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-gray-600 hover:bg-gray-700">
                            <TableHead className="w-[50px] text-gray-400"></TableHead>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="text-gray-400 font-medium h-12 border-x border-gray-600 first:border-l-0 last:border-r-0">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            // Safe cast since we know this table is used for WatchListRow data in this context
                            const symbol = (row.original as unknown as WatchListRow).Symbol
                            
                            return (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="group border-b border-gray-600 hover:bg-gray-700/50 hover:border-gray-500 transition-colors data-[state=selected]:bg-gray-700"
                                >
                                    <TableCell className="py-3 pl-4 border-r border-gray-600 group-hover:border-gray-500 transition-colors">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                onRemove?.(symbol)
                                            }}
                                            className="group flex items-center justify-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-700 hover:text-yellow-400"
                                        >
                                            <Star
                                                className="h-5 w-5 text-yellow-400 fill-current"
                                            />
                                        </button>
                                    </TableCell>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="text-gray-100 font-medium py-3 border-r border-gray-600 last:border-r-0 group-hover:border-gray-500 transition-colors">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow className="hover:bg-transparent border-gray-600">
                            <TableCell colSpan={columns.length + 1} className="h-24 text-center text-gray-500">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
