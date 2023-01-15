import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeckFormProps } from '.';
import { deckColors } from '../../common/utils/constants';

type useDeckFormViewModelProps = Omit<DeckFormProps, 'title'>

export function useDeckFormViewModel({ onSubmit, values }: useDeckFormViewModelProps) {

  const [selectedColor, setSelectedColor] = useState(values?.color || deckColors[0])
  const [deckName, setDeckName] = useState(values?.title || '')

  function handleSelectedColor(color: string) {
    setSelectedColor(color)
  }

  const handlePress = () => {
    const id = values ? values.id : '90'
    const deck = {
      id,
      title: deckName,
      color: selectedColor
    }

    onSubmit(deck)

  };

  return {
    selectedColor,
    deckName,
    handleSelectedColor,
    handlePress,
    setDeckName
  }
}