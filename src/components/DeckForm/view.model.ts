import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeckFormProps } from '.';
import { deckColors } from '../../common/utils/constants';



export function useDeckFormViewModel({ onSubmit, values }: DeckFormProps) {

  const [selectedColor, setSelectedColor] = useState(values?.color || deckColors[0])
  const [deckName, setDeckName] = useState(values?.title || '')

  function handleSelectedColor(color: string) {
    setSelectedColor(color)
  }

  const handlePress = () => {
    const deck = {
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