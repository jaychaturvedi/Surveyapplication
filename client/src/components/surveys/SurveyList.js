import React, { Component } from "react";
import { fetchSurveys, deleteSurvey } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderContent() {
    return _.map(
      this.props.surveys.reverse(),
      (survey) => {
        return (
          <div className="card blue-grey darken-1" key={survey._id}>
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On : {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No : {survey.no}</a>
              <button onClick = {()=>{this.props.deleteSurvey(survey._id)}} className="red btn-flat right white-text">
            Delete
            <i className="material-icons right">delete_forever</i>
          </button>
            </div>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h5>SurveyList</h5>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
