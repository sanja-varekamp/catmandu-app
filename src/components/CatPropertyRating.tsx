import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import CatProperty from './CatProperty';

interface Props {
    ratingNumber: number;
    label: string;
}

export default function CatPropertyRating({ ratingNumber, label }: Props) {
    const fullRating = ratingNumber;
    const emptyRating = 5 - ratingNumber;
    const catRating = [];

    for (let i = 0; i < fullRating; i++) {
        catRating.push(
            <span className="text-dark-green">
                <FontAwesomeIcon key={`cat-${i}`} size="xl" icon={faShieldCat} />
            </span>
        );
    }
    for (let i = 0; i < emptyRating; i++) {
        catRating.push(
            <span className="text-gray-300">
                <FontAwesomeIcon key={`cat-${i}`} size="xl" icon={faShieldCat} />
            </span>
        );
    }

    return (
        <>
            <div className="flex items-center mt-3">
                <CatProperty label={label} />
                <div className="flex flex-row ml-2">{catRating}</div>
            </div>
        </>
    );
}
