import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ProductResponse } from "../types/product";

async function getProducts(): Promise<ProductResponse[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}
  
const ProductsPage = async () => {
    const data = await getProducts();
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default ProductsPage;