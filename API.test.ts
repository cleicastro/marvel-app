import React from 'react';
import Marvel from './src/services/marvel';

it('API testing', async () => {
  const response = await Marvel.getComics(null);
  console.warn(response.data);
  expect('hello').toEqual('hello');
});
