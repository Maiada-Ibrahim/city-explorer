
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      showData: false
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
      showData: true
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
         {this.state.showData &&
            <p> {this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
          }

       </form>
      </div>
    )
  }
}

export default App

