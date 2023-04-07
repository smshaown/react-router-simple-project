import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Bool1 from './Bool1';
import LoadingSpier from './LoadingSpier';


const Books = () => {

    const navigation = useNavigate();
    if(navigation.state === 'loading'){
        return <LoadingSpier></LoadingSpier>
    }

    const {books} = useLoaderData();
    console.log(books)
    return (
        <div className='my-container'>
        <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
            {
                books.map(book => (                
                <Bool1 key={book.isbn13} book={book}></Bool1>
                ))
            }
             
        </div>
    </div>
    );
};

export default Books;