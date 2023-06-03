import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useFetch} from "../../../hooks/useFetch";
import ThemeService from "../../../API/ThemeService";
import AssignmentsService from "../../../API/AssignmentService";
import {useToken} from "../../../hooks/useToken";
import Button from "../../../components/UI/button/Button";

const AddAssignment = () => {
    const token = useToken()
    const params = useParams()
    const [assignmentType, setAssignmentType] = useState('0')
    const [assignment, setAssignment] = useState({type: "", assignmentObjectId: ""})
    const [assignmentErr, setAssignmentErr] = useState('')
    const [fetchCreateAssignment, isCreateAssignmentLoading, createAssignmentError] = useFetch(async () => {
        try {
            const response = await AssignmentsService.create(params.courseId, params.themeId, {...assignment}, token)
            setAssignmentErr('')
            //console.log(response)
        } catch (e){
            console.log(e.response.data)
            setAssignmentErr(e.response.data.title)
        }
    })

    const [test, setTest] = useState({
        title: '',
        dueDate: '',
        questions: [],
        allowedAttempts: 1,
        passPercentage: 0
    })

    const [newQuestion, setNewQuestion] = useState({text: '', weight: 0, answers: []})

    const createTest = (e) => {
        e.preventDefault()
        console.log('test creation')
    }
    const createAssignment = () => {
        console.log(assignment)
    }
    return (
        <div>
            <h2>Добавление задания к теме №{params.themeId}</h2>
            <FormControl>
                <FormLabel id="radio-buttons-group-label" color="secondary">Тип задания:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={assignmentType}
                    onChange={(e)=>{
                        setAssignmentType(e.target.value)
                    }}
                >
                    <FormControlLabel value='0' control={<Radio color="secondary"/>} label="Тестовое" />
                    <FormControlLabel value='1' control={<Radio color="secondary"/>} label="С файлом" />
                </RadioGroup>
            </FormControl>
            {
                assignmentType == 0 ?
                    <form onSubmit={createTest} style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <p>test title: {test.title}</p>
                        <p>test date: {test.dueDate}</p>
                        <h2>Создать тест:</h2>
                        <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Название:</p>
                        <input className="form-input"
                               style={{maxWidth: '40%'}}
                               type="text"
                               value={test.title}
                               placeholder="Введите название теста"
                               required
                               onChange={e => setTest({...test, title: e.target.value})}
                        />
                        <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Срок сдачи:</p>
                        <input className="form-input"
                               style={{maxWidth: 'max-content'}}
                               type="datetime-local"
                               value={test.dueDate}
                               placeholder="Срок сдачи"
                               required
                               onChange={e => setTest({...test, dueDate: e.target.value})}
                        />
                        <Button type='submit'>Создать тест</Button>
                    </form>
                    : assignmentType == 1 && <form>
                            <h2>Загрузить файл:</h2>
                        </form>
            }
        </div>
    );
};

export default AddAssignment;