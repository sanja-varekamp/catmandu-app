import React, { useState, useEffect } from 'react';
import CatCard from '../components/CatCard';
import LayoutContainer from './LayoutContainer';
import Loader from './Loader/Loader';
import { Cat } from '../pages/CatGallery';

const MyCats: React.FunctionComponent = () => {
  const [myCats, setMyCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getMyCats() {
    setMyCats([]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.thecatapi.com/v1/images?limit=12', {
        headers: {
          'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
        }
      });
      const data: Cat[] = await response.json();
      setMyCats(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }

    console.log(myCats);
  }

  useEffect(() => {
    getMyCats();
  }, []);

  return (
    <>
      <LayoutContainer>
        {isLoading && <Loader />}
        <div className="flex mx-auto w-full flex-wrap justify-center">
          {myCats &&
            myCats.map((cat: Cat) => {
              return <CatCard hasPropertiesSection={false} cat={cat} key={cat.id} />;
            })}
        </div>
      </LayoutContainer>
    </>
  );
};

export default MyCats;
