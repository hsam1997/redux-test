import axios from 'axios';

const URL = `https://rallycoding.herokuapp.com/api/music_albums`;





export function moviesList(){
    /*let ali = {name: 'ali' , key : 2}
    let request = {};
    fetch('https://www.chetor.com/wp-json/wp/v2/posts?_embed&page=1').then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      request = data ;
      //console.log(request);
    }).catch(err => {
       //Do something for an error here
    });
    console.log(request);*/
    const request = axios.get(`${URL}`)
                    .then(response => response.data)
      
    console.log(request);
    return {
        type : "MOVIES_LIST" , 
        payload : request
    }
}


export function directorsList(){
    return {
        type : "DIR_LIST" , 
        payload : [
            {id : 0 , name : "tarantino"},
            {id : 1 , name : "Cristopher Nolan"},
            {id : 2 , name : "bofoski"},
            {id : 3 , name : "liam nesson"}
        ]
    }
}


/*

axios.get('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1')
    .then(Response => this.setState({cards : Response.data})) ;
componentDidMount = () => {
    fetch('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.setState({
            cards: responseJson
        })
    })
    .catch((error) => {
        console.error(error);
    });
    }
    //Alert.alert(this.state.albums.length === 0 ? 'zero':'more');
}*/