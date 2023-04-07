import React from 'react';
import { Cat } from '../pages/CatGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

export interface CatCardProps {
    cat: Cat;
}

const CatCard: React.FunctionComponent<CatCardProps> = ({ cat }) => {
    const breed = cat.breeds[0] || {};
    return (
        <div className="border-[4px] border-light-green rounded w-[400px] h-[430px] flex m-5 flex-col justify-between">
            <div className="h-[50px] bg-transparent-pink flex">
                <p className="text-2xl p-2 ">{breed.name}</p>
            </div>
            <div className="items-center flex h-[300px]">
                <img className="h-full min-w-full object-cover" src={cat.url} alt="Cute cat" />
            </div>
            <div className="h-[80px] bg-transparent-green flex items-center">
                <span className="px-2">
                    <FontAwesomeIcon icon={faCat} size="2xl" />
                </span>
                <span className="px-2 text-xl">{breed.temperament}</span>
            </div>
        </div>
    );
};

export default CatCard;
