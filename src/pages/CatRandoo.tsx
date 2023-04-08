import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import LayoutContainer from '../components/LayoutContainer';
import PageTitle from '../components/PageTitle';
import { Button } from '../components/Button';
import Subtitle from '../components/Subtitle';

interface CatGif {
    url: string;
}

export default function CatRandoo() {
    const [catGif, setCatGif] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // TODO sometimes the image reloads upon rendering?!
    async function getCatGif() {
        setCatGif('');
        setIsLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', {
                headers: {
                    'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
                }
            });
            const data: CatGif[] = await response.json();
            setCatGif(data[0].url);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCatGif();
    }, []);

    const handleClick = (): void => {
        window.location.reload();
    };

    return (
        <>
            <LayoutContainer>
                <PageTitle title="CatRandoo(M)!" />
                {isLoading && <Loader />}

                {catGif && (
                    <div className="justify-center items-center flex w-full flex-col max-h-[50%]">
                        <Subtitle>Enjoy a random cat gif. Need more? Hit the button!</Subtitle>
                        <img src={catGif} alt="Cute cat" />
                        <Button variant="primary" onClick={handleClick}>
                            The Button!
                        </Button>
                    </div>
                )}
            </LayoutContainer>
        </>
    );
}
