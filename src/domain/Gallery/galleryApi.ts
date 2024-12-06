import axios from 'axios';

import {PhotoAPI} from './galleryTypes';

async function getList({limit = 20}: {limit: number}): Promise<PhotoAPI[]> {
  const response = await axios.get<PhotoAPI[]>(
    `https://picsum.photos/v2/list?page=2&limit=${limit}`,
  );

  return response.data;
}

export const galleryApi = {
  getList,
};
