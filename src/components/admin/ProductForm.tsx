import React, { useState } from 'react';

interface ProductFormProps {
    product?: {
        _id?: string;
        name: string;
        price: number;
        description?: string;
    };
    onSuccess: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSuccess }) => {
    const [name, setName] = useState(product?.name || '');
    const [price, setPrice] = useState(product?.price || 0);
    const [description, setDescription] = useState(product?.description || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isEdit = Boolean(product?._id);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(
                isEdit ? `/api/products/${product!._id}` : '/api/products',
                {
                    method: isEdit ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN}`, // frontendda tokenni environment o‘zgaruvchisi orqali uzatamiz
                    },
                    body: JSON.stringify({ name, price, description }),
                }
            );

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Something went wrong');
            }

            onSuccess();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <div>
                <label>Mahsulot nomi:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                />
            </div>
            <div>
                <label>Narxi:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                    disabled={loading}
                    min={0}
                    step={0.01}
                />
            </div>
            <div>
                <label>Tavsifi:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={loading}
                />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit" disabled={loading}>
                {loading ? 'Yuklanmoqda...' : isEdit ? 'Tahrirlash' : 'Qo‘shish'}
            </button>
        </form>
    );
};

export default ProductForm;
