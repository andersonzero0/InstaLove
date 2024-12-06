import {galleryAdapter} from './galleryAdapter';
import {galleryApi} from './galleryApi';
import {Photo} from './galleryTypes';

const LIMIT = 20;

async function getList(): Promise<Photo[]> {
  const photoAPI = await galleryApi.getList({
    limit: LIMIT,
  });
  return photoAPI.map(galleryAdapter.toPhoto);
}

export const galleryService = {
  getList,
};
