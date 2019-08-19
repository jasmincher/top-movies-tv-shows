import React from 'react';
import axios from 'axios'
import Card from './Card'
import '../css/ApiData.css'
import eclipse from '../assets/images/eclipse-loader.gif'
import SearchBar from '../components/SearchBar'
import { async } from 'q';
import _ from 'lodash';


class ApiData extends React.Component {

    state = {
      items: [],
      genreTypes: [],
      found: false
    }
  
  //here we are initiating the API 
  componentDidMount = () => {
    console.log('component did mount')
    this.results();
  }

  results = async () => {
    console.log('in results function')

    var base_url = 'https://api.themoviedb.org/3/account/'
    const api_key = process.env.REACT_APP_API_KEY;
    const session_id = process.env.REACT_APP_SESSION_ID;
    const account_id = process.env.REACT_APP_ACCOUNT_ID;


    let api_url = `${base_url}${account_id}/favorite/${this.props.dataType}?api_key=${api_key}&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=`
    let genreNames = `https://api.themoviedb.org/3/genre/${this.props.cardType}/list?api_key=${api_key}&language=en-US`;

    var api_data = []
    


    for (let i = 1; i < 5; i++) {
      var pages = api_url + i;


      axios.get(pages)
        .then((resolve) => {
          resolve.data.results.map(item => { api_data.push(item) })
          this.setState({items: api_data, data: api_data, found: true})
          console.log('Yay we got the posters')

        })

        .catch((error) => {
          console.log('Something went wrong')
          this.setState({ found: false })
        })

    }
       
    let genres = []

    axios.get(genreNames)
      .then((resolve) => {
        resolve.data.genres.map(genre => { genres.push(genre) })
        this.setState({ genreTypes: genres, temp: genres, found: true });
        console.log(resolve.data.genres)
        
      })

      .catch((error) => {
        console.log('Something went wrong for the genres')
        console.log(error)
        this.setState({ found: false })

      })

  }

  

  handleFilter = (e) => {
    console.log("we filtering filtering")
    let input = e.target.value;
    // console.log(input)

    if(input === ''){
      this.setState({items: this.state.data})
      return;
    }
    console.log('the genres are:')
    console.log(this.state.temp)
    var genres = this.state.temp.filter(function (item) {
      // console.log(item)
      //{id: 18, name: 'drama'}
      return (item.name.includes(input));
    }).map((item)=>{
      return item.id
    })
    
    let movies = this.state.data.filter((item)=> {
      // find items where the item's genre ids match our input
          if(_.intersection(item.genre_ids, genres).length > 0){
            return true
          }
          else return false

    })
        // console.log('the genres are back in town')
        // })

    this.setState({
      genreTypes: genres,
      items: movies
    })

    console.log(genres)
  }


  render() {
    if (this.state.found) {
      const posters = this.state.items.map(images => <Card image={images} cardType={this.props.cardType} />)
  
      return (
        <div>
          <SearchBar handleFilter={this.handleFilter} />

          <div id="posters-container">
            {posters}

          </div>
        </div>
      )
    }

    return (
      <div className="loader">
        <img src={eclipse} className="loader-img" />
      </div>
    )
  }
  
}

export default ApiData;