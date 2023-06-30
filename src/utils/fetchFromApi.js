const API_KEY='97585335d48b3316c120a677254f86b6';

const fetchFromApi = {
  fetchTrending: `3/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `3/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `3/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchTvTrending: `3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  fetchOnAir: `3/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
  fetchDiscover: `3/discover/movie?api_key=${API_KEY}&language=en-US`,
}

export default fetchFromApi;