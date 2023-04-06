import React from 'react';
import catLoader from './catLoader.gif';

export default function Loader() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-white">
            <img src={catLoader} height="80px" width="80px" alt="loading..." />
        </div>
    );
}
