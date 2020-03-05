import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const UploadPage = () => {
  const [ file, setFile ] = useState(null);
  const [ code, setCode ] = useState("");

  const button = {
    height: '35px',
    width: '105px'
  }
  const onChangeHandler = ( event ) => {
    setFile(event.target.files[0])  
  }
  const onSubmit = ( event ) => {
    event.preventDefault();
    const data = new FormData()
  }

  return (
    <div>
      <Link to='/'>
        <button style={button}>
          {'<<<'}
        </button> 
      </Link>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div>
          <input type='file'  accept=".txt" onChange={onChangeHandler} />
        </div>
        <br />
        <form onSubmit={onSubmit}>
          <div>
            <input type='text' name='code' onChange={(target)=>setCode(target.value)}/>
          </div>
          <button style={{ width: '147px'}} type='submit'>Upload</button>
        </form>
      </div>
    </div>
  )
}

export default UploadPage;