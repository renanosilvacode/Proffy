import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';


import './styles.css';

function TeacherForm(){
    const [scheduleItems, setSchduleItems] = useState([
        {week_day: 0, from: '', to:''}
    ]);

    function addNewScheduleItem(){
        setSchduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to:''}
        ]);
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="It's Amazing that you want to teach."
            description="The first step is to fill this form."/>
        
            <main>
                <fieldset>
                    <legend>Your data</legend>
                    <Input name="name" label="Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biography"/>
                </fieldset>
                <fieldset>
                    <legend>About the Class</legend>
                    <Select 
                        name="subject" 
                        label="Subject"
                        options={[
                            {value: 'Arts', label: 'Arts'},
                            {value: 'Biology', label: 'Biology'},
                            {value: 'Chemistry', label: 'Chemistry'},
                            {value: 'History', label: 'History'},
                            {value: 'Math', label: 'Math'},
                            {value: 'English', label: 'English'},
                        ]} 
                    />
                    <Input name="cost" label="Cost of your Class per Hour" />
                </fieldset>

                <fieldset>
                    <legend>Avaiable Schedule
                        <button type="button" onClick={addNewScheduleItem}>
                            + New Schedule
                        </button>
                    </legend>
                    { 
                        scheduleItems.map(scheduleItem =>{
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                        <Select 
                            name="week_day" 
                            label="Day of the week"
                            options={[
                                {value: '0', label: 'Sunday'},
                                {value: '1', label: 'Monday'},
                                {value: '2', label: 'Tuesday'},
                                {value: '3', label: 'Wednesday'},
                                {value: '4', label: 'Thursday'},
                                {value: '5', label: 'Friday'},
                                {value: '6', label: 'Saturday'},
                            ]} 
                        />
                        <Input name="from" label="From" type="time"/>
                        <Input name="to" label="To" type="time"/>
                    </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning"/>
                        Important! <br/>
                        Fill all the fields
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        
        </div>
    )
}

export default TeacherForm;