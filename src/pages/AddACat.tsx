import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import UploadForm from '../components/AddACat/UploadForm';
import PageTitle from '../components/PageTitle';
import MyCats from '../components/MyCats';

const AddACat: React.FunctionComponent = () => {
  return (
    <LayoutContainer>
      <PageTitle title="Add A Cat" />
      <UploadForm />
      <MyCats />
    </LayoutContainer>
  );
};

export default AddACat;
