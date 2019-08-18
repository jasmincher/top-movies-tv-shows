import React from 'react';
import axios from 'axios'
import Card from './Card'
import '../css/ApiData.css'
import eclipse from '../assets/images/eclipse-loader.gif'
import SearchBar from '../components/SearchBar'


class ApiData extends React.Component {
  state = {
    items: [],
    genreTypes: [],
    filterName: '',
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


    let api_url = base_url + account_id + `/favorite/${this.props.dataType}?api_key=` + api_key + '&session_id=' + session_id + '&language=en-US&sort_by=created_at.asc&page=';
    let genreNames = `https://api.themoviedb.org/3/genre/${this.props.dataType}/list?api_key=` + api_key;



    for (let i = 1; i < 3; i++) {
      var pages = api_url + i;

      axios.get(pages)
        .then((resolve) => {
          //this is mapping through each item in the api and pushing each item into the items array
          resolve.data.results.map(item => { this.state.items.push(item) })
          // console.log(this.state.items)
          //this is making the boolean true so it can display the results
          this.setState({ found: true });
          console.log('Yay we got the posters')

        })

        .catch((error) => {
          console.log('Something went wrong')
          this.setState({ found: false })
        })

    }



    axios.get(genreNames)
      .then((resolved) => {
        resolved.data.genres.map(genre => { this.state.genreTypes.push(genre) })
        // console.log(this.state.genreTypes)
        this.setState({ found: true });

      })

      .catch((error) => {
        console.log('Something went wrong for the genres')
        this.setState({ found: false })

      })

  }

  searchInput = (e) => {
    let input = e.target.value;
    console.log(input)
  }


  handleFilter = () => {
    
    
  }

  render() {
    if (this.state.found) {
      const posters = this.state.items.map(images => <Card image={images} cardType={this.props.cardType} />)
      // console.log(posters.image.name)

      return (
        <div>
          <SearchBar searchInput={this.searchInput} />

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