import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export default function Subtitle({ children }: Props) {
    return <div className="border-2 border-dark-green my-4 h-fit text-2xl p-2 rounded">{children}</div>;
}
