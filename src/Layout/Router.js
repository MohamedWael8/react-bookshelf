import React, { Component } from 'react'
import { BrowserRouter , Route, Redirect , Switch } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout'

class Router extends Component {
        state = {
            books : {
                currentlyReading : [
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
                ],
                wantToRead : [
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
                ] ,
                read : [
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
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/main" />
                        </Route>
                        <Route path="/main" render={(props) => <MainLayout {...props} books={this.state.books} /> }/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router