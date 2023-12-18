import shortid from 'shortid';

const initialState = [
    {
        id: shortid.generate(),
        title: '운동',
        content: '산책하기',
        isDone: false,
    },
    {
        id: shortid.generate(),
        title: '독서',
        content: '[모던 자바스크립트] 읽기',
        isDone: false,
    },
    {
        id: shortid.generate(),
        title: '영화 감상',
        content: '[센과 치히로의 행방불명] 보기',
        isDone: true,
    },
];

export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload,
    };
};
export const deleteTodo = (payload) => {
    return {
        type: 'DELETE_TODO',
        payload,
    };
};
export const changeTodo = (payload) => {
    return {
        type: 'SWITCH_TODO',
        payload,
    };
};
// 리듀서
const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];

        case 'DELETE_TODO':
            return state.filter((item) => item.id !== action.payload);

        case 'SWITCH_TODO':
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            });

        default:
            return state;
    }
};

export default todos;
