import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import UploadACat from '../components/AddACat/UploadACat';
import PageTitle from '../components/PageTitle';
import MyCats from '../components/MyCats';

const AddACat: React.FunctionComponent = () => {
    return (
        <LayoutContainer>
            <PageTitle title="Add A Cat" />
            <UploadACat />
            <MyCats />
        </LayoutContainer>
    );
};

export default AddACat;
