import { Resource } from '../types';

export const resources: Resource[] = [
  // Animals
  {
    id: '1',
    name: 'AdoptAPet',
    description: 'Resource to help get pets adopted',
    category: 'Animals',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.adoptapet.com/public/apis/pet_list.html'
  },
  {
    id: '2',
    name: 'Cat Facts',
    description: 'Daily cat facts',
    category: 'Animals',
    auth: 'No',
    https: 'Yes',
    cors: 'No',
    url: 'https://alexwohlbruck.github.io/cat-facts/'
  },
  {
    id: '3',
    name: 'Dog Facts',
    description: 'Random dog facts',
    category: 'Animals',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://dukengn.github.io/Dog-facts-API/'
  },
  {
    id: '4',
    name: 'HTTP Cat',
    description: 'Cat for every HTTP Status',
    category: 'Animals',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://http.cat/'
  },
  // Anime
  {
    id: '5',
    name: 'AniList',
    description: 'Anime discovery & tracking',
    category: 'Anime',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://github.com/AniList/ApiV2-GraphQL-Docs'
  },
  {
    id: '6',
    name: 'Jikan',
    description: 'Unofficial MyAnimeList API',
    category: 'Anime',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://jikan.moe'
  },
  {
    id: '7',
    name: 'Studio Ghibli',
    description: 'Resources from Studio Ghibli films',
    category: 'Anime',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://ghibliapi.herokuapp.com'
  },
  // Anti-Malware
  {
    id: '8',
    name: 'AbuseIPDB',
    description: 'IP/domain/URL reputation',
    category: 'Anti-Malware',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://docs.abuseipdb.com/'
  },
  {
    id: '9',
    name: 'VirusTotal',
    description: 'VirusTotal File/URL Analysis',
    category: 'Anti-Malware',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://www.virustotal.com/en/documentation/public-api/'
  },
  // Art & Design
  {
    id: '10',
    name: 'Art Institute of Chicago',
    description: 'Art',
    category: 'Art & Design',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://api.artic.edu/docs/'
  },
  {
    id: '11',
    name: 'Cooper Hewitt',
    description: 'Smithsonian Design Museum',
    category: 'Art & Design',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://collection.cooperhewitt.org/api'
  },
  {
    id: '12',
    name: 'Metropolitan Museum of Art',
    description: 'Met Museum of Art',
    category: 'Art & Design',
    auth: 'No',
    https: 'Yes',
    cors: 'No',
    url: 'https://metmuseum.github.io/'
  },
  // Authentication & Authorization
  {
    id: '13',
    name: 'Auth0',
    description: 'Easy to implement, adaptable authentication and authorization platform',
    category: 'Authentication & Authorization',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://auth0.com'
  },
  // Blockchain
  {
    id: '14',
    name: 'Bitquery',
    description: 'Onchain GraphQL APIs & DEX APIs',
    category: 'Blockchain',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://graphql.bitquery.io/ide'
  },
  {
    id: '15',
    name: 'Chainlink',
    description: 'Build hybrid smart contracts with Chainlink',
    category: 'Blockchain',
    auth: 'No',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://chain.link/developer-resources'
  },
  {
    id: '16',
    name: 'Etherscan',
    description: 'Ethereum explorer API',
    category: 'Blockchain',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://etherscan.io/apis'
  },
  // Books
  {
    id: '17',
    name: 'Google Books',
    description: 'Books',
    category: 'Books',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developers.google.com/books/'
  },
  {
    id: '18',
    name: 'Open Library',
    description: 'Books, book covers and related data',
    category: 'Books',
    auth: 'No',
    https: 'Yes',
    cors: 'No',
    url: 'https://openlibrary.org/developers/api'
  },
  // Cryptocurrency
  {
    id: '19',
    name: 'CoinGecko',
    description: 'Cryptocurrency Price, Market, and Developer/Social Data',
    category: 'Cryptocurrency',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'http://www.coingecko.com/api'
  },
  {
    id: '20',
    name: 'Coinbase',
    description: 'Bitcoin, Bitcoin Cash, Litecoin and Ethereum Prices',
    category: 'Cryptocurrency',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developers.coinbase.com'
  },
  {
    id: '21',
    name: 'CoinMarketCap',
    description: 'Cryptocurrencies Prices',
    category: 'Cryptocurrency',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://coinmarketcap.com/api/'
  },
  // Development
  {
    id: '22',
    name: 'GitHub',
    description: 'Make use of GitHub repositories, code and user info programmatically',
    category: 'Development',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://docs.github.com/en/free-pro-team@latest/rest'
  },
  {
    id: '23',
    name: 'Stack Exchange',
    description: 'Q&A forum for developers',
    category: 'Development',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://api.stackexchange.com/'
  },
  {
    id: '24',
    name: 'Httpbin',
    description: 'A Simple HTTP Request & Response Service',
    category: 'Development',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://httpbin.org/'
  },
  // Finance
  {
    id: '25',
    name: 'Alpha Vantage',
    description: 'Realtime and historical stock data',
    category: 'Finance',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://www.alphavantage.co/'
  },
  {
    id: '26',
    name: 'IEX Cloud',
    description: 'Realtime & Historical Stock and Market Data',
    category: 'Finance',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://iexcloud.io/docs/api/'
  },
  // Food & Drink
  {
    id: '27',
    name: 'TheCocktailDB',
    description: 'Cocktail Recipes',
    category: 'Food & Drink',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.thecocktaildb.com/api.php'
  },
  {
    id: '28',
    name: 'TheMealDB',
    description: 'Meal Recipes',
    category: 'Food & Drink',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.themealdb.com/api.php'
  },
  {
    id: '29',
    name: 'Spoonacular',
    description: 'Recipes, Food Products, and Meal Planning',
    category: 'Food & Drink',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://spoonacular.com/food-api'
  },
  // Games & Comics
  {
    id: '30',
    name: 'Pokemon',
    description: 'Pokémon Information',
    category: 'Games & Comics',
    auth: 'No',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://pokeapi.co'
  },
  {
    id: '31',
    name: 'Rick and Morty',
    description: 'All the Rick and Morty information, including images',
    category: 'Games & Comics',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://rickandmortyapi.com'
  },
  {
    id: '32',
    name: 'Marvel',
    description: 'Marvel Comics',
    category: 'Games & Comics',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developer.marvel.com'
  },
  // Geocoding
  {
    id: '33',
    name: 'IP Geolocation',
    description: 'Geolocate website visitors from their IPs',
    category: 'Geocoding',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.abstractapi.com/ip-geolocation-api'
  },
  {
    id: '34',
    name: 'OpenStreetMap',
    description: 'Navigation, geolocation and geographical data',
    category: 'Geocoding',
    auth: 'OAuth',
    https: 'No',
    cors: 'Unknown',
    url: 'http://wiki.openstreetmap.org/wiki/API'
  },
  // Health
  {
    id: '35',
    name: 'Covid-19',
    description: 'Covid 19 spread, infection and recovery',
    category: 'Health',
    auth: 'No',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://covid19api.com/'
  },
  {
    id: '36',
    name: 'Nutritionix',
    description: 'Worlds largest verified nutrition database',
    category: 'Health',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developer.nutritionix.com/'
  },
  // Machine Learning
  {
    id: '37',
    name: 'Clarifai',
    description: 'Computer Vision',
    category: 'Machine Learning',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://docs.clarifai.com/api-guide/api-overview'
  },
  {
    id: '38',
    name: 'Dialogflow',
    description: 'Natural Language Processing',
    category: 'Machine Learning',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://cloud.google.com/dialogflow/docs/'
  },
  // Music
  {
    id: '39',
    name: 'Spotify',
    description: 'View Spotify music catalog, manage users\' libraries, get recommendations and more',
    category: 'Music',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://beta.developer.spotify.com/documentation/web-api/'
  },
  {
    id: '40',
    name: 'LastFm',
    description: 'Music',
    category: 'Music',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://www.last.fm/api'
  },
  // News
  {
    id: '41',
    name: 'News API',
    description: 'Headlines currently published on a range of news sources and blogs',
    category: 'News',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://newsapi.org/'
  },
  {
    id: '42',
    name: 'The Guardian',
    description: 'Access all the content the Guardian creates, categorised by tags and section',
    category: 'News',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'http://open-platform.theguardian.com/'
  },
  // Photography
  {
    id: '43',
    name: 'Unsplash',
    description: 'Photography',
    category: 'Photography',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://unsplash.com/developers'
  },
  {
    id: '44',
    name: 'Pexels',
    description: 'Free Stock Photos and Videos',
    category: 'Photography',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.pexels.com/api/'
  },
  {
    id: '45',
    name: 'Pixabay',
    description: 'Photography',
    category: 'Photography',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://pixabay.com/sk/service/about/api/'
  },
  // Science & Math
  {
    id: '46',
    name: 'NASA',
    description: 'NASA data, including imagery',
    category: 'Science & Math',
    auth: 'No',
    https: 'Yes',
    cors: 'No',
    url: 'https://api.nasa.gov'
  },
  {
    id: '47',
    name: 'SpaceX',
    description: 'Company, vehicle, launchpad and launch data',
    category: 'Science & Math',
    auth: 'No',
    https: 'Yes',
    cors: 'No',
    url: 'https://github.com/r-spacex/SpaceX-API'
  },
  {
    id: '48',
    name: 'Numbers API',
    description: 'Facts about numbers',
    category: 'Science & Math',
    auth: 'No',
    https: 'No',
    cors: 'No',
    url: 'http://numbersapi.com'
  },
  // Security
  {
    id: '49',
    name: 'HaveIBeenPwned',
    description: 'Passwords which have previously been exposed in data breaches',
    category: 'Security',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://haveibeenpwned.com/API/v3'
  },
  {
    id: '50',
    name: 'Shodan',
    description: 'Search engine for Internet connected devices',
    category: 'Security',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developer.shodan.io/'
  },
  // Social
  {
    id: '51',
    name: 'Discord',
    description: 'Make bots for Discord, integrate Discord onto an external platform',
    category: 'Social',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://discord.com/developers/docs/intro'
  },
  {
    id: '52',
    name: 'Reddit',
    description: 'Homepage of the internet',
    category: 'Social',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://www.reddit.com/dev/api'
  },
  {
    id: '53',
    name: 'Twitter',
    description: 'Read and write Twitter data',
    category: 'Social',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'No',
    url: 'https://developer.twitter.com/en/docs'
  },
  // Sports & Fitness
  {
    id: '54',
    name: 'NBA Stats',
    description: 'Current and historical NBA Statistics',
    category: 'Sports & Fitness',
    auth: 'No',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://any-api.com/nba_com/nba_com/docs/API_Description'
  },
  {
    id: '55',
    name: 'TheSportsDB',
    description: 'Crowd-Sourced Sports Data and Artwork',
    category: 'Sports & Fitness',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.thesportsdb.com/api.php'
  },
  // Video
  {
    id: '56',
    name: 'YouTube',
    description: 'Add YouTube functionality to your sites and apps',
    category: 'Video',
    auth: 'OAuth',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://developers.google.com/youtube/'
  },
  {
    id: '57',
    name: 'OMDb',
    description: 'Movie information',
    category: 'Video',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'http://www.omdbapi.com/'
  },
  {
    id: '58',
    name: 'TMDb',
    description: 'Community-based movie data',
    category: 'Video',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://www.themoviedb.org/documentation/api'
  },
  // Weather
  {
    id: '59',
    name: 'OpenWeatherMap',
    description: 'Weather',
    category: 'Weather',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Unknown',
    url: 'https://openweathermap.org/api'
  },
  {
    id: '60',
    name: 'WeatherAPI',
    description: 'Weather API with other stuff like Astronomy and Geolocation API',
    category: 'Weather',
    auth: 'apiKey',
    https: 'Yes',
    cors: 'Yes',
    url: 'https://www.weatherapi.com/'
  },
];
