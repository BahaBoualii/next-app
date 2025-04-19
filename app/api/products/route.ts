import { NextResponse } from "next/server";
import { products } from "../../mocks/products";

async function GET() {
    try {
        return NextResponse.json(products.map((product, index) => ({
            id: index,
            name: product.name,
            price: product.price,
            description: product.description
        })));
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products, " + error }, { status: 500 });
    }
}

export { GET };