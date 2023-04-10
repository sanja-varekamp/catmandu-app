import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Hero from '../components/Home/Hero';
import catThread from '../components/Home/catThread.gif';

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <LayoutContainer>
      <div className="flex flex-col-reverse md:flex-row md:mt-24 md:flex-row justify-between">
        <div className="md: w-50%">
          <Hero />
        </div>
        <div className="md: w-50% justify-between flex flex-col">
          <div className="w-full flex justify-center p-4">
            <h1 className="mb-4 text-4xl  font-extrabold md:text-5xl lg:text-6xl">Catmandu - the cat app!</h1>
          </div>

          <div className="w-full flex justify-end">
            <div className="w-[60%] flex flex-col">
              Are we in Nepal yet...?
              <img src={catThread} className="h-full min-w-full" alt="Cats swinging on a yarn ball" />
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default HomePage;
