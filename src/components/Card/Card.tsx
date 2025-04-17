import React from "react";
import "./Card.css";


interface Props {
    image: string;
    title: string;
    author: string;
};


export const Card = ({ image, title, author }: Props) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error fuga, suscipit ut doloribus quae consectetur adipisci iste, qui eos sunt soluta maxime exercitationem quaerat architecto. Libero rem reprehenderit consequatur consectetur.    
            </p>
            <h5>{author}</h5>
            </div>
        </div>
    )
}