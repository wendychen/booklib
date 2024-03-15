import React from 'react'
import { Link } from 'react-router-dom';
import './BookList.css';

const summaryBlock = (v1, v2, v3, v4) => {
	return (
		<div>
			<span className={v1}>{v2}: </span>
			<span className={v3}>{v4}</span>
		</div>
	);
}

const Book = (book) => {
	const author = (book.author === undefined)? '-': book.author.join(', ');
	const classname_edition_count = '';
	const classname_author = 'book-item-info-item edition-count fs-15';	
	
	return (
		<div className='book-item flex flex-column flex-sb'>
			
			<div className='book-item-img'>
				<Link to={`/book/${book.id}`}{...book}>
					<img src={book.cover_img} alt='cover' />
				</Link>
			</div>

			<div className='book-item-info text-center'>
				<Link to={`/book/${book.id}`}{...book}>
					<div className='book-item-info-item title fw-7 fs-18'>
						<span>{book.title}</span>
					</div> 
				</Link>

				{summaryBlock('book-item-info-item author fs-15 text-capitalize fw-7',
											'Author',
											'book-item-info-item author fs-15',
											author)}

				{summaryBlock('book-item-info-item edition-count fs-15 text-capitalize fw-7',
											'Total Editions',
											'book-item-info-item edition-count fs-15',
											book.edition_count)}

				{summaryBlock('book-item-info-item publish-year fs-15 text-capitalize fw-7',
											'First Publish Year',
											'book-item-info-item publish-year fs-15',
											book.first_publish_year)}

			</div>
		</div>
	)
}

export default Book;
