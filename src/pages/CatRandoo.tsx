import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { Cat } from './CatGallery';

export default function CatRandoo() {
    const [cat, setCat] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // TODO this page renders twice on refresh!

    async function getCat() {
        setCat([]);
        setIsLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search', {
                headers: {
                    'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
                }
            });
            const json = await response.json();
            setCat(json);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCat();
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            <div className="mx-auto flex w-9/12 flex-wrap py-10">
                {cat &&
                    cat.map((oneCat: Cat) => {
                        return (
                            <div className="items-center flex" key={oneCat.id}>
                                <img className="object-contain w-full" src={oneCat.url} alt="Cute cat" />
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
