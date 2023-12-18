import React, { useState, FormEvent } from 'react';
import { StButton, StTitle, StTodoFormWrap } from './styles';
import TodoInput from '../common/TodoInput.tsx';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addTodo } from '../../modules/todosSlice';

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const dispatch = useDispatch();

    // title 변경 감지 함수
    const setTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    // content 변경 감지 함수
    const setBodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    // 폼 제출
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        const newTodo = {
            id: shortid.generate(),
            title,
            content,
            isDone: false,
        };

        dispatch(addTodo(newTodo));

        setTitle('');
        setContent('');
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    return (
        <StTodoFormWrap>
            <form style={formStyle} onSubmit={submitHandler}>
                <StTitle>할 일</StTitle>
                <TodoInput label='제목' placeholder='제목을 입력해주세요.' value={title} onChange={setTitleHandler} />
                <TodoInput label='내용' placeholder='내용을 입력해주세요.' value={content} onChange={setBodyHandler} />
                <StButton type='submit'>제출</StButton>
            </form>
        </StTodoFormWrap>
    );
};

export default TodoForm;
