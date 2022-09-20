import React, { useState } from 'react'
import styled from 'styled-components'

const DEFAULT_COLOR = 'black'
const DEFAULT_SELECTED_COLOR = 'red'

const StyledPath = styled.path<{
  selected: boolean
  color: string
  selectedColor: string
}>`
  fill: ${p => p.selected ? p.selectedColor : p.color};
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: .8;
  }
`
export interface BodyPartProps {
  title: string
  d: string
  id: string
  value: boolean
  color?: string
  selectedColor?: string
  onChange?: (
    id: string,
    value: boolean,
  ) => void
}

const BodyPart = ({
  title,
  d,
  id,
  value,
  color = DEFAULT_COLOR,
  selectedColor = DEFAULT_SELECTED_COLOR,
  onChange
}: BodyPartProps): JSX.Element => {
  const [isSelected, setSelected] = useState(Boolean(value))

  const toggleSelected = (): void => {
    const value = !isSelected
    if (onChange != null) onChange(id, value)
    setSelected(value)
  }

  return <StyledPath
    d={d}
    onClick={toggleSelected}
    selected={isSelected}
    color={color}
    selectedColor={selectedColor}
  >
    <title>{title}</title>
  </StyledPath>
}
export default BodyPart
