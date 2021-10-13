import React, { FormEvent } from "react"
import { Button } from "../../../components/Buttons"
import { GalleryProps } from "../../../components/Gallery"
import { Label } from "../../../components/Inputs"
import { Form } from "./Form"

export type QueryFormProps = {
    query: string,
    caption: string,
    captionPosition: string,
    onUpdateQuery: (value: string) => void,
    onUpdateCaption: (value: string) => void,
    onUpdateCaptionPosition: (value: GalleryProps['captionPosition']) => void,
    onSubmit: () => void
}

export const QueryForm = ({ 
    query,
    caption,
    captionPosition,
    onUpdateCaption,
    onUpdateQuery,
    onUpdateCaptionPosition,
    onSubmit
}: QueryFormProps) => {
    const handleInputUpdate = (e: FormEvent, cb: (s: string) => void) => {
        const { value } = e.target as HTMLInputElement
        cb(value) 
    }

    const handleCaptionPositionChange = (e: FormEvent) => {
        const { value } = e.target as HTMLSelectElement

        onUpdateCaptionPosition(value as GalleryProps['captionPosition']);
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <span>Query</span>
                <input type="search" value={query} onInput={e => handleInputUpdate(e, onUpdateQuery)} />
            </Label>
            <Label>
                <span>Caption</span><input type="text" value={caption} onInput={e => handleInputUpdate(e, onUpdateCaption)} />
            </Label>
            <Label>
                <span>Caption Position</span>
                <select value={captionPosition} onChange={handleCaptionPositionChange}>
                    <option value="top">over - top</option>
                    <option value="bottom">over - bottom</option>
                    <option value="below">below</option>
                </select>
            </Label>
            <Button primary type="submit">Search</Button>
        </Form>
    )
}