import React, { Component } from 'react'
import './MainLayout.css'
import BookShelf from './BookShelf/BookShelf'

class MainLayout extends Component {
    render() {
        return (
            <div>
                <div class="header">
                    <h1 class="logo">Shop Book & Bail</h1>
                    <div class="header-right">
                        <a class="active" href="#home">Search</a>
                    </div>
                </div>
                <BookShelf shelfTitle="Currently Reading" books={this.props.books.currentlyReading} />
                <BookShelf shelfTitle="Want To Read" books={this.props.books.wantToRead} />
                <BookShelf shelfTitle="Read" books={this.props.books.read} />
            </div>
        )
    }
}

export default MainLayout