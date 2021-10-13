import React, { useEffect, useState } from "react"
import { Button, ButtonGroup } from "../../components/Buttons"
import { Gallery, GalleryProps } from "../../components/Gallery"
import { FlexBox } from "../../components/Layout/FlexBox"
import { useGiphy, GiphyImage } from "../../services/giphy"
import { QueryForm } from "./QueryForm"

export const Search = () => {
    const [page, setPage] = useState(0)
    const [query, setQuery] = useState('')
    const [caption, setCaption] = useState('')
    const [captionPosition, setCaptionPosition] = useState<GalleryProps['captionPosition']>('top')
    const [images, setImages] = useState<Array<GiphyImage>>([])
    const [loading, setLoading] = useState(false)
    const { search } = useGiphy()


    const getImages = async () => {
        if (query) {
            setLoading(true)
            try {
                const result = await search({query, limit: 3, offset: page * 3, rating: 'g'});
                setImages(result);     
            } finally {
                setLoading(false);
            }
        }
    }
    const onSubmit = () => {
        if (page > 0) {
            setPage(0);
        } else {
            getImages();
        }
    }

    const paginate = (offset: number) => {
        const targetPage = page + offset;

        if(targetPage < 0) {
            setPage(0)
        } else {
            setPage(targetPage)
        }
    }

    useEffect(() => {
        getImages()
    }, [page])

    return (
        <div>
            <QueryForm 
                query={query}
                caption={caption}
                captionPosition={captionPosition}
                onUpdateCaption={setCaption}
                onUpdateCaptionPosition={setCaptionPosition}
                onUpdateQuery={setQuery}
                onSubmit={onSubmit}
            />
            {(!loading && images && images.length > 0) && (
                <>
                    <Gallery images={images} caption={caption} captionPosition={captionPosition} />
                    
                    <ButtonGroup>
                        <Button primary type="button" onClick={() => paginate(-1)}>Prev</Button>
                        <Button primary type="button" onClick={() => paginate(1)}>Next</Button>
                    </ButtonGroup>
                </>
            )}

            {loading && <FlexBox padding={32}>Loading...</FlexBox>}
            
        </div>
    )
}