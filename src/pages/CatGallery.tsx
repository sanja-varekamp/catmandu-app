import React, { useState, useEffect } from 'react';
import CatCard from '../components/CatCard';
import Loader from '../components/Loader/Loader';

export interface CatGalleryProps {}

export interface Cat {
    id: string;
    url?: string;
    breeds: CatBreed[];
}

export interface CatBreed {
    name?: string;
    temperament?: string;
    origin?: 'string';
    wikipedia_url?: string;
    description?: string;
}

const CatGallery: React.FunctionComponent<CatGalleryProps> = () => {
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getCats() {
        setCats([]);
        setIsLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12', {
                headers: {
                    'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
                }
            });
            const json = await response.json();
            setCats(json);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCats();
    }, []);

    console.log(cats);

    return (
        <>
            {isLoading && <Loader />}
            <div className="mx-auto flex w-9/12 flex-wrap py-10">
                {cats &&
                    cats.map((cat: Cat) => {
                        return <CatCard cat={cat} key={cat.id} />;
                    })}
            </div>
        </>
    );
};

export default CatGallery;
