import styled from "styled-components"

export const Text = styled.p`
    color: ${({$accent}) => $accent ? "#F3BF99" : "#DCDCDC"};
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: ${({$margin}) => $margin ? "24px" : 0};
`