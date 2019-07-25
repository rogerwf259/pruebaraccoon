import React, { useState, useEffect } from 'react';
import List from './components/List';
import Loader from './components/Loader';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeelings = async () => {
    const response = await fetch(
      'https://159.89.143.117:3001/raccoon/feelings',
      {
        method: 'GET'
      }
    );
    const { feelings } = await response.json();
    setData(feelings);
    setLoading(false);
    console.log('Feelings', data);
  };
  useEffect(() => {
    fetchFeelings();
  }, []);

  return (
    <div className="ui container">
      <div className="ui equal width stretched grid">
        <div className="sixteen wide column">
          <div className="ui equal width grid">
            <div className="row centered">
              {loading ? <Loader /> : <List items={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
