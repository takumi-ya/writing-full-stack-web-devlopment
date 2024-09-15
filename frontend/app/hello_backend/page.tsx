'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
axios.defaults.baseURL = 'http://localhost:8000'

export default function Page() {
    const [data, setData] = useState({ message: '' })

    useEffect(() => {
        axios.get('/api/hello/backend/')
            .then((res) => res.data)
            .then((data) => {
                setData(data)
            })
    }, [])

    return <div>hello, {data.message}!</div>
}