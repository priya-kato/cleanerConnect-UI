import {useQuery} from '@tanstack/react-query';
import {getHistoryApi} from '../../../api/history/getHistory';

export const getHistoryQuery = () =>
  useQuery(['getHistory'], () => getHistoryApi());
