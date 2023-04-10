import { atom } from 'recoil';
import { Cat } from '../../pages/CatGallery';

export const myCatsState = atom<Cat[]>({
  key: 'myCatsState',
  default: []
});
