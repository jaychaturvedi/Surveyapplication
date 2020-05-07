import React, { Component } from "react";
import { fetchSurveys } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderContent() {
    return _.map(
      this.props.surveys.reverse(),
      ({ _id, title, subject, body, yes, no, dateSent, lastResponded }) => {
        return (
          <div className="card blue-grey darken-1" key={_id}>
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Sent On : {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {yes}</a>
              <a>No : {no}</a>
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

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
