'use client'
import React, { useState } from 'react';
import { AddProductForm } from './AddProductForm';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface AddProductButtonProps {
    onProductAdded: (product: Product) => void;
}

export const AddProductButton: React.FC<AddProductButtonProps> = ({ onProductAdded }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                Add Product
            </button>

            {isOpen && (
                <AddProductForm
                    onClose={() => setIsOpen(false)}
                    onAddProduct={onProductAdded}
                />
            )}
        </>
    );
}; 