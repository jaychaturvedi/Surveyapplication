import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import formFields from './formFields';
import _ from 'lodash'
import * as actions from '../../actions';
const SurveyFormReview = ( {onCancel, submitSurvey, formValues, history }) =>{
    const reviewFields = _.map(formFields, ({name,label})=>{
        return (
        <div >
        <label>{label}</label>
        <div>{formValues[name]}</div>
        </div>
        )        
    })
    
    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick = {onCancel} >Back</button>
            <button className="green btn-flat white-text right"onClick = {() =>submitSurvey(formValues, history)} >Send Surveys
            <i className = "material-icons right">email</i>
            </button>

        </div>
    )
}



function mapStateToProps(state) {
    return {

        formValues : state.form.surveyForm.values
    };
  }
  
  export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
