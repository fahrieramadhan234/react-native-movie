import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import {set} from 'react-native-reanimated';

const NowPlayingMovies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => [setMovie(response.data.results), setLoading(false)]);
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => [setMovie(response.data.results), setLoading(false)]);
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

const TopRatedMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => [setMovie(response.data.results), setLoading(false)]);
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

var SearchMovie = async (query) => {
  // let state = {
  //   movie: [],
  // };

  let movie = [];
  let loading = true;

  await Axios.get(
    `${BASE_URL}/search/movie/?query=${query}&api_key=${API_KEY}&page=1`,
  ).then((response) => {
    movie = response;
  });

  return movie;

  // movie = response.data.results.length;

  // useEffect(() => {
  //   setLoading(true);
  //   const data = Axios.get(
  //     `${BASE_URL}/search/movie/?query=${'avenger'}&api_key=${API_KEY}&page=1`,
  //   ).then((response) => [setMovie(response.data.results), setLoading(false)]);
  //   return () => {
  //     data;
  //   };
  // }, []);

  // return state.movie;
};

export {PopularMovies, TopRatedMovies, NowPlayingMovies, SearchMovie};
