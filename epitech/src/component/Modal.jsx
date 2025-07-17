import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
    // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ModalBackdrop = styled.div`
    // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
    z-index: 1000; //위치지정 요소
    position: fixed;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    align-items: flex-start;
    background-color: black;
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: inset;
    padding: 20px;
    position: relative;
    margin-top: 100px;
    width: 400px;
    height: 200px;
`;

export const ModalBtn = styled.button`
    background-color: var(--coz-purple-600);
    text-decoration: none;
    border: none;
    padding: 20px;
    color: white;
    border-radius: 30px;
    cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
    background-color: #ff4b8b;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-size: 20px;
    /* padding-right: 40px; */
    width: 200px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-left: 80px;
`;

export const Message = styled.p`
    color: black;
    margin-top: 40px;
    font-size: 20px;
`;

export default function Modal({ isOpen, onClose }) {
    return (
        <>
            <ModalContainer>
                <ModalBackdrop>
                    <ModalContent>
                        <Message>로그인 후 이용해주세요!</Message>
                        <ExitBtn onClick={onClose}>확인</ExitBtn>
                    </ModalContent>
                </ModalBackdrop>
            </ModalContainer>
        </>
    );
}
