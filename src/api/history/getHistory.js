import connection from '../apiConnection';

export const getHistoryApi = () => {
  return connection.get('/api/form/forms');
};
