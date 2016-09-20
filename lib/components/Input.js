import React from 'react';

export default function({ item, action, name }) {
  return(
    <input
      type='text'
      placeholder= { name }
      onChange={ action }
      value={ item }
    />
  )
}
