import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState, changeModalState} from "../../../services/store.ts";
import {centerContent, font} from "../../../GlobalStyles.ts";
import {ReviewForm} from "./ReviewForm.tsx";
import {RecordForm} from "./RecordForm.tsx";
import {VolunteerForm} from "./VolunteerForm.tsx";

const FormContainer = styled.form`
    ${centerContent};
    flex-direction: column;
    align-items: start;
    gap: 15px;
    height: max-content;
    width: min-content;
    min-width: 400px;
    padding: 40px 45px;
    position: relative;
`;

const FormHeader = styled.span`
    ${font(26, null, 'Golos')};
    margin-bottom: 10px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #888;
    font-size: 20px;
    line-height: 1;
    padding: 0;
    transition: background 0.15s, color 0.15s;

    &:hover {
        background: #f0f0f0;
        color: #333;
    }
`;

export function ModalForm() {
    const dispatch = useDispatch();
    const header = useSelector((state: RootState) => state.app.formHeader);
    const formType = useSelector((state: RootState) => state.app.formType);

    return (
        <FormContainer>
            <CloseButton
                type="button"
                aria-label="Закрыть"
                onClick={() => dispatch(changeModalState())}
            >
                ✕
            </CloseButton>
            <FormHeader>{header}</FormHeader>
            {formType === "review"
                ? <ReviewForm />
                : formType === "volunteer"
                    ? <VolunteerForm />
                    : <RecordForm />}
        </FormContainer>
    )
}