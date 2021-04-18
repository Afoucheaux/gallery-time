import './LandingPage.css'
import { citySearch, geoLocatePost, photoSearch } from '../apiCalls'
import { useEffect, useState } from 'react';
import { denverNearbySearch, denverImg}  from '../MockData/MockData.js'
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import OffLine from '../OffLine/OffLine'
import Loading from '../Loading/Loading.js'

function LandingPage ({ geoLocation }) {

  const [city, setCity] = useState()
  const [loading, setLoading] = useState()
  const [display, setDisplay] = useState()

  // useEffect(() => {
  //   setCity(denverNearbySearch.results[0]);
  // }, [])

  // useEffect(() => {
  //   setPhoto(denverImg);
  // },[city])

  useEffect(() => {
    setLoading(true)
    if (city === undefined) {
     citySearch(geoLocation.location.lat, geoLocation.location.lng)
     .then(city => setCity(city.results[0]))
    }
  }, [])

  useEffect(() => {
    if (city !== undefined) {
      photoSearch(city.photos[0].photo_reference)
      .then(photo => setDisplay(makeCityDisplay(photo, city)))
    }
    setLoading(false)
  },[city])

  const makeCityDisplay = (currentPhoto, currentCity) => {

    return (
      <section className='landing' data-cy="landing">
        <Header />
        {/* {!photo && loading && <Loading/>}
        {!photo && !loading && <OffLine/>} */}
        <article className='city-container'>
          <p className='city-name'data-cy="city-name">You are currently in {currentCity.name}, time for culture!</p>
        </article>
        <article className='img-container'>
          <img className='city-img'data-cy="city-img"src={currentPhoto}/>
        </article>
        <article className='galleries'>
          {city && <Link data-cy="to-galleries" className='landing-buttons' to={`/city/${currentCity.name}`}>See Galleries</Link>}
          <Link to='/favorites' className='landing-buttons' data-cy='see-favorites-landing'>See Favorites</Link>
        </article>
      </section>
    )
  }

  return ( 
    <>
      {display}
    </>
  )

}

export default LandingPage


// <section className='landing' data-cy="landing">
//       <Header />
//       {/* {!photo && loading && <Loading/>}
//       {!photo && !loading && <OffLine/>} */}
//       <article className='city-container'>
//         {city && <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>}
//       </article>
//       <article className='img-container'>
//         {photo && <img className='city-img'data-cy="city-img"src={photo}/>}
        
//       </article>
//       <article className='galleries'>
//         {city && <Link data-cy="to-galleries" className='landing-buttons' to={`/city/${city.name}`}>See Galleries</Link>}
//         <Link to='/favorites' className='landing-buttons' data-cy='see-favorites-landing'>See Favorites</Link>
//       </article>
      
//     </section>