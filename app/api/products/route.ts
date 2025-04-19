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

async function POST(request: Request) {
    const body = await request.json();
    const product = {
        id: products.length,
        name: body.name,
        price: body.price,
        description: body.description
    }
    products.push(product);
    return NextResponse.json(product);
}

export { GET, POST };