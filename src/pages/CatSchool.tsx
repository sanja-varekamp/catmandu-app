import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import PageTitle from '../components/PageTitle/PageTitle';
import SelectBreed from '../components/SelectBreed';

export default function CatSchool() {
    return (
        <LayoutContainer>
            <PageTitle title="Learn About Cat Breeds" />
            <SelectBreed />
        </LayoutContainer>
    );
}