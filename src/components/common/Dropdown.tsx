import styled from 'styled-components';
import {useState} from 'react';
import {FiChevronDown} from 'react-icons/fi';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Trigger = styled.button<{
    bg?: string;
    color?: string;
}>`
    background: ${({bg}) => bg || 'transparent'};
    color: ${({color}) => color || '#00373E'};

    border: none;
    border-radius: 15px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    min-height: 42px;

    padding: ${({bg}) => bg ? '6px 20px' : '0'};

    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    line-height: 25px;

    transition: 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;

const Arrow = styled(FiChevronDown)<{
    isOpen: boolean;
}>`
    transition: transform 0.2s ease;

    transform: ${({isOpen}) =>
            isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const Menu = styled.div<{
    isOpen: boolean;
    menuBg?: string;
    menuTextColor?: string;
}>`
    position: absolute;

    top: calc(100% + 6px);
    left: 0;

    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: 10px;

    min-width: 220px;

    padding: 15px;

    background: ${({menuBg}) => menuBg || 'white'};

    color: ${({menuTextColor}) => menuTextColor || '#00373E'};

    border-radius: 15px;

    box-shadow: 0 10px 30px rgba(0,0,0,0.1);

    z-index: 1000;

    &::before {
        content: '';

        position: absolute;

        top: -10px;
        left: 0;

        width: 100%;
        height: 10px;
    }
`;

const Item = styled.a`
    text-decoration: none;

    color: inherit;

    font-size: 16px;
    font-family: 'Open Sans', sans-serif;

    transition: 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;

type DropdownProps = {
    title: string;

    items: {
        label: string;
        href: string;
    }[];

    bg?: string;
    color?: string;
    menuBg?: string;
    menuTextColor?: string;
};

export const Dropdown = ({
    title,
    items,
    bg,
    color,
    menuBg,
    menuTextColor,
}: DropdownProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Trigger
                bg={bg}
                color={color}
            >
                <>
                {title}
                <Arrow isOpen={isOpen}/>
            </>
            </Trigger>

            <Menu
                isOpen={isOpen}
                menuBg={menuBg}
                menuTextColor={menuTextColor}
            >
                {items.map(item => (
                    <Item
                        key={item.label}
                        href={item.href}
                    >
                        {item.label}
                    </Item>
                ))}
            </Menu>
        </Wrapper>
    );
};