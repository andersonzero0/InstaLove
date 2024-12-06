import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {galleryService} from '../galleryService';

export function useGalleryList() {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.GalleryGetList],
    queryFn: () => galleryService.getList(),
    staleTime: 1000 * 30,
  });

  return {
    list: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}
