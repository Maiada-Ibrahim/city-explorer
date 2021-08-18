
import React from 'react'
import axios from 'axios';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Wether from './compo/Wether';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      whether:[],
      showData: false,
      showmap :false ,
      errorshow:false,
      wethershow:false
      
    }

  }
  getlocation = async (event) => {
    event.preventDefault();
    await this.setState({
       searchCity:this.state.searchCity= event.target.city.value
    })
 
    console.log('llllll',event.target.city.value)
   let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`

   
    
   try{let resultData =  await axios.get(locurl)
    console.log('llllll', resultData)

    this.setState({
      cityData:resultData.data[0],
      showData: true,
      showmap :true,
      errorshow:false,
    })
    // console.log('llllll', this.state.cityData)
   }
   catch{
    this.setState({
      errorshow:true,
      showData: false,
      showmap :false,
    })

    
    
   }
   console.log('llllkokojkokjl')
    let weatherurl = `${process.env.REACT_APP_SERVER_LINK}/whethertoday?city=${this.state.searchCity}&format=json`;
    let resultData =  await axios.get(weatherurl)
    console.log('kkkkkkkkk',resultData)
    await this.setState({
      whether:resultData.data,
      wethershow: true,
    })
    console.log('kkkkkkkkk',this.state.whether)
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
  <Card.Title> {this.state.errorshow &&
            <p> you have some error </p>
            
          }</Card.Title>
 
  {this.state.showmap &&
    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />
  }

{/* <Card.Title> {this.state.wethershow &&
           <p>whether: {this.state.whether.data[0].datetime}    </p>
            
          }</Card.Title> */}


          </Card.Body>

        </Card>
<Wether whether = {this.state.whether} />
      </div>
    )
  }
}

export default App

