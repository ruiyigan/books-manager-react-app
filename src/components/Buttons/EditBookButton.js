import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const EditBookButton = ({book}) => {
    return (
        <Link to={`/books/edit/${book.isbn}`}>
            <Button type='primary'>
                Edit
            </Button>
        </Link>
    )
}

export default EditBookButton