import React, { useState, useRef } from 'react';
import { Button } from '../Button';
import Loader from '../Loader/Loader';

const UploadForm: React.FunctionComponent = () => {
  const [subId, setSubId] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [subIdError, setSubIdError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>('' || null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setFileError(null);
    } else {
      setFile(null);
      setFileError('Please upload a file');
    }
    if (files && files.length > 0) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedTypes.includes(files[0].type)) {
        setFileError('Please upload a PNG, JPEG or JPG file');
        setFile(null);
        return;
      }
      setFile(files[0]);
      setFileError(null);
    }
  };

  const handleSubIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSubId(value);
    setSubIdError(validateSubId(value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    const subIdError = validateSubId(subId);
    setSubIdError(subIdError);

    if (subIdError || !file) {
      setIsLoading(false);
      setFileError(!file ? 'Please upload a file' : null);
      setUploadStatus('Upload failed');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', subId);

    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/upload', {
        method: 'POST',
        headers: {
          'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
        },
        body: formData
      });

      if (response.ok) {
        setUploadStatus('Upload successful!');
        setSubId('');
        setFile(null);
      } else {
        setUploadStatus('Upload failed');
      }

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setUploadStatus('');
    }, 5000);
  };

  return (
    <div className="border-2 border-dark-green p-2 mx-auto my-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="font-bold text-2xl mr-2" htmlFor="file-input">
            Select a file:
          </label>
          <input type="file" ref={fileInputRef} id="file-input" onChange={handleFileChange} />
          {fileError && <p className="text-red-500">{fileError}</p>}
        </div>
        <div className="my-2">
          <label className="font-bold text-2xl mr-2" htmlFor="sub-id-input">
            Cat name:
          </label>
          <input className="border-2" type="text" id="sub-id-input" value={subId} onChange={handleSubIdChange} />
          {subIdError && <p className="text-red-500">{subIdError}</p>}
        </div>

        <div className="self-center">
          <Button type="submit">The button!</Button>
        </div>
        {isLoading && (
          <div className="">
            <Loader small />
          </div>
        )}
        {uploadStatus && (
          <div className="w-full flex justify-center">
            <p className="text-2xl w-fit">{uploadStatus}</p>
          </div>
        )}
      </form>
    </div>
  );
};

function validateSubId(subId: string): string | null {
  if (!subId.trim()) {
    return 'Please fill in a name';
  }
  if (!/^[a-zA-Z]{2,}$/.test(subId)) {
    return 'Name should have at least 2 letters, no numbers, no space';
  }
  return null;
}

export default UploadForm;
