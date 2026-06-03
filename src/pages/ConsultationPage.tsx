import styled from "styled-components";
import {MainSection} from "./mainPage.tsx";
import {ScrollArticleBlock} from "../components/blocks/ScrollArticleBlock.tsx";
import counselingPhoto from "../assets/images/counseling.jpg";
import { UniversalForm } from "../components/common/UniversalForm.tsx";

const PageWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 40px;
`;

export function ConsultationPage() {
    return (
        <MainSection style={{maxWidth: "1100px", margin: "0 auto", width: "100%"}}>
            <PageWrapper>

                <ScrollArticleBlock
                    title="Консультация"
                    text="Запишитесь на консультацию к психологу. Мы оказываем психологическую поддержку в кабинетах доверия в Челябинске и Миассе, работаем онлайн для тех, у кого нет возможности прийти лично, а также по запросу выходим в стационар. Мы готовы выслушать и поддержать вас в любой ситуации."
                    photo={counselingPhoto}
                    isReversed={false}
                    buttonText="Записаться на консультацию"
                    height={500}
                    anchorId="consultation-form"
                />

                <div id="consultation-form" style={{marginTop: "80px"}}>
                    <UniversalForm
                        header="Запись на консультацию"
                        formType="record"
                    />
                </div>

            </PageWrapper>
        </MainSection>
    );
}