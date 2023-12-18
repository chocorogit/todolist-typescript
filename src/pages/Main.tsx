import React from 'react';
import TodoForm from '../redux/components/TodoForm/TodoForm.tsx';
import TodoList from '../redux/components/TodoList/TodoList.tsx';

const Main: React.FC = () => {
    const StTodolistWrapStyle: React.CSSProperties = {
        display: 'flex',
        gap: '20px',
        margin: '0 20px',
    };

    return (
        <>
            <TodoForm />
            <div style={StTodolistWrapStyle}>
                <TodoList isDone={true} />
                <TodoList isDone={false} />
            </div>
        </>
    );
};

export default Main;
