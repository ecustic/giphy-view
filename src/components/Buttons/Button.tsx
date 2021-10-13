import styled, { css } from "styled-components"
import { theme } from "../../theme"

export type ButtonProps = {
    primary?: boolean,
    secondary?: boolean,
}

export const Button = styled.button<ButtonProps>`
    display: block;
    padding: ${theme.layout.padding}px;
    border-radius: ${theme.layout.borderRadius}px;
    color: white;
    border: 0;

    ${({ primary }) => primary && css`
        background: ${theme.colors.primary};
    `}

    ${({ secondary }) => secondary && css`
        background: ${theme.colors.secondary};
    `}
`