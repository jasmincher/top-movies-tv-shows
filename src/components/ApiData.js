import React from 'react';
import axios from 'axios'
import Card from './Card'
import '../css/ApiData.css'
import config from '../config'


class ApiData extends React.Component {
  state = {
    items: [],
    found: false
  }
  //here we are initiating the API 
  componentDidMount = () => {
    this.results();
  }

  results = () => {
   

    var base_url = 'https://api.themoviedb.org/3/account/'
    var api_key = config.API_KEY;
    var session_id = config.SESSION_ID;
    var account_id = config.ACCOUNT_ID;



    let api_url = base_url + account_id + `/favorite/${this.props.dataType}?api_key=` + api_key + '&session_id=' + session_id + '&language=en-US&sort_by=created_at.asc&page=';
    


    for (let i = 1; i < 3; i++) {
      var pages = api_url + i;


      axios.get(pages)
        .then((resolve) => {

          //this is mapping through each item in the api and pushing each item into the items array
          resolve.data.results.map(item => { this.state.items.push(item) })

          //this is making the boolean true so it can display the results
          this.setState({ found: true });

          console.log('Yay we got the posters')
          console.log(this.state.items)

        })

        .catch((error) => {
          console.log('Something went wrong')
          this.setState({ found: false })
        })

    }
  }



  render() {
    const posters = this.state.items.map(images => <Card image={images} />)

    if (this.state.found) {
      return (

        <div className="posters-container">
          {posters}
        </div>
      )
    }
    return (
      <h6>Loading.....</h6>
    )
  }

}

export default ApiData;