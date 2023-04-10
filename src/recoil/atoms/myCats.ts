import { atom } from 'recoil';
import { Cat } from '../../pages/CatGallery';

export const catListState = atom<Cat[]>({
  key: 'catListState',
  default: []
});
