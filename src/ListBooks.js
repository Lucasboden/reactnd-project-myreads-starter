import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
	static propTypes = {
	books: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}
	state = {
		query:''
	}
	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query:''})
	}

	render(){
		const {books, onDeleteContact} = 	this.props
		const {query} = this.state
		let showingBooks
		if(query) {
			const match = new RegExp(escapeRegExp(query),'i')
			showingBooks = books.filter((book) => match.test(book.name))
		}
		else{
			showingBooks = books
		}
		showingBooks.sort(sortBy('name'))
		return(
			<div className='list-books'>
				<div className='list-books-top'>
					<input 
					className='search-books-query'
					type='text'
					placeholder='Search books'
					value={query}
					onChange={(event) => this.updateQuery(event.target.value)}/>
					<Link
						to='/Add'
						className='add-books'
						>
						Add Book</Link>
				</div>
				{showingContacts.length !== contacts.length && (
					<div className='showing-contacts'>
						<span>Now showing {showingContacts.length} of {contacts.length}</span>
						<button onClick={this.clearQuery}>Show all</button>
					</div>
					)}
				<ol className='contact-list'>
					{showingContacts.map((contact) => (
						<li key={contact.id} className='contact-list-item'>
						<div className='contact-avatar' style={{
							backgroundImage: `url(${contact.avatarURL})`
						}}/>
						<div className='contact-details'>
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button onClick={() => onDeleteContact(contact)} className='contact-remove'>
							Remove
						</button>
						</li>
					))}
					
				</ol>
			</div>
			)
	}
}

export default ListContacts