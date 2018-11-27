import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { moviesList , directorsList} from '../actions';
import { bindActionCreators } from 'redux'; 
import MoviesList from '../components/moviesList';




class Comp extends Component {
    
    componentWillMount(){
        //this.props.getMovies()
        this.props.moviesList();
        this.props.directorsList();
       // console.log("these are the current props :::");
        //console.log(this.props.data.movies);
    }

    render(){

        return (
            <MoviesList {...this.props} />
        );
    }

}

const mapStateProps = (state) => {
    return {
        data : state.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        moviesList , directorsList
    }, dispatch)
}

export default connect(mapStateProps , mapDispatchToProps)(Comp);



/*
<View>
{this.renderMovies(this.props.data.movies)}
</View>*/