import React, { useEffect } from 'react'
import booksService from '../../services/booksService'
import {useParams, useHistory} from 'react-router-dom'
import DescriptionsItem from 'antd/lib/descriptions/Item';
import { Descriptions } from 'antd';
import { PageHeader } from 'antd';

const Book = ({books, setBooks}) => {
    const history = useHistory()
    useEffect(() => {
        booksService
            .getAll()
            .then(books => {
                setBooks(books)
            })
    }, [setBooks])
    // obtaining isbn to get specific book
    const isbn = useParams().isbn
    const book = books.find(book => book.isbn === isbn)
    // conditional statement to prevent error since book is undefined before useEffect fires
    if (book !== undefined) {
        return (
            <div>
                <PageHeader 
                    onBack={() => history.goBack()}
                    title='Book Information' 
                />
                <Descriptions 
                    style={{padding: '2%'}}
                    title={book.title}
                    bordered
                    column={{ sm: 1, xs: 1 }}
                >
                    <DescriptionsItem label='Title'>
                        {book.title}
                    </DescriptionsItem>
                    <DescriptionsItem label='Genre'>
                        {book.genre}
                    </DescriptionsItem>
                    <DescriptionsItem label='ISBN'>
                        {book.isbn}
                    </DescriptionsItem>
                    <DescriptionsItem label='Summary'>
                        {book.summary}
                    </DescriptionsItem>
                </Descriptions>

            </div>
        )
    }
    return null;
}

export default Book