'use client'

import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ProductResponse } from "../types/product";
import { AddProductButton } from "../components/AddProductButton";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductResponse[]>([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductAdded = (newProduct: ProductResponse) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Product Management</h1>
                <AddProductButton onProductAdded={handleProductAdded} />
            </div>
            <DataTable columns={columns} data={products} />
        </div>
    )
}

export default ProductsPage;