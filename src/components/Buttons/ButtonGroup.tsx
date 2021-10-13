import styled from "styled-components"
import { Button } from "./Button"

import { theme } from "../../theme"

export const ButtonGroup = styled.div`
    display: flex;
    border-radius: ${theme.layout.borderRadius}px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
`