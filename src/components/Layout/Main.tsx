import styled from 'styled-components'
import { theme } from '../../theme'

export const Main = styled.main`
    padding: ${theme.layout.padding * 2}px;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex: 1;
    background: ${theme.colors.secondary};
`