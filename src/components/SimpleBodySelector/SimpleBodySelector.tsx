import React from 'react';
import BodyWrapper from "../BodyWrapper"
import { BodyTypeProps } from "../../types";

import simpleBodyParts from "../../assets/simple-body.json";

export interface SimpleBodySelectorData {
  head?: boolean,
  leftArm?: boolean,
  rightArm?: boolean,
  torso?: boolean,
  leftLeg?: boolean,
  rightLeg?: boolean
}

export type SimpleBodySelectorProps = BodyTypeProps<SimpleBodySelectorData>;

const SimpleBodySelector = (props: SimpleBodySelectorProps) =>
  <BodyWrapper
    bodyParts={simpleBodyParts}
    {...props}
  />

export default SimpleBodySelector;