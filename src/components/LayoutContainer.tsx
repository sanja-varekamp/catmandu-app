import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export default function LayoutContainer({ children }: Props) {
    return <div className="mx-auto flex w-9/12 flex-wrap">{children}</div>;
}
