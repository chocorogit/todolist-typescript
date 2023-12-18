import React from 'react';
import { useSelector } from 'react-redux';
import { StContainer, StTitle } from './styles';
import Todo from '../../Todo/Todo.tsx';
import { RootState } from '../../config/configStore.ts';

interface TodoListProps {
    isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isDone }) => {
    const todos = useSelector((state: RootState) => state.todos);

    const divStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    };

    return (
        <StContainer>
            <StTitle>{isDone ? '할 일' : '완료'}</StTitle>
            <div style={divStyle}>
                {todos
                    .filter((item) => item.isDone === !isDone)
                    .map((item) => (
                        <Todo key={item.id} item={item} isDone={isDone} />
                    ))}
            </div>
        </StContainer>
    );
};

export default TodoList;
