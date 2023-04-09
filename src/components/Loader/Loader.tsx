import React from 'react';
import catLoader from './catLoader.gif';

export interface Props {
  small?: boolean;
}

const Loader: React.FunctionComponent<Props> = ({ small }: Props) => {
  return small ? (
    <div className="flex items-center justify-center bg-white">
      <img src={catLoader} height="40px" width="40px" alt="loading..." />
    </div>
  ) : (
    <div className="flex w-full mt-24 items-center justify-center bg-white">
      <img src={catLoader} height="80px" width="80px" alt="loading..." />
    </div>
  );
};

export default Loader;
