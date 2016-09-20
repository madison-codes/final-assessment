import React from 'react';

export default function ({ word, handleSubmit }) {
    return(
      <button
        disabled={ !word }
        onClick={ handleSubmit }
      >Submit
      </button>
    )
}
