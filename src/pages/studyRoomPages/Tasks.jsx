import React from 'react';
import Task from "../../components/studyRoomComponents/task/Task";
import {useUserId} from "../../hooks/useUserId";

const Tasks = () => {
    const {id} = useUserId()
    return (
        <div className="study-content-block">
            <h2>Задания</h2>
            <Task desc='Задание 1' type='1'/>
            <Task desc='Задание 2' type='1'/>
            <Task desc='Задание 3' type='0'/>
            <Task desc='Задание 4' type='1'/>
            <Task desc='Задание 5' type='0'/>
            <Task desc='Задание 6' type='0'/>
        </div>
    );
};

export default Tasks;