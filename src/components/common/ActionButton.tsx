import styled from "styled-components";
import {centerContent, font} from "../../GlobalStyles.ts";
import {changeModalState, setFormHeader, setFormType} from "../../services/store.ts";
import {useDispatch} from "react-redux";
import {ReactNode} from "react";
import {RecordData, ReviewData} from "../../services/types.ts";

export const Button = styled.button<{ fontSize?: number }>`
    ${(({fontSize}) => font(fontSize ?? 24, null, 'Raleway'))};
    text-align: center;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    background: #47AEBC;
    border: none;
    border-radius: 20px;
    color: white;
    ${centerContent};

    transition: background-color 0.4s ease;

    &:hover {
        background-color: #368d99;
    }
`;

const ButtonWrapper = styled.div`
    align-self: center;
    width: fit-content;
    max-width: 100%;
`;

type Props = {
    headerForForm?: string;
    buttonText?: string;
    child?: ReactNode;
    isNeedOnClickHandler?: boolean;
    fontSize?: number;
    formType?: string;
    clickHandler?: (data?: ReviewData | RecordData, endpoint?: string) => void;
    data?: ReviewData | RecordData;
    endpoint?: string;
}

export function ActionButton({headerForForm,
                                 buttonText,
                                 child,
                                 isNeedOnClickHandler = true,
                                 fontSize,
                                 formType = 'record',
                                 clickHandler,
                                 data,
                                 endpoint}: Props) {
    const dispatch = useDispatch();

    let onClickHandler = !isNeedOnClickHandler
        ? undefined
        : clickHandler ? clickHandler : () => {
            dispatch(changeModalState());
            dispatch(setFormHeader(headerForForm));
            dispatch(setFormType(formType));
        }

    return (
        <ButtonWrapper>
            <Button fontSize={fontSize}
                    onClick={() => onClickHandler ? onClickHandler(data, endpoint) : undefined}>
                {child}{buttonText}
            </Button>
        </ButtonWrapper>
    )
}