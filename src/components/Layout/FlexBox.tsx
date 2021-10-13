import styled, { css } from "styled-components"

export type FlexBoxProps = {
    align?: 'flex-start' | 'center' | 'flex-end',
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between',
    direction?: 'row' | 'column',
    padding?: number,

}

export const FlexBox = styled.div<FlexBoxProps>`
    display: flex;    

    ${({ direction }) => direction && css`
        flex-direction: ${direction};
    `}
    ${({ align }) => align && css`
        align-items: ${align};
    `}
    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}
    ${({ padding }) => padding && css`
        padding: ${padding}px;
    `}    
`