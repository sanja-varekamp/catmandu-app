import React from 'react';
import { Cat } from '../pages/CatGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export interface CatCardProps {
  cat: Cat;
  hasPropertiesSection: boolean;
  hasRemoveButton?: boolean;
}

const CatCard: React.FunctionComponent<CatCardProps> = ({ cat, hasPropertiesSection, hasRemoveButton }: CatCardProps) => {
  const breed = cat.breeds[0] || {};
  return (
    <div className={`${hasPropertiesSection ? 'min-h-[430px]' : 'min-h-[350px]'} border-[4px] border-light-green rounded w-[400px]  flex m-5 flex-col justify-between`}>
      <div className="h-[50px] bg-transparent-pink items-center flex justify-between">
        <p className="text-2xl p-2 ">{breed.name ? breed.name : cat.sub_id}</p>
        {hasRemoveButton && (
          <span className="px-2 text-dark-green hover:text-red-500">
            <FontAwesomeIcon title="Remove image" icon={faTrashCan} />
          </span>
        )}
      </div>
      <div className="items-center flex h-[300px]">
        <img className="h-full min-w-full object-cover" src={cat.url} alt={breed.name} />
      </div>
      {hasPropertiesSection && (
        <div className="min-h-[80px] bg-transparent-green flex items-center ">
          <span className="px-2">
            <FontAwesomeIcon icon={faCat} size="2xl" />
          </span>
          <span className="px-2 text-xl">{breed.temperament}</span>
        </div>
      )}
    </div>
  );
};

export default CatCard;
