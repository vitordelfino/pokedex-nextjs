import { useQuery, UseQueryResult } from 'react-query';
import api from '../services/api';
import { TypeSpecs } from '../utils/types';

export const useType = (type: string): UseQueryResult<TypeSpecs> => {
  const fetchType = async () => {
    const response = await api.get(`/type/${type}`);
    return response.data;
  };

  return useQuery(['type', type], fetchType, {
    staleTime: Infinity,
    enabled: !!type,
  });
};
