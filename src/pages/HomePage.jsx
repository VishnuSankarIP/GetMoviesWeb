
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../index.css';
import play from '../assets/Play.png';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { getAllMoviesAPI, getSearchMoviesAPI } from '../services/allAPI';

function HomePage() {
    const [allMovies, setAllMovies] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const getAllMovies = async () => {

        try {
            const result = await getAllMoviesAPI();
            console.log(result);
            if (result.status === 200) {
                setAllMovies(result.data);
            }
        }
        catch (err) {
            console.error("Error fetching comments:", err);

        }
    };
    const searchMovies = async (key) => {
        try {
            const result = await getSearchMoviesAPI(key);
            if (result.status === 200) {
                setAllMovies(result.data);
            }
        } catch (err) {
            console.error("Error searching movies:", err);
        }
    };


    useEffect(() => {
        if (searchKey) {
            searchMovies(searchKey);
        } else {
            getAllMovies();
        }
    }, [searchKey]);

    const isSearching = searchKey.length > 0;
  return (
   <>
   <header>
                <Header onSearch={setSearchKey} insideHome />
            </header>
            <main>
            {!isSearching && (
                <Container>
                    <div className="hero-image">
                        <div className="hero-content">
                            <div className="hero-content-inner">
                                <h2>Spider-Man : Into <br />The Spider Verse</h2>
                                <p>Spider-Man: Across the Spider-Verse," now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation</p>
                                <button className="watch-trailer-button"><img className='me-2' src={play} alt="Play" /><b>Watch Trailer</b></button>
                            </div>
                        </div>
                    </div>
                </Container>
                 )}

                <div className="row">
                    <div className="col">
                        <h2 className="headl pt-lg-3 ps-lg-5 pb-3">{isSearching ? 'Search ' : 'Movies'} </h2>
                    </div>
  {
    isSearching &&(<div>
        <p className='headl pt-lg-2 ps-lg-5'>{allMovies.length} results found</p>
    </div>
)
  }
                    

                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 ">
                        <Row>
                            {
                                
                                allMovies.map(movie => (<Col className='mb-5' sm={12} md={6} lg={3} key={movie.id} >
                                    <MovieCard displayData={movie} />
                                </Col>))
                            }


                            {/* <div className="text-danger fw-bolder">No content found</div> */}

                        </Row>
                    </div>
                    <div className="col-lg-1"></div>

                </div>
            </main>
   </>
  )
}

export default HomePage