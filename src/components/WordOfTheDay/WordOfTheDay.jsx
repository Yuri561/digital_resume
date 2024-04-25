import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WordOfTheDay.css';
import Card from 'react-bootstrap/Card';

const WordOfTheDay = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  useEffect(() => {
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
        const results = response.data.results;
        
        // Check if results array is empty or undefined
        if (results && results.length > 0) {
          const wordDefinition = results[0].definition;
          setWord(word);
          setDefinition(wordDefinition);
        } else {
          // Handle the case when no results are returned
          console.error('No word definition found.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    getWordOfTheDay();
  }, []);

  return (
    <div className='parent-container'>
      <div className="card text-center word h-25" style={{ height: '200px' }}>
        <div className="card-header">
          Word For Today
        </div>
        <div className="card-body">
          <h5 className="card-title">{word}</h5>
          <p className="card-text">{definition}</p>
        </div>
        <div className="card-footer text-body-secondary">
          Frontend Developer 
        </div>
      </div>
    </div>
  );
}

export default WordOfTheDay;
