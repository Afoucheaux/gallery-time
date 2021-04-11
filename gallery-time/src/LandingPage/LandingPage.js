import './LandingPage.css'
import { geoLocatePost, citySearch, photoSearch } from '../apiCalls'
import { useEffect, useState } from 'react';
import {denverGeoLocation, denverNearbySearch, denverImg} from '../MockData/MockData.js'
import { Link } from 'react-router-dom';

function LandingPage () {

  const [city, setCity] = useState()
  const [photo, setPhoto] = useState()

// mock data stuff
  useEffect(() => {
    setCity(denverNearbySearch.results[0]);
  }, [])

  useEffect(() => {
    setPhoto(denverImg);
  },[city])

// To use in production
  // useEffect(() => {
  //   if (city === undefined) {
  //     geoLocatePost()
  //     .then(geoData => citySearch(geoData.location.lat, geoData.location.lng))
  //     .then(city => setCity(city.results[0]))
  //   }
  // }, [])

//  To use in production
  // useEffect(() => {
  //   if (city !== undefined) {
  //     photoSearch(city.photos[0].photo_reference)
  //     .then(data => setPhoto(data))
  //   }
  // },[city])

  return (
    <>
      {city && <p>{city.name}</p>}
      {photo && <img src={photo}/>}
      {city && <Link className='to-galleries' to={`/${city.name}`}>See Galleries</Link>}
    </>
  )

}

export default LandingPage
