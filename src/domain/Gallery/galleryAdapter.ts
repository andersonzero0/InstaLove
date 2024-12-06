import {Photo, PhotoAPI} from './galleryTypes';

function toPhoto(photoAPI: PhotoAPI): Photo {
  return {
    id: photoAPI.id,
    url: photoAPI.download_url,
    title: `Photo ${photoAPI.id}`,
    createdAt: new Date().toISOString(),
    width: photoAPI.width,
    height: photoAPI.height,
  };
}

export const galleryAdapter = {
  toPhoto,
};
