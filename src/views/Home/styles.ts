import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderContainer = styled.header``;

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center ;
    text-align: start;

    width: 100%;
    max-width: 800px;
    gap: 30px;
    margin-top: 60px ;

    h1 {
        font-size: 4rem;
        color: var(--white);
        width: 100%;
    }

    h2 {
        font-size: 1.5rem;
        color: var(--light-blue);
        width: 100%;
    }

    svg {
        width: min(500px, 100%);
        height: auto;
    }
`;
