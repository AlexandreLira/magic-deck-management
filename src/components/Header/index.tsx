import React from 'react';

import { ArrowLeft, BackButton, Container, Edit, EditButton, Title } from './styles';

interface Props {
  title: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export function Header({ title = 'Header', onPressLeft, onPressRight }: Props) {
  return (
    <Container>
      {onPressLeft &&
        <BackButton onPress={onPressLeft}>
          <ArrowLeft />
        </BackButton>
      }

      <Title>{title}</Title>

      {onPressRight &&
        <EditButton onPress={onPressRight}>
          <Edit />
        </EditButton>
      }

    </Container>
  );
}
