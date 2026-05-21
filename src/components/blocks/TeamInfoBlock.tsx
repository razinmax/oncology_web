import styled from 'styled-components';
import {centerContent, font} from "../../GlobalStyles.ts";

const TeamInfoArticle = styled.article`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 70px;

    ${centerContent()};
    flex-direction: column;
    justify-content: center;

    padding: 80px 0;
    gap: 35px;

    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
`;

const TeamInfoHeader = styled.h1`
    ${font(70, null, 'Golos')};
`;

const TeamInfoText = styled.p`
    ${font(24, 42, 'Raleway')};

    width: 78%;
    text-align: left;
`;

export function TeamInfoBlock() {
    return (
        <TeamInfoArticle>
            <TeamInfoHeader>Наша команда</TeamInfoHeader>

            <TeamInfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TeamInfoText>

            <TeamInfoText>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </TeamInfoText>
        </TeamInfoArticle>
    )
}