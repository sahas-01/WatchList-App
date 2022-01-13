import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../Components/SingleContent/SingleContent';
import { Typography } from '@material-ui/core';
import './Trending.css';
import BasicPagination from '../../Components/Pagination/BasicPagination';


export default function Trending() {
    const [trending, setTrending] = useState('');
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`).then((response) => {
            setTrending(response.data.results);
        });
    }, [page]);
    console.log(trending);
    return (
        <>
            <div>
                <Typography variant="h3" component="h1" style={{ color: 'white' }}>
                    Trending
                </Typography>
                <div className="trending">
                    {
                        trending && trending.map((t) => (
                            <SingleContent
                                key={t.id}
                                id={t.id}
                                title={t.title || t.name}
                                poster={t.poster_path}
                                media_type={t.media_type}
                                date={t.release_date} />
                        ))
                    }
                </div>

            </div>
            <BasicPagination setPage={setPage} />
        </>
    )
}
