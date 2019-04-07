import React, { Component } from 'react';
import BookShelf from './MainLayout/MainLayout/BookShelf/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf shelfTitle="Currently Reading"/>
        <BookShelf shelfTitle="Want to Read"/>
        <BookShelf shelfTitle="Read"/>
      </div>
    );
  }
}

export default App;
