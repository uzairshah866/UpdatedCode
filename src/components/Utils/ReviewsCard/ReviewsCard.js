import React from 'react';
import './ReviewsCard.css'
const ReviewsCard = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <img class="card-img-top" src="https://www.w3schools.com/w3images/avatar6.png" alt="Profile Img" />
                <h4 class="card-title   mt-4">{props.name}</h4>
                <h6 class="card-text"> {props.category} </h6>
                <p class="cardtext py-3">"{props.review}"</p>
                <a href="More Srories" class="reviewLink">See More Stories</a>
            </div>
        </div>
    );
}

export default ReviewsCard;