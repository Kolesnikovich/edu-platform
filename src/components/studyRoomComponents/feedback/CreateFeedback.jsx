import React, {useState} from 'react';
import classes from "../task/Task.module.css";
import Button from "../../UI/button/Button";

const CreateFeedback = (props) => {
    let feedback = props.feedback
    if(!feedback){
        feedback = {}
    }
    const userId = localStorage.getItem('id')
    const [open, setOpen] = useState(false)
    const [newFeedback, setNewFeedback] = useState(feedback)
    const toggle = (e) => {
        if(e.target === e.currentTarget){
            setOpen(!open)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        toggle()
        props.feedback ? props.update(newFeedback) : props.create(newFeedback)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        console.log('delete course -', props.feedback.courseId, 'user -', props.feedback.userId)
        props.deleteFeed()
    }

    return (
        <div onClick={toggle} className={classes.box}>
            {
                props.feedback
                    ? <p className={classes.title}>Обновить свой отзыв</p>
                    : <p className={classes.title}>Оставить отзыв</p>
            }
            {open && <div className={classes.hiddenContent}>
                <form style={{width: '80%'}} onSubmit={submit}>
                    <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Оценка:</p>
                    <input className="form-input"
                           style={{maxWidth: 100}}
                           type="number"
                           value={newFeedback.rating}
                           min={0}
                           max={5}
                           placeholder="от 0 до 5"
                           onChange={e => {
                               setNewFeedback({...newFeedback, rating: e.target.value})
                           }}
                    />
                    <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Текст отзыва:</p>
                    <textarea className="form-input"
                              style={{maxWidth: 'unset'}}
                              value={newFeedback.text}
                              placeholder="Напишите свой отзыв"
                              rows={5}
                              required
                              onChange={e => setNewFeedback({...newFeedback, text: e.target.value})}
                    />

                    <Button type='submit'>{
                        props.feedback
                            ? <span>Обновить</span>
                            : <span>Отправить</span>
                    }</Button>
                    {/*{*/}
                    {/*    props.feedback && <Button onClick={handleDelete}>Удалить</Button>*/}
                    {/*}*/}
                </form>
                </div>
                }
        </div>
    );
};

export default CreateFeedback;