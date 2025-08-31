// src/app/admin/products/page.tsx

import Link from 'next/link';

const products = [
    { id: '1', name: 'Olma' },
    { id: '2', name: 'Banan' },
    { id: '3', name: 'Anor' },
];

export default function ProductsPage() {
    return (
        <>
            <h1>Mahsulotlar</h1>
            <Link href="/admin/products/new">Yangi mahsulot qo‘shish</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/admin/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
