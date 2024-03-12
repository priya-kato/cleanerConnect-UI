import {useMutation, useQuery} from '@tanstack/react-query';
import {
  createHomeService,
  createService,
  createContact,
  getUserApi,
} from '../../api/create/createservice';

export const createCleanQuery = (resetCleanForm, navigation) => {
  return useMutation(data => createHomeService(data), {
    onSuccess: async data => {
      console.log(data?.data, 'createdform');
      resetCleanForm();
      navigation.navigate('ServiceListScreen');
    },
    onError: async error => {
      console.log(error, 'queryerrr');
    },
  });
};

export const createServiceQuery = navigation => {
  return useMutation(data => createService(data), {
    onSuccess: async data => {
      console.log(data?.data, 'createdservice');
      navigation.navigate('Homestack');
    },
    onError: async error => {
      console.log(error, 'queryerrr');
    },
  });
};

export const createContactQuery = (navigation, refetch, resetCleanForm) => {
  return useMutation(data => createContact(data), {
    onSuccess: async data => {
      console.log(data?.data, 'usercreated');
      refetch();
      resetCleanForm();
      navigation.navigate('Usertab');
    },
    onError: async error => {
      console.log(error, 'queryerrr');
    },
  });
};

export const getUserQuery = () => useQuery(['getuser'], () => getUserApi());
