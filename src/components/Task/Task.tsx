import React from 'react';

export interface PropsTask {
  text: string,
  id: string,
  deleteTask?: React.MouseEventHandler<HTMLButtonElement>
}

const Task: React.FC<PropsTask> = ({text, deleteTask}) => {
  return (
    <div className={'task'}>
      <span>{text}</span>
      <button className={'delete-btn'} onClick={deleteTask}></button>
    </div>
  );
};

export default Task;