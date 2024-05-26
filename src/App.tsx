import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import React, {useState} from 'react';
import Task, {PropsTask} from './components/Task/Task';

const App = () => {
  const [tasks, setTasks] = useState<PropsTask[]>([
    {text: 'Посмотреть запись вебинара', id: '01AA'},
    {text: 'Обновить лицензию', id: '02AA'},
    {text: 'Выполнить тех.задание', id: '03AA'},
  ]);

  const [inputValue, setInputValue] = useState('');
  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newId = String(Math.floor(Math.random() * 100) + letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)]);
    const copyTasks = [...tasks, {text: inputValue, id: newId}];
    setTasks(copyTasks);

    const input = document.getElementById('form-input') as HTMLInputElement;
    input ? input.value = '' : null;
  };

  const deleteTaskHandler = (id: string) => {
    const copyTasks = [...tasks];
    const index = copyTasks.findIndex(person => person.id === id);
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  return (
    <>
      <AddTaskForm addTask={(event) => addTask(event)} onChangeValue={(event) => changeInputValue(event)}/>
      <div className={'tasks-wrapper'}>
        {
          tasks.map((task) => {
            return (
              <Task text={task.text} id={task.id} key={task.id} deleteTask={() => deleteTaskHandler(task.id)}/>
            );
          })
        }
      </div>
    </>
  );

};

export default App;
