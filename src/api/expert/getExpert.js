import connection from '../apiConnection';

export const getExpertApi = () => {
  return connection.get('/expert');
};
