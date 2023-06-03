import React, {useState} from 'react';

const Question = (props) => {
    const [question, setQuestion] = useState(props.question)
    return (
        <div>
            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Название:</p>
            <input className="form-input"
                   style={{maxWidth: 'unset'}}
                   type="text"
                   value={question.title}
                   placeholder="Введите название курса"
                   required
                   onChange={e => setQuestion({...question, title: e.target.value})}
            />
        </div>
    );
};

export default Question;