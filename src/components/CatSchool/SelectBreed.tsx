import React, { useState, useEffect } from 'react';
import CatProperty from './CatProperty';
import { Button } from '../Button';
import Loader from '../Loader/Loader';
import CatPropertyRating from './CatPropertyRating';

export interface CatBreed {
    id: string;
    name: string;
    temperament: string;
    wikipedia_url: string;
    description: string;
    origin: string;
    affection_level: number;
    shedding_level: number;
    image: {
        url: string;
    };
}

const SelectBreed: React.FunctionComponent = () => {
    const [breeds, setBreeds] = useState<CatBreed[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<CatBreed | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getBreeds() {
        setIsLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', {
                headers: {
                    'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
                }
            });
            const data: CatBreed[] = await response.json();
            //filter to only include breeds with an image
            const filteredBreeds = data.filter((img) => img.image?.url != null);
            setBreeds(filteredBreeds);
            setSelectedBreed(filteredBreeds[0]);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getBreeds();
    }, []);

    const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreed(breeds[Number(event.target.value)]);
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="flex justify-center w-full">
                <span className="border-2 border-dark-green h-fit mt-12 p-2 rounded">
                    <label className="text-2xl mr-2" htmlFor="breed_selector">
                        Select a breed:
                    </label>
                    <select className="text-2xl" id="breed_selector" onChange={handleBreedChange} value={breeds.indexOf(selectedBreed as CatBreed)}>
                        {breeds.map((breed: CatBreed, index: number) => (
                            <option key={index} value={index}>
                                {breed.name}
                            </option>
                        ))}
                    </select>
                </span>
            </div>

            {selectedBreed && (
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-[46%] mt-12">
                        <img className="rounded" src={selectedBreed.image.url} alt={selectedBreed.name} />
                    </div>
                    <div className="md:w-[46%] border-2 border-dark-green rounded p-4 mt-12">
                        <CatProperty label="Breed" value={selectedBreed.name} />

                        <CatProperty label="Country of origin" value={selectedBreed.origin} />

                        <CatProperty label="Description" value={selectedBreed.description} />

                        <CatProperty label="Temperament" value={selectedBreed.temperament} />

                        <CatPropertyRating label="Affection" ratingNumber={selectedBreed.affection_level} />

                        <CatPropertyRating label="Shedding" ratingNumber={selectedBreed.shedding_level} />

                        <CatProperty
                            label="Learn More"
                            value={
                                <Button target="blank" variant="link" as="a" href={selectedBreed.wikipedia_url}>
                                    Wikipedia
                                </Button>
                            }
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default SelectBreed;
