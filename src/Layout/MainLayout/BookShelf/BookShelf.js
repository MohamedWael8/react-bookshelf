import React, { Component } from 'react'
import BookTemplate from '../../CommonComponents/Book/BookTemplate.js'
import 'bootstrap/dist/css/bootstrap.css'
class BookShelf extends Component 
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            books : []
        }
    }

    componentDidMount()
    {
        this.setState({books : this.props.books})
    }
    
    render () {
        return (
            <div>
                <h2>{this.props.shelfTitle}</h2>
                <div className="d-flex flex-row my-flex-container" id="movie-list">
                    {this.state.books.map(
                        (book , i) => <BookTemplate 
                                        key={i}
                                        imageUrl={book.imageUrl}
                                        title={book.title}
                                        author={book.author}
                                        />
                    )}
                </div>
                <hr/>
            </div>
            
        )
    }
}

export default BookShelf