import React, { Component} from 'react';
import {Route} from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact.js'
import * as ContactsApi from './utils/ContactsAPI'
class App extends Component {
	state = {
		books:[]
	}
	componentDidMount(){
		ContactsApi.getAll().then((contacts) => {
			this.setState({contacts: contacts})
		})
	}
	removeContact = (contact) =>{
		this.setState((state) => ({
			contacts :state.contacts.filter((c) => c.id !== contact.id)
		}))

		ContactsApi.remove(contact)
	}

	createBook(book) {
		ContactsApi.create(contact).then(contact => {
			this.setState(state => ({
				contacts:state.contacts.concat([contact])
			}))
		})
	}
  render() {
    return (
      <div>
      	<Route exact path="/" render={() => (
        <ListBooks
        books={this.state.books} 
        onDeleteBook = {this.removeBook}
        />
        )}/>
        <Route path="/add" render={({history}) => (
        	<SearchBook 
        		onBookAdd={(book) => {
					this.createBook(book)
					history.push('/')
				}}
    		/>
    	)}/>
      </div>
    )
  }
}

export default App;
