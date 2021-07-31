import React from 'react'
import {useParams} from 'react-router-dom'

export default function Products() {
    const { id } = useParams();

    // axios.get('https')
    return (
        <div>
            Nike shoes {id}
        </div>
    )
}
