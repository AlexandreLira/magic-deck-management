import React from 'react';

import { CardModel } from '../../common/models/card.model';
import { CARD_DEFAULT_IMAGE } from '../../common/utils/constants';

import {
  CardImage,
  Container,
  Content,
  Footer,
  Info,
  Name,
  Text,
  Title
} from './styles';

interface Props {
  data: CardModel,
  translateY: any
}

export function CardDetails({ data, translateY }: Props) {
  return (
    <Container style={{ transform: [{ translateY }] }}>
      <CardImage source={{ uri: data.image_uris?.normal || CARD_DEFAULT_IMAGE}} />
      <Content>
        <Name>{data.name}</Name>


        <Info>
          <Title>Collector number:</Title>
          <Text>{data.collector_number}</Text>
        </Info>

        <Info>
          <Title>Rarity:</Title>
          <Text>{data.rarity}</Text>
        </Info>

        <Info>
          <Title>Artist:</Title>
          <Text>{data.artist}</Text>
        </Info>

      </Content>
    </Container>
  );
}
