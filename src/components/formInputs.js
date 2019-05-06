import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';

export class FormInputs extends Component {
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className='error'>
                    <div>{error}</div>
                </div>
            )
        }
    }
    renderInput = ({label, input, meta}) => {
        console.log(meta);
        return(
            <div>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
           
        )
    }
    onSubmit = () =>{
        console.log('Form is submitted');
    }
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name='title' component={this.renderInput} label='title'/>
            <Field name='description' component={this.renderInput} label='description'/>
            <button>Submit</button>
        </form> 
      </div>
    )
  }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title){
        errors.title = 'Bro Please Enter your name...'
    }
    if(!formValues.description){
        errors.title = 'Seriously bro?? enter some message...'
    }
    return errors;
}

export default reduxForm({
    form:'ourForm',
    validate
})(FormInputs);