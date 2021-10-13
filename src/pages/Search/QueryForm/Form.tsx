import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 970px) {
        flex-direction: column;
    }
`