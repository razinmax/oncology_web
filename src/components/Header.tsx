import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import vkIcon from '../assets/images/vk.svg';
import tgIcon from '../assets/images/TGLogo.svg';
import rutubeIcon from '../assets/images/rutube_icon.png';
import {rutubeRedirect, tgRedirect, vkRedirect} from "../services/commonHandlers.ts";

import {Dropdown} from './common/Dropdown';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;

    background-color: #FCFEF1;

    display: flex;
    justify-content: center;

    padding: 15px 20px;
`;

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1400px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const NavLink = styled.a`
    text-decoration: none;

    color: #00373E;

    font-size: 18px;
    font-family: 'Open Sans', sans-serif;

    transition: 0.2s;

    &:hover {
        color: #47AEBC;
    }
`;

const NavButton = styled.button`
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;

    color: #00373E;

    font-size: 18px;
    font-family: 'Open Sans', sans-serif;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: #47AEBC;
    }
`;

const Logo = styled.img`
    width: 170px;
    height: auto;

    cursor: pointer;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Phone = styled.div`
    color: #00373E;

    font-size: 18px;
    font-family: 'Open Sans', sans-serif;

    white-space: nowrap;
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SocialIcon = styled.img`
    width: 35px;
    height: 35px;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const Header = () => {

    const navigate = useNavigate();
    
    return (
        <HeaderWrapper>

            <HeaderContainer>

                <Nav>
                    <Dropdown
                        title="О нас"
                        menuBg="#FCFEF1"
                        items={[
                            {label: 'Команда', href: '/team'},
                            {label: 'Отчёты', href: '#reports'},
                        ]}
                    />

                    <NavLink href="#events">
                        События
                    </NavLink>

                    <NavButton onClick={() => navigate('/contacts')}>
                        Контакты
                    </NavButton>

                    <NavLink href="#courses">
                        Курсы
                    </NavLink>

                    <NavLink href="#projects">
                        Проекты
                    </NavLink>
                </Nav>

                <Logo
                    src={logo}
                    alt="Логотип"
                    onClick={() => navigate('/')}
                />

                <RightSection>

                    <ButtonWrapper>

                        <Dropdown
                            title="Нужна помощь"
                            bg="#47AEBC"
                            color="white"
                            menuBg="#47AEBC"
                            menuTextColor="white"
                            items={[
                                {label: 'Консультации', href: '#consulting'},
                                {label: 'Группы поддержки', href: '#groups'},
                                {label: 'Статьи', href: '#articles'},
                            ]}
                        />

                        <Dropdown
                            title="Хочу помочь"
                            bg="#6F5BA6"
                            color="white"
                            menuBg="#6F5BA6"
                            menuTextColor="white"
                            items={[
                                {label: 'Пожертвование', href: '#donation'},
                                {label: 'Волонтёрство', href: '#volunteer'},
                            ]}
                        />

                    </ButtonWrapper>

                    <Phone>
                        +7 (908) 939-78-01
                    </Phone>

                    <Socials>
                            <SocialIcon src={vkIcon} alt="VK" onClick={vkRedirect}/>
                            <SocialIcon src={tgIcon} alt="Telegram" onClick={tgRedirect}/>
                            <SocialIcon src={rutubeIcon} alt="Rutube" onClick={rutubeRedirect}/>
                    </Socials>

                </RightSection>

            </HeaderContainer>

        </HeaderWrapper>
    );
};