import React, { useState } from 'react';
import { Button } from '../Button';

const UploadACat: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [subId, setSubId] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubId(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!file) {
            console.error('No file selected');
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

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="border-2 border-dark-green p-2 mx-auto my-4">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="my-2">
                    <label className="font-bold text-2xl mr-2" htmlFor="file-input">
                        Select a file:
                    </label>
                    <input type="file" id="file-input" onChange={handleFileChange} />
                </div>
                <div className="my-2">
                    <label className="font-bold text-2xl mr-2" htmlFor="sub-id-input">
                        Kitty name:
                    </label>
                    <input className="border-2" type="text" id="sub-id-input" value={subId} onChange={handleSubIdChange} />
                </div>
                <div className="self-center">
                    <Button type="submit">Upload</Button>
                </div>
            </form>
        </div>
    );
};

export default UploadACat;
