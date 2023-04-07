import clsx from 'clsx';
import React from 'react';

export type ButtonDefaultProps<C extends React.ElementType> = {
    as?: C;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export type ButtonProps<C extends React.ElementType> = ButtonDefaultProps<C> & Omit<React.ComponentProps<C>, keyof ButtonDefaultProps<C>> & ButtonOptions;

type ButtonVariant = 'primary' | 'secondary' | 'link';

interface ButtonOptions {
    variant?: ButtonVariant;
}

const getVariant = (variant: ButtonVariant) => {
    switch (variant) {
        case 'link':
            return 'button-link';
        case 'secondary':
            return 'button-secondary';
        default:
            return;
    }
};

export const Button = <C extends React.ElementType>({ variant = 'primary', children, as, ...restProps }: ButtonProps<C>) => {
    const buttonStyles = clsx('button-primary', getVariant(variant));
    const Component = as || 'button';
    return (
        <Component className={buttonStyles} {...restProps}>
            {children}
        </Component>
    );
};
