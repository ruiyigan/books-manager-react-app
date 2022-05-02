import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateBookButton = () => {
    return (
        <Link to='/books/create'>
            <Button type='primary'>
                Add New
            </Button>
        </Link>
    )
}

export default CreateBookButton