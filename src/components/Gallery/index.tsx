import React from "react"
import { GiphyImage } from "../../services/giphy"
import { CaptionedImage, CaptionedImageProps } from "../CaptionedImage"
import { Wrapper } from "./Wrapper"

export type GalleryProps = {
    images: Array<GiphyImage>,
} & Pick<CaptionedImageProps, 'caption' | 'captionPosition'>

export const Gallery = ({images, caption, captionPosition }: GalleryProps) => (
    <Wrapper>
        {images.map(image => (
            <CaptionedImage key={image.id} caption={caption} title={image.title} url={image.url} captionPosition={captionPosition} />
        ))}
    </Wrapper>
)