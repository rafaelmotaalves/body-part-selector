import React from "react"

export interface BodyTypeProps<T> {
  onChange?: (
    data: T
  ) => void,
  value?: T,
  color?: string,
  selectedColor?: string
}

export type BodyType<T> = React.ComponentType<BodyTypeProps<T>>

export interface BodyPartConfig {
  id: string,
  title: string,
  d: string
}