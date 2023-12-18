import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TodoInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <StTodoInputBox>
            <StTodoInputLabel>{label}</StTodoInputLabel>
            <StTodoInput type='text' placeholder={placeholder} value={value} onChange={onChange}></StTodoInput>
        </StTodoInputBox>
    );
};

const StTodoInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StTodoInputLabel = styled.label`
    width: 100%;
    height: 32px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: bold;
`;

const StTodoInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 4px;
`;

export default TodoInput;
