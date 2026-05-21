import styled from 'styled-components';
import {centerContent, font} from "../../GlobalStyles.ts";

const MemberArticle = styled.article<{
    $bgColor?: string;
}>`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;

    ${centerContent()};

    justify-content: space-between;
    align-items: stretch;

    gap: 5%;
    padding: 5% 6%;
    overflow: hidden;

    background-color: ${({ $bgColor }) =>
        $bgColor || 'transparent'};

    border-radius: 70px;
`;

const ContentContainer = styled.div`
    flex: 1;

    display: flex;
    align-items: center;

    transform: translateY(-4px);
`;

const Name = styled.h2`
    ${font(40, 48, 'Golos')};

    text-align: center;
`;

const Description = styled.p`
    ${font(20, 35, 'Raleway')};
    flex: 1;

  white-space: pre-line;
`;

const LeftSide = styled.div`
    width: 280px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 25px;

    flex-shrink: 0;
`;

const ImageContainer = styled.div`
    width: 260px;
    height: 260px;

    border-radius: 50%;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
`;

const Image = styled.img<{
    $position?: string;
}>`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: ${({ $position }) => $position || 'center'};
`;

interface TeamMemberBlockProps {
    name: string;
    description: string;
    photo: string;

    isReversed?: boolean;
    bgColor?: string;
    imgWidth?: number;

    imagePosition?: string;
}

export function TeamMemberBlock({
    name,
    description,
    photo,
    isReversed = false,
    bgColor,
    imgWidth,
    imagePosition
}: TeamMemberBlockProps) {

return (
    <MemberArticle $bgColor={bgColor}>
        {isReversed ? (
            <>
                <ContentContainer>
                    <Description>
                        {description}
                    </Description>
                </ContentContainer>

                <LeftSide>
                    <ImageContainer>
                        <Image
                            src={photo}
                            alt={name}
                            $position={imagePosition}
                            style={imgWidth ? { width: `${imgWidth}%` } : {}}
                        />
                    </ImageContainer>

                    <Name>{name}</Name>
                </LeftSide>
            </>
        ) : (
            <>
                <LeftSide>
                    <ImageContainer>
                        <Image
                            src={photo}
                            alt={name}
                            $position={imagePosition}
                            style={imgWidth ? { width: `${imgWidth}%` } : {}}
                        />
                    </ImageContainer>

                    <Name>{name}</Name>
                </LeftSide>

                <ContentContainer>
                    <Description>
                        {description}
                    </Description>
                </ContentContainer>
            </>
        )}
    </MemberArticle>
);
}