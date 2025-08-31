import React from 'react'
import Link from 'next/link'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-[100vh]'>
            <nav className='w-3xs bg-gray-200 text-white p-5'>
                <h2>Hello Admin</h2>
                <ul>
                    <li><Link href={"/admin"}>Dashboard</Link></li>
                    <li><Link href={"/admin/products"}>Products</Link></li>
                    <li><Link href={"/admin/orders"}>Orders</Link></li>
                </ul>
            </nav>

            <main className='flex-1 p-5'>
                {children}
            </main>
        </div>
    )
}

export default AdminLayout
