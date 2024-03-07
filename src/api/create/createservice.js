import connection from '../apiConnection';

export const createHomeService = body => {
  return connection.post('/api/form/create', body);
};

export const createService = body => {
  return connection.post('/api/service', body);
};
