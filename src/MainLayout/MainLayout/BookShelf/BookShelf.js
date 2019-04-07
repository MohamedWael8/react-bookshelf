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
            books :
            [
                {
                    imageUrl:"https://upload.wikimedia.org/wikipedia/en/5/55/AppaloosaNovel.jpg",
                    title:"Appaloosa",
                    author:"Robert B. Parker"
                }
                ,
                {
                    imageUrl:"https://upload.wikimedia.org/wikipedia/en/d/da/ResolutionNovel.jpg",
                    title:"Resolution",
                    author:"Robert B. Parker"
                }
                ,
                {
                    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51RTcFJZAJL._SX282_BO1,204,203,200_.jpg",
                    title:"Brimstone",
                    author:"Robert B. Parker"
                }
                ,
                {
                    imageUrl:"https://upload.wikimedia.org/wikipedia/en/8/85/Graceling_cover.png",
                    title:"Graceling",
                    author:"Kristen Cashore"
                }
                ,
                {
                    imageUrl:"https://upload.wikimedia.org/wikipedia/en/b/bf/Fire_cover.png",
                    title:"Fire",
                    author:"Kristen Cashore"
                }
                ,
                {
                    imageUrl:"https://images.gr-assets.com/books/1331532639l/7962513.jpg",
                    title:"Bitterblue",
                    author:"Kristen Cashore"
                }
            ]
        }
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