import axios from 'axios';

const getWordOfTheDay = async () => {
    const options = {
        method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: { random: 'true' },
    headers: {
      'X-RapidAPI-Key': 'aa89a9475fmsh2519ad607bf8a07p11e955jsnb24308fff616',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      const word = response.data.word;
      const wordDefinition = response.data.results[0]['definition']
    console.log('Word:', word); // Access the 'word' property directly
    console.log('Definition:', wordDefinition); // accessing the 'definition' directly
  } catch (error) {
    console.error(error);
  }
};

getWordOfTheDay();
