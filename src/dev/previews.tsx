import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import _document from "../pages/_document";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path="/_document">
      <_document/>
    </ComponentPreview>
  </Previews>
}

export default ComponentPreviews
