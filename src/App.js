
import React from 'react'
import axios from 'axios';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      showData: false,
      showmap :false
      
    }

  }
  getlocation = async (event) => {
    event.preventDefault();
    await this.setState({
       searchCity:this.state.searchCity= event.target.city.value
    })
 
    console.log('llllll',event.target.city.value)
   let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`

   
    
    let resultData =  await axios.get(locurl)
    console.log('llllll', resultData)

    this.setState({
      cityData:resultData.data[0],
      showData: true,
      showmap :true
    })
    console.log('llllll', this.state.cityData)
  

  }
  render() {
    return (
      <div>
       <h2>City Explorer</h2>
       <form  onSubmit={this.getlocation}>
         <label > enter city</label>
         <input type="text"  placeholder='enter city' name='city' />
         <button> submite </button>
         {/* {this.state.showData &&
            <p> {this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
            
          } */}
          {/* {this.state.showmap && 
             <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
          } */}
          
       </form>

        <Card style={{ width: '18rem' }}>

<Card.Body  >
  <Card.Title> {this.state.showData &&
            <p> {this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
            
          }</Card.Title>
 
 
  {this.state.showmap &&
    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />
  }

</Card.Body>
</Card>
      </div>
    )
  }
}

export default App

