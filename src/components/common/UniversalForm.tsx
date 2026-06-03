import styled from "styled-components";
import {font} from "../../GlobalStyles.ts";
import {ReviewForm} from "./modalWindow/ReviewForm.tsx";
import {RecordForm} from "./modalWindow/RecordForm.tsx";
import {VolunteerForm} from "./modalWindow/VolunteerForm.tsx";
import {SupportGroupForm} from "./modalWindow/SupportGroupForm.tsx";

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 120px; /* расстояние до футера */
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 600px;

    background: rgba(0, 177, 197, 0.1);
    border-radius: 24px;

    padding: 40px 45px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    box-sizing: border-box;
`;

const FormHeader = styled.h2`
    ${font(28, null, 'Golos')};
    margin: 0 0 10px 0;
`;

interface UniversalFormProps {
    header: string;
    formType: "review" | "volunteer" | "supportGroup" | "record";
}

export function UniversalForm({header, formType}: UniversalFormProps) {
    return (
        <FormWrapper>
            <FormContainer>
                <FormHeader>{header}</FormHeader>

                {formType === "review" && <ReviewForm />}
                {formType === "volunteer" && <VolunteerForm />}
                {formType === "supportGroup" && <SupportGroupForm />}
                {formType === "record" && <RecordForm />}
            </FormContainer>
        </FormWrapper>
    );
}