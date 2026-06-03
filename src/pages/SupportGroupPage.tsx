import styled from "styled-components";
import {MainSection} from "./mainPage.tsx";
import {ScrollArticleBlock} from "../components/blocks/ScrollArticleBlock.tsx";
import groupsPhoto from '../assets/images/groups.jpg'
import { UniversalForm } from "../components/common/UniversalForm.tsx";

const PageWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 40px;
`;

export function SupportGroup() {
    return (
        <MainSection style={{maxWidth: "1100px", margin: "0 auto", width: "100%"}}>
            <PageWrapper>

                <ScrollArticleBlock
                    title="Группы поддержки"
                    text="Группы поддержки — это пространство доверия и взаимопонимания, где люди, столкнувшиеся с онкологическим диагнозом или поддерживающие близких, могут поделиться своими переживаниями и найти поддержку. Это сообщество, помогающее справляться со страхами, чувством одиночества, бессилия и находить ресурсы для внутреннего равновесия и надежды. Встречи проходят на бесплатной основе в кабинетах доверия Челябинска и Миасса, а также онлайн, чтобы каждый мог выбрать удобный для себя формат."
                    photo={groupsPhoto}
                    isReversed={false}
                    buttonText="Присоединиться к группе поддержки"
                    height={750}
                    anchorId="support-group-form"
                />

                <div id="support-group-form" style={{marginTop: "80px"}}>
                    <UniversalForm
                        header="Запись в группы поддержки"
                        formType="supportGroup"
                    />
                </div>

            </PageWrapper>
        </MainSection>
    );
}