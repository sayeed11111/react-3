import React, { useEffect, useState } from 'react'
import { API } from '../data/data'

const Main = ({ search, onAddToCart }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(API)
            .then((res) => {
                if (!res.ok) throw new Error("Serverdan ma'lumot olib bo'lmadi")
                return res.json()
            })
            .then((data) => setProducts(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    const filtered = products.filter((item) =>
        item.name?.toLowerCase().includes(search.trim().toLowerCase())
    )

    return (
        <main className='flex-1 p-5 max-w-7xl w-full mx-auto'>
            <h1 className='text-3xl font-bold mb-8'>Products</h1>

            {loading && <p>Yuklanmoqda...</p>}
           
            {!loading && !error && filtered.length === 0 && (
                <p className='text-gray-500'>Hech narsa topilmadi.</p>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className='border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition flex flex-col'
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className='w-full h-48 object-contain'
                        />

                        <h2 className='text-lg font-bold mt-4'>{item.name}</h2>

                        <p className='text-red-500 font-bold text-xl mt-2'>${item.price}</p>

                        {/* API'da maydon "reting" yoki "rating" bo'lishi mumkin */}
                        <p className='text-yellow-500 mt-2'>⭐ {item.rating ?? item.reting}</p>

                        <button
                            onClick={() => onAddToCart(item)}
                            className='w-full bg-black text-white py-2 rounded-lg mt-auto hover:bg-gray-700 transition'
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main