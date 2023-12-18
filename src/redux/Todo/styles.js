import styled from 'styled-components';

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(50% - 10px);
    height: auto;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
`;
const StId = styled.span`
    color: #aaa;
    font-size: 14px;
`;
const StTitle = styled.h3`
    margin: 10px 0;
`;
const StContent = styled.p``;
const StButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StIsDoneButton = styled.button`
    width: calc(50% - 5px);
    height: 32px;
    border: unset;
    background: #aeffa3;
    border-radius: 8px;
    cursor: pointer;
`;
const StDeleteButton = styled.button`
    width: calc(50% - 5px);
    height: 32px;
    border: unset;
    background: #ffa3a3;
    border-radius: 8px;
    cursor: pointer;
`;
export { StContainer, StId, StTitle, StContent, StButtonBox, StIsDoneButton, StDeleteButton };
