import styled, { css } from "styled-components";
import { theme } from "../../theme";

export type CaptionProps = {
    position: 'top' | 'bottom' | 'below'
}

export const Caption = styled.div<CaptionProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.layout.padding}px;
    background: rgba(0,0,0,0.5);
    color: white;
    font-weight: bold;

    left: 0;
    right: 0;

    ${({ position }) => position === 'top' && css`
        position: absolute;
        top: 0;
    `}

    ${({ position }) => position === 'bottom' && css`
        position: absolute;
        bottom: 0;
    `}
`