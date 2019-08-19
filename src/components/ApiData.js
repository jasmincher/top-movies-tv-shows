import React from 'react';
import axios from 'axios'
import Card from './Card'
import '../css/ApiData.css'
import eclipse from '../assets/images/eclipse-loader.gif'
import SearchBar from '../components/SearchBar'
import { async } from 'q';


class ApiData extends React.Component {

    state = {
      items: [],
      filterNames: [],
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


    let api_url = base_url + account_id + `/favorite/${this.props.dataType}?api_key=` + api_key + '&session_id=' + session_id + '&language=en-US&sort_by=created_at.asc&page=';
    let genreNames = `https://api.themoviedb.org/3/genre/${this.props.dataType}/list?api_key=` + api_key;


    var api_data = []
    


    for (let i = 1; i < 10; i++) {
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
       

    axios.get(genreNames)
      .then((resolved) => {
        resolved.data.results.map(genre => { this.state.genreTypes.push(genre) })
        // console.log(this.state.genreTypes)
        this.setState({ found: true });
        

      })

      .catch((error) => {
        console.log('Something went wrong for the genres')
        this.setState({ found: false })

      })

  }


  handleFilter = (e) => {
    let input = e.target.value;
    console.log(input)

    if(input === ''){
      // this.setState({})
      this.setState({items: this.state.data})
      return;
    }
    var titles = this.state.data.filter(function (item) {
      // console.log(item.title === input || item.name)
      console.log(item)
      return (item.title.includes(input));
    })
    this.setState({
      items: titles
    })

    console.log(titles)
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