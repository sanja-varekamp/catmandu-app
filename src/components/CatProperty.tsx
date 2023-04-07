import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

interface Props {
    label: string;
    value: React.ReactNode;
}

export default function CatProperty({ label, value }: Props) {
    return (
        <p className="text-2xl font-extrabold mt-3 first:mt-0">
            <span className="mr-3 text-pink">
                <FontAwesomeIcon icon={faPaw} />
            </span>
            {label}: <span className="text-2xl font-normal">{value}</span>
        </p>
    );
}
