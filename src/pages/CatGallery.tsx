import React, { useState, useEffect } from 'react';
import CatCard from '../components/CatCard';
import Loader from '../components/Loader/Loader';
import { CatBreed } from '../components/CatSchool/SelectBreed';
import PageTitle from '../components/PageTitle';
import LayoutContainer from '../components/LayoutContainer';
import { useRecoilValueLoadable } from 'recoil';
import { myCatsState } from '../recoil/atoms/myCats';
import Subtitle from '../components/Subtitle';
import { Button } from '../components/Button';

export interface Cat {
  id: string;
  url?: string;
  sub_id?: string;
  breeds: CatBreed[];
}

const CatGallery: React.FunctionComponent = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const myCats = useRecoilValueLoadable(myCatsState);

  async function getCats() {
    setCats([]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=12', {
        headers: {
          'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
        }
      });
      const data: Cat[] = await response.json();
      setCats(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCats();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (myCats.state === 'hasValue') {
    const extraCats = myCats.contents;
    return (
      <>
        <LayoutContainer>
          <PageTitle title="Cat Gallery" />
          {cats.length > 0}
          <div className={`w-full justify-center ${extraCats.length > 0 ? 'flex' : 'hidden'}`}>
            <Subtitle>
              See your own cats, too?
              <Button onClick={handleClick} as="button" variant="primary">
                {!isOpen ? 'Show me!' : 'Hide them!'}
              </Button>
            </Subtitle>
          </div>

          {isOpen && (
            <div className="flex border-transparent-green border-b-[3px] border-dashed mx-auto w-full flex-wrap justify-center">
              {extraCats &&
                extraCats.map((cat: Cat) => {
                  return <CatCard hasPropertiesSection={false} cat={cat} key={cat.id} />;
                })}
            </div>
          )}
          {isLoading && <Loader />}
          <div className="flex mx-auto w-full flex-wrap justify-center">
            {cats &&
              cats.map((cat: Cat) => {
                return <CatCard hasPropertiesSection cat={cat} key={cat.id} />;
              })}
          </div>
        </LayoutContainer>
      </>
    );
  } else {
    return <div>Error: {myCats.contents.message}</div>;
  }
};

export default CatGallery;
