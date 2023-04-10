import React, { useState, useEffect } from 'react';
import CatCard from '../CatCard';
import LayoutContainer from '../LayoutContainer';
import Loader from '../Loader/Loader';
import { Cat } from '../../pages/CatGallery';
import { useRecoilCallback, useRecoilStateLoadable } from 'recoil';
import { myCatsState } from '../../recoil/atoms/myCats';

const MyCats: React.FunctionComponent = () => {
  const [myCats, setMyCats] = useRecoilStateLoadable(myCatsState);

  const [isLoading, setIsLoading] = useState(false);

  const getMyCats = useRecoilCallback(({ set }) => async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images?limit=12', {
        headers: {
          'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
        }
      });
      const data: Cat[] = await response.json();
      set(myCatsState, data);

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  });

  const deleteACat = useRecoilCallback(({ set }) => async (catId: string) => {
    try {
      await fetch(`https://api.thecatapi.com/v1/images/${catId}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
        }
      });

      set(myCatsState, (existingCatImages) => existingCatImages.filter((cat) => cat.id !== catId));
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    getMyCats();
  }, []);

  useEffect(() => {
    deleteACat(myCats.contents[0]);
  }, []);

  if (myCats.state === 'hasValue') {
    const cats = myCats.contents;

    return (
      <>
        <LayoutContainer>
          {isLoading && <Loader />}
          <div className="flex mx-auto w-full flex-wrap justify-center">
            {cats &&
              cats.map((cat: Cat) => {
                return <CatCard hasRemoveButton hasPropertiesSection={false} handleDelete={() => deleteACat(cat.id)} cat={cat} key={cat.id} />;
              })}
          </div>
        </LayoutContainer>
      </>
    );
  } else {
    return <div>Error: {myCats.contents.message}</div>;
  }
};

export default MyCats;
