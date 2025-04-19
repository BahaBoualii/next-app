"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ProductResponse } from "../types/product"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../../components/ui/button"

export const columns: ColumnDef<ProductResponse>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
        return (
          <Button
            variant="secondary"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price (EUR)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
]
