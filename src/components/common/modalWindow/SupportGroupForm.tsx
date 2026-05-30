import {useEffect, useState} from "react";
import {Alert, Checkbox, TextInput} from "@gravity-ui/uikit";
import {AgeInput} from "./AgeInput.tsx";
import {NameInput} from "./NameInput.tsx";
import {font} from '../../../GlobalStyles.ts'
import styled from "styled-components";
import {Button} from "../ActionButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAllowEmail, changeAllowPhone, changeAllowTelegram, changeAllowWhatsApp,
    changeEmail, changeIsEmailNecessary, changeIsEmailWrong,
    changeIsPhoneNecessary, changeIsPhoneWrong, changePhone, RootState
} from "../../../services/store.ts";
import {SignUpForSupportGroup} from "../../../services/api.ts";

const FormText = styled.span`
    ${font(15, null, 'Raleway')};
`;

export function SupportGroupForm() {
    const dispatch = useDispatch();

    const [alertData, setAlertData] = useState<{ title: string, visible: boolean, type: string }>({
        title: '',
        visible: false,
        type: 'error',
    });

    const name = useSelector((state: RootState) => state.form.name);
    const age = useSelector((state: RootState) => state.form.age);
    const isAgeWrong = useSelector((state: RootState) => state.form.isAgeWrong);

    const phone = useSelector((state: RootState) => state.form.phone);
    const isPhoneWrong = useSelector((state: RootState) => state.form.isPhoneWrong);
    const isPhoneNecessary = useSelector((state: RootState) => state.form.isPhoneNecessary);

    const email = useSelector((state: RootState) => state.form.email);
    const isEmailWrong = useSelector((state: RootState) => state.form.isEmailWrong);
    const isEmailNecessary = useSelector((state: RootState) => state.form.isEmailNecessary);

    const allowPhone = useSelector((state: RootState) => state.form.allowPhone);
    const allowWhatsApp = useSelector((state: RootState) => state.form.allowWhatsApp);
    const allowTelegram = useSelector((state: RootState) => state.form.allowTelegram);
    const allowEmail = useSelector((state: RootState) => state.form.allowEmail);

    useEffect(() => {
        dispatch(changeIsEmailNecessary(allowEmail));
        dispatch(changeIsPhoneNecessary(allowPhone || allowWhatsApp || allowTelegram));
    }, [allowPhone, allowWhatsApp, allowTelegram, allowEmail]);

    const validateEmail = (email: string) => {
        if (email.length === 0) return true;
        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regExp.test(email);
    }

    const handleChangeEmail = (value: string) => {
        dispatch(changeEmail(value));
        dispatch(changeIsEmailWrong(!validateEmail(value)));
    }

    const handleChangePhone = (value: string) => {
        const cleanedValue = value.replace(/\D/g, '');

        let formattedValue = '';
        if (cleanedValue.length > 0) {
            formattedValue = '+7 (';
            if (cleanedValue.length > 1) formattedValue += cleanedValue.substring(1, 4);
            if (cleanedValue.length > 4) formattedValue += ') ' + cleanedValue.substring(4, 7);
            if (cleanedValue.length > 7) formattedValue += '-' + cleanedValue.substring(7, 9);
            if (cleanedValue.length > 9) formattedValue += '-' + cleanedValue.substring(9, 11);
        }

        const isValid = cleanedValue.length >= 11 || cleanedValue.length === 0;
        dispatch(changePhone(formattedValue));
        dispatch(changeIsPhoneWrong(!isValid));
    }

    const handleSubmit = async () => {
        if (name.length === 0) {
            setAlertData({title: 'Ошибка в поле Имя!', visible: true, type: 'error'});
            return;
        }

        if (age.length > 0 && isAgeWrong) {
            setAlertData({title: 'Ошибка в поле Возраст!', visible: true, type: 'error'});
            return;
        }

        if (!allowEmail && !allowPhone && !allowWhatsApp && !allowTelegram) {
            setAlertData({title: 'Должен быть указан хотя бы 1 способ связи!', visible: true, type: 'error'});
            return;
        }

        if (isPhoneNecessary) {
            if (phone.length === 0 || isPhoneWrong) {
                setAlertData({title: 'Ошибка в поле Номер телефона!', visible: true, type: 'error'});
                return;
            }
        }

        if (isEmailNecessary) {
            if (email.length === 0 || isEmailWrong) {
                setAlertData({title: 'Ошибка в поле Email!', visible: true, type: 'error'});
                return;
            }
        }

        const communicationMethod =
            (allowPhone ? 1 : 0) |
            (allowWhatsApp ? 2 : 0) |
            (allowTelegram ? 4 : 0) |
            (allowEmail ? 8 : 0);

        try {
            const response = await SignUpForSupportGroup({
                applicantName: name,
                applicantAge: age.length > 0 ? parseInt(age) : 0,
                applicantPhoneNumber: phone.length > 0 ? phone : null,
                applicantEmail: email.length > 0 ? email : null,
                communicationMethod: communicationMethod,
            });

            if (response.status === 201) {
                setAlertData({
                    title: 'Заявка успешно отправлена! Ждите ответа на указанные способы связи.',
                    visible: true,
                    type: 'success'
                });
            } else if (response.status === 400) {
                const error = await response.json();
                setAlertData({title: `Ошибка: ${error.message}`, visible: true, type: 'error'});
            } else {
                setAlertData({title: 'Что-то пошло не так. Попробуйте позже.', visible: true, type: 'error'});
            }
        } catch {
            setAlertData({title: 'Ошибка соединения с сервером.', visible: true, type: 'error'});
        }
    };

    const handleCloseAlert = () => {
        setAlertData(prev => ({...prev, visible: false}));
    };

    return (
        <>
            <NameInput/>
            <AgeInput/>
            <TextInput label={'Номер телефона:'}
                       placeholder={'+7 (012) 345-67-89'}
                       size={'xl'}
                       hasClear={true}
                       value={phone}
                       note={isPhoneNecessary ? 'Обязательное поле!' : ''}
                       error={isPhoneWrong}
                       errorMessage={'Введите корректный номер телефона (11 цифр)'}
                       onChange={e => handleChangePhone(e.target.value)}
                       onBlur={e => handleChangePhone(e.target.value)}/>
            <TextInput label={'Email:'}
                       placeholder={'example@domain.com'}
                       note={isEmailNecessary ? 'Обязательное поле!' : ''}
                       size={'xl'}
                       hasClear={true}
                       value={email}
                       error={isEmailWrong}
                       errorMessage={'Неверный формат email'}
                       onChange={e => handleChangeEmail(e.target.value)}
                       onBlur={e => handleChangeEmail(e.target.value)}/>
            <FormText>Как с Вами связаться?</FormText>
            <Checkbox content={'Позвонить по телефону'}
                      checked={allowPhone}
                      size={"l"}
                      onUpdate={(checked) => dispatch(changeAllowPhone(checked))}/>
            <Checkbox content={'Написать в WhatsApp'}
                      checked={allowWhatsApp}
                      size={"l"}
                      onUpdate={(checked) => dispatch(changeAllowWhatsApp(checked))}/>
            <Checkbox content={'Написать в Telegram'}
                      checked={allowTelegram}
                      size={"l"}
                      onUpdate={(checked) => dispatch(changeAllowTelegram(checked))}/>
            <Checkbox content={'Написать на почту'}
                      checked={allowEmail}
                      size={"l"}
                      onUpdate={(checked) => dispatch(changeAllowEmail(checked))}/>
            <Button fontSize={16}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                Отправить
            </Button>
            <Alert
                style={{
                    display: alertData.visible ? 'block' : 'none',
                    alignItems: 'center',
                    width: '100%'
                }}
                title={alertData.title}
                theme={alertData.type === 'error' ? 'danger' : 'success'}
                onClose={handleCloseAlert}
            />
        </>
    )
}