import React from 'react'
import './SingleContent.css';


export default function SingleContent({
    id,
    title,
    poster,
    media_type,
    date }) {


    var finalDate = date.toString().split("-").reverse().join("-");
    // console.log(finalDate);
    // console.log(newDate);
    const imgURL = "https://image.tmdb.org/t/p/w300";
    return (
        <>
            <div className="media">
                <img src={`${imgURL}/${poster}`} alt="img" />
                <b className="title">{title}</b>
                <span className="subTitle">
                    {media_type === "tv" ? "TV Series" : "Movie"}
                    <span className="subTitle">{finalDate}</span>
                </span>
            </div>
        </>
    )
}
