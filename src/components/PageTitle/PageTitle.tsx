import React from 'react';

interface Props {
    title: string;
    children?: React.ReactNode;
}

export default function PageTitle({ title, children }: Props) {
    return (
        <div className="bg-cat-texture w-full min-h-[150px] flex justify-center bg-center ">
            <h2 className="bg-cat-texture text-3xl font-extrabold mt-12">{title}</h2>
            {children}
        </div>
    );
}
