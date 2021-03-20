import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.trakt.tv/oauth/authorize?response_type=code&client_id=%20&redirect_uri=%20&state=%20`
      )
      .then((response) => console.log(response));
    // axios
    //   .get('https://private-f8c8ac-webjumptest.apiary-mock.com/movies')
    //   .then((response) => setMovies(response.data));
  }, []);

  return <Text>Tela que vai listar os filmes</Text>;
};

export default ListMovies;
