import React from 'react';
import axios from 'axios'
import Card from '../components/Card'


class MoviesAPI extends React.Component{
    state = { 
        movies: [],
        found: false
    }

    // https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=1fb718e33990d4d733d6e019892804af&session_id=ff716a659cc0ae54f11d8d6e40935f4d21fd9a60&language=en-US&sort_by=created_at.asc&page=1

moviePosters = () => {
    let baseURL = 'https://api.themoviedb.org/3/account/'
    let apiKey = '1fb718e33990d4d733d6e019892804af'
    let session_id = 'ff716a659cc0ae54f11d8d6e40935f4d21fd9a60'
    let account_id = 'jasmincher'

    axios.get(baseURL + account_id + 'favorite/movies?api_key' + apiKey + '&session_id=' + session_id + '&language=en-US&sort_by=created_at.asc&page=1')
    .then((resolve) => {
        this.setState ({movies: resolve.data.movies, found: true});
        console.log('Yay we got the posters')
       
    })

    .catch((error) => {
        console.log('Something went wrong')
        this.setState({found: false})
    })
}



render(){
    const posters = this.state.movies.map(image => <Card image={image} /> )
  
  
  if (this.state.found) {

      
      return (
          <div>

              {posters}
          </div>
          )
        }
        return (
            <div>this is here whatever happens</div>
        )
}

}