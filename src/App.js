
import React from 'react'
import axios from 'axios';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Wether from './compo/Wether';
import Movies from './compo/Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      whether: [],
      showData: false,
      showmap: false,
      errorshow: false,
      citymoviesdata: []

    }

  }
  renderfun =  (event) => {
    event.preventDefault();
    this.locationfun(event)
    this.weatherfun()
    this.moviesfun()
  }

  //-----------------------------------------------------------------location
  locationfun=async(event)=>{
    await this.setState({
      searchCity: this.state.searchCity = event.target.city.value
    })

    let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`



    try {
      let resultData = await axios.get(locurl)
      console.log('llllll', resultData)

      this.setState({
        cityData: resultData.data[0],
        showData: true,
        showmap: true,
        errorshow: false,
      })
    }
    catch {
      this.setState({
        errorshow: true,
        showData: false,
        showmap: false,
      })
    }

  }
  //---------------------------------------------------------------weather
  weatherfun = async () => {
    let weatherurl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.searchCity}&format=json`;
    let resultData = await axios.get(weatherurl)
    // console.log('kkkkkkkkk',resultData)
    await this.setState({
      whether: resultData.data,

    })
  }
  //-----------------------------------------------------movies
  moviesfun = async () => {
    let moviesurl = `${process.env.REACT_APP_SERVER_LINK}/movies?cityname=${this.state.searchCity}&format=json`;
    let moviesresultData = await axios.get(moviesurl)
    console.log('kkkkkkkkk', moviesresultData.data)
    await this.setState({
      citymoviesdata: moviesresultData.data,

    })

  }
  //------------------------------------------------------------------------------render
  render() {
    return (
      <div>
        <h2>City Explorer</h2>
        <form onSubmit={this.renderfun}>
          <label > enter city</label>
          <input type="text" placeholder='enter city' name='city' />
          <button> submite </button>
        </form>

        <Card style={{ width: '18rem' }}>
          <Card.Body  >
            <Card.Title> {this.state.showData &&
              <p> {this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>

            }</Card.Title>
            <Card.Title> {this.state.errorshow &&
              <p> you have some error </p>

            }</Card.Title>

            {this.state.showmap &&
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />
            }
          </Card.Body>

        </Card>
        <Wether whether={this.state.whether} />
        <Movies citymoviesdata={this.state.citymoviesdata} />

      </div>
    )
  }
}

export default App

