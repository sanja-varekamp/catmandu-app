import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export default function LayoutContainer({ children }: Props) {
    return <div className="mx-auto max-w-[1200px] flex w-9/12 flex-wrap">{children}</div>;
}
