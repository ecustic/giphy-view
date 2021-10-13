import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 970px) {
        flex-direction: column;
    }
`