'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
interface Props {
    params: { id: string };
}
export default function EditProductPage({ params }: Props) {
    const router = useRouter();
    const [name, setName] = useState('');

    const handleSave = () => {
        alert(`yangilandi: ${name}`);
        router.push('/admin/products');
    };
    return (
        <>
            <h1>Mahsulotni tahrirlash</h1>
            <input
                type="text"
                placeholder="Mahsulot nomi"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSave}>Saqlash</button>
        </>
    );
}
