import React from 'react';
import axios from 'axios'
import Card from './Card'
import '../css/ApiData.css'
import eclipse from '../assets/images/eclipse-loader.gif'
import SearchBar from '../components/SearchBar'
import _ from 'lodash';


class ApiData extends React.Component {

  state = {
    items: [],
    genreTypes: [],
    genreList: [],
    found: null,
    results: true
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
          this.setState({ items: api_data, data: api_data, found: true })
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
        this.setState({ genreTypes: genres, genreList: genres, found: true });
        console.log(resolve.data.genres)

      })

      .catch((error) => {
        console.log(error)
        this.setState({ found: false })

      })

  }



  handleFilter = (e) => {
    let input = e.target.value;
 
    if (input === 'Select Genre...') {
      this.setState({ items: this.state.data, found: true })
      return;
    }
   
    var genres = this.state.genreList.filter(function (item) {

      return (item.name.includes(input));
    }).map((item) => {
      return item.id
    })

    let filteredData = this.state.data.filter((item) => {
      // find items where the item's genre ids match our input
      if (_.intersection(item.genre_ids, genres).length > 0) {
        return true
      }
      else {
        return false
      }

    })

    if (filteredData.length < 1) {
      this.setState({ found: false })
      return;
    }

    this.setState({
      genreTypes: genres,
      items: filteredData,
      found: true
    })

  }


  render() {
    if (this.state.found) {
      const posters = this.state.items.map(images => <Card image={images} cardType={this.props.cardType} />)
      return (
        <div>
          <SearchBar handleFilter={this.handleFilter} genreTypes={[{ name: "Select Genre..." }, ...this.state.genreList]} />

          <div id="posters-container">
            {posters}

          </div>
        </div>
      )
    }

    else if (this.state.found == false) {
      return (
        <div>
          <SearchBar handleFilter={this.handleFilter} genreTypes={[{ name: "Select Genre..." }, ...this.state.genreList]} />
          <p className="no-results"> Nothing found </p>
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