import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './BookTemplate.css'

const BookTemplate = ({imageUrl , title , author}) => {
    return (
        <div className="p-2 my-flex-item">
            <div className="card">
                <img className="card-img-top" src={imageUrl}/>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <div className="meta">
                        <a href="#">{author}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTemplate