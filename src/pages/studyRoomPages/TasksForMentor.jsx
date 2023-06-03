import React from 'react';
import TaskToRate from "../../components/studyRoomComponents/task/TaskToRate";

const TasksForMentor = () => {
    return (
        <div>
            <div className="study-content-block">
                <h2>Задания, которые требуют оценки: </h2>
                <TaskToRate desc='Задание 3' type='0'/>

            </div>
        </div>
    );
};

export default TasksForMentor;