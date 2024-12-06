export type Photo = {
  id: string;
  url: string;
  title: string;
  createdAt: string;

  width: number;
  height: number;
};

export type PhotoAPI = {
  id: string;
  width: number;
  height: number;
  download_url: string;
};
