import React, { useState, useEffect } from 'react'
import { BodyPartConfig, BodyTypeProps } from '../../types'
import BodyPart from '../BodyPart/BodyPart'

interface BodyWrapperProps extends BodyTypeProps<any> {
  bodyParts: BodyPartConfig[]
}

const BodyWrapper = ({
  onChange,
  bodyParts,
  value,
  color,
  selectedColor
}: BodyWrapperProps): JSX.Element => {
  const [selectedParts, setSelectedParts] = useState(value ?? {})

  const handleSelected = (id: string, value: boolean): void => {
    setSelectedParts({ ...selectedParts, ...{ [id]: value } })
  }

  useEffect(() => {
    if (onChange != null) onChange(selectedParts)
  }, [selectedParts])

  return <svg viewBox="0 0 500 500">
    <g transform="matrix(0.205243, 0, 0, 0.205243, 140.503876, 152.15274)">
      {bodyParts.map((bodyPart, index) =>
        <BodyPart key={index} onChange={handleSelected} {...bodyPart} value={selectedParts[bodyPart.id]} color={color} selectedColor={selectedColor} />
      )}
    </g>
  </svg>
}

export default BodyWrapper
