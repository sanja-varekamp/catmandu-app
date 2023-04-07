import React, { useState, useEffect } from 'react';
import CatCard from '../components/CatCard';
import Loader from '../components/Loader/Loader';
import { CatBreed } from '../components/SelectBreed';
import PageTitle from '../components/PageTitle';
import LayoutContainer from '../components/LayoutContainer';

export interface Cat {
    id: string;
    url?: string;
    breeds: CatBreed[];
}

const CatGallery: React.FunctionComponent = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <>
            {isLoading && <Loader />}
            <LayoutContainer>
                <PageTitle title="Cat Gallery" />
                <div className="flex mx-auto flex-wrap">
                    {cats &&
                        cats.map((cat: Cat) => {
                            return <CatCard cat={cat} key={cat.id} />;
                        })}
                </div>
            </LayoutContainer>
        </>
    );
};

export default CatGallery;
