import React from 'react';
import { TouchableOpacityProps } from 'react-native/types';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: string;
    disabled?: boolean;
}

export function Button({
    title,
    color,
    disabled,
    ...rest
}: ButtonProps) {
    return (
        <Container
            color={color}
            disabled={disabled}
            {...rest}
        >
            <Title>{title}</Title>
        </Container>
    );
}
