import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { FaSearch } from "react-icons/fa";
import vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

function Favourites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [FavsearchKey, setFavSearchKey] = useState('');
  
    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteMovies(favorites);
    }, []);
  
    const refreshFavorites = (updatedFavorites) => {
      setFavoriteMovies(updatedFavorites);
    };
  
    const filteredMovies = FavsearchKey
      ? favoriteMovies.filter(movie =>
          movie.title.toLowerCase().includes(FavsearchKey.toLowerCase())
        )
      : favoriteMovies;
  return (
   <>
    <div className="headerDiv">
        <Header />
      </div>
      <div className="headerDiv d-flex justify-content-between ">
        <div className='headf ps-lg-4 pb-3' style={{ display: 'flex', alignItems: 'center' }}>
        
          <Link to='/'>
            <button className="btnBack me-3">
            <i class="fa-solid fa-chevron-left"></i>
            </button>
          </Link>
          <div className='Myfont ms-2'><b>My Favourites</b></div>
        </div>

        <div className="favinput-wrapper">
          <FaSearch id="search-icon" style={{ width: '40px' }} />
          <input
            className='favinput ms-2'
            placeholder="Search from favourites"
            onChange={(e) => setFavSearchKey(e.target.value)}
          />
        </div>
      </div>
      <Container className='mt-3'>
        <Row>
          {filteredMovies.length > 0 ? 
            filteredMovies.map((movie, index) => (
              <Col className='mb-5' sm={12} md={6} lg={3} key={index}>
                <MovieCard displayData={movie} refreshFavorites={refreshFavorites} />
              </Col>
            )) : 
            <div className="text-danger fw-bolder"></div>
          }
        </Row>
      </Container>
   </>
  )
}

export default Favourites