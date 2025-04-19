"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ProductResponse } from "../types/product"

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
    header: "Price (EUR)",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
]
