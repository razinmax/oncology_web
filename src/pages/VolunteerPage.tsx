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
                    text="Если вы хотите сделать важное дело и поддержать тех, кто сталкивается с онкодиагнозом, присоединяйтесь к нашей команде волонтёров. Вместе мы создаём пространство заботы и силы. Ждём в команду волонтёров специалистов в области продвижения НКО, копирайтинга, smm-менеджмента, фандрайзинга и других сферах. Сотрудничаем со студентами и образовательными учреждениями."
                    photo={volunteerPhoto}
                    isReversed={false}
                    buttonText="Стать волонтёром"
                    height={550}
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