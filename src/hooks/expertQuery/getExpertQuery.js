import {useQuery} from '@tanstack/react-query';
import {getExpertApi} from '../../api/expert/getExpert';

export const getExpertQuery = () =>
  useQuery(['getexpert'], () => getExpertApi());
