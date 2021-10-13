import React from "react";
import { Wrapper } from "./Wrapper"
import { Image } from './Image'
import { Caption } from './Caption'
import type { CaptionProps } from './Caption'

export type CaptionedImageProps = {
    title: string,
    caption: string,
    url: string,
    captionPosition: CaptionProps['position']
}

export const CaptionedImage = ({ title, caption, url, captionPosition }: CaptionedImageProps) => (
    <Wrapper>
        <Image src={url} alt={title} />
        {(caption && captionPosition) && <Caption position={captionPosition}>{caption}</Caption>}
    </Wrapper>
)