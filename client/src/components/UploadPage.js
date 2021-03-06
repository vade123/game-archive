import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import gamesService from '../services/games';

const UploadPage = ({ setGames }) => {
  const [ file, setFile ] = useState('');
  const [ code, setCode ] = useState('');
  const [ message, setMessage ] = useState(null); 

  const button = {
    height: '35px',
    width: '105px'
  };
  const onChangeHandler = ( event ) => {
    const file = (event.target.files[0]);
    if (file.type === 'text/plain') {
      setFile(file);
      setMessage('');
    } else {
      setMessage(`${file.type} is not supported`);
      event.target.vale = null;
    }
    
  };
  const onSubmit = async ( event ) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = async ( f ) => {
      const text = f.target.result;

      try {
        const game = await gamesService.add(code, file.name, text);
        setMessage('Upload success');
        setGames(game);
      } catch(err) {
        setMessage('Upload failed, check code');
        setCode('');
      }
      setCode('');
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <Link to='/'>
        <button style={button}>
          {'<<<'}
        </button> 
      </Link>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div>
          <input 
            type='file' 
            accept=".txt" 
            onChange={onChangeHandler}
          />
        </div>
        <br />
        <form onSubmit={onSubmit}>
          <div>
            <input 
              style={{ width: '170px' }} 
              type='password' 
              name='code' 
              placeholder='super secret upload code' 
              onChange={({ target })=>setCode(target.value)} 
              value={code}
            />
          </div>
          <button 
            style={{ width: '176px'}}
            disabled={!file}
            type='submit'>
            Upload
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UploadPage;