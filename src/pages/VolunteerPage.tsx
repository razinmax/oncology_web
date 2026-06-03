import styled from "styled-components";
import {MainSection} from "./mainPage.tsx";
import {ScrollArticleBlock} from "../components/blocks/ScrollArticleBlock.tsx";
import volunteerPhoto from '../assets/images/volunteer.jpg'
import { UniversalForm } from "../components/common/UniversalForm.tsx";

const PageWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 40px;
`;

export function VolunteerPage() {
    return (
        <MainSection style={{maxWidth: "1100px", margin: "0 auto", width: "100%"}}>
            <PageWrapper>

                <ScrollArticleBlock
                    title="Волонтёрство"
                    text="Присоединяйтесь к нашей команде волонтёров! Мы нуждаемся в добровольцах, которые хотят помочь нашим клиентам и участвовать в различных проектах. Станьте частью нашей команды и сделайте мир лучше."
                    photo={volunteerPhoto}
                    isReversed={false}
                    buttonText="Стать волонтёром"
                    height={500}
                    anchorId="volunteer-form"
                />

                <div id="volunteer-form" style={{marginTop: "80px"}}>
                    <UniversalForm
                        header="Запись на волонтёрство"
                        formType="volunteer"
                    />
                </div>

            </PageWrapper>
        </MainSection>
    );
}