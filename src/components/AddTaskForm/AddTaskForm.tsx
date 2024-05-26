import React from 'react';

interface IForm {
  onChangeValue: React.ChangeEventHandler<HTMLInputElement>,
  addTask: React.FormEventHandler<HTMLFormElement>
}

const AddTaskForm: React.FC<IForm> = ({onChangeValue, addTask}) => {
  return (
    <div className={'form-wrapper'}>
      <form onSubmit={addTask} id={'form'}>
        <input id={'form-input'} type={'text'} placeholder={'Add new task'} onChange={onChangeValue}/>
        <button type={'submit'} className={'btn'}>Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;