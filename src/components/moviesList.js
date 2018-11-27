import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
class MoviesList extends Component {
    render() { 
        const renderMovies = (movies) => (
            //movies ?
                movies.map(item => (
                    <Text key={item.id}>{item.id}</Text>
                ))//: null
        )
        return ( 
            <View>
                {renderMovies(this.props.data.movies)}
            </View>
         );
    }
}
 
export default MoviesList;
*/


const Movieslist = (props) => {
    console.log("this is what u searching");
    console.log("look forward", props.data.movies);

    const renderMovies = (movies) => (
        movies ?
            movies.map((item,i) =>(
                <Text key={i}>
                    {item.title}
                </Text>
            )):null
    )

    return (
        <View>
            <Text>
                {renderMovies(props)}
            </Text>
        </View>
    );
};

export default Movieslist;


//{renderMovies(props.data.movies)}