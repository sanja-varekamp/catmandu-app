import React from 'react';
import { Cat } from '../pages/CatGallery';

export interface CatCardProps {
    cat: Cat;
}

const CatCard: React.FunctionComponent<CatCardProps> = ({ cat }) => {
    const breed = cat.breeds[0] || {};
    return (
        <div className="border-[4px] border-light-green rounded w-[400px] h-[380px] flex m-5 flex-col justify-between">
            <div className="items-center flex h-[300px]">
                <img className="h-full min-w-full object-cover" src={cat.url} alt="Cute cat" />
            </div>
            <div className="h-[80px] bg-transparent-green flex">{breed.name}</div>
        </div>
    );
};

export default CatCard;
