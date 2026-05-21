import styled from 'styled-components';
import {TeamInfoBlock} from "../components/blocks/TeamInfoBlock.tsx";

const TeamPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 50px;

    padding: 40px 5% 80px;
`;

export function TeamPage() {

    return (
        <TeamPageContainer>
            <TeamInfoBlock />
        </TeamPageContainer>
    )
}