import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    position: relative;
    width: 320px;
    margin: ${theme.layout.padding}px;
    border-radius: ${theme.layout.borderRadius}px;
    overflow: hidden;
    background: white;
`