import React, { Component } from "react";
import data from "../data/GroupMembers"
import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep';

class AboutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    commit_dict: {"Abu-Zayd Abdullah": 0, "Abu-ZaydAbdullah": 0, "Robert Gutierrez": 0, "Calvin Dao": 0, "David Sikabwe": 0, "Ben Burton": 0, "Ben Hazel": 0},
    commit_count: 0,
    issue_dict: {"Abu-Zayd Abdullah": 0, "Abu-ZaydAbdullah": 0, "Robert Gutierrez": 0, "Calvin Dao": 0, "David Sikabwe": 0, "Ben Burton": 0, "Ben Hazel": 0},
    issue_count: 0
    };
  }

  componentWillMount() {
    
    let getCommits = () => {
      var authOptions = {
        method: 'GET',
        url: 'https://gitlab.com/api/v4/projects/14525540/repository/commits?all=true&per_page=100',
        headers: {
            'Private-Token': 'mS_bG_uQE4UkARaq3_oQ'
        },
        json: true
      };
      axios(authOptions)
      .then(response => {
        const responseData = response.data
          responseData.forEach((commit) => {
            this.setState({commit_count: this.state.commit_count + 1})
            let temp_commit_dict = cloneDeep(this.state.commit_dict)
            temp_commit_dict[commit.author_name] += 1
            this.setState({commit_dict: temp_commit_dict})
        })
        let temp_commit_dict = cloneDeep(this.state.commit_dict)
        temp_commit_dict['Abu-Zayd Abdullah'] += temp_commit_dict['Abu-ZaydAbdullah']
        this.setState({commit_dict: temp_commit_dict})
      })
    }
    
    let getIssues = () => {
      var authOptions = {
        method: 'GET',
        url: 'https://gitlab.com/api/v4/projects/14525540/issues?scope=all',
        headers: {
            'Private-Token': 'mS_bG_uQE4UkARaq3_oQ'
        },
        json: true
      };
      axios(authOptions)
      .then(response => {
        const responseData = response.data
          responseData.forEach((issue) => {
            this.setState({issue_count: this.state.issue_count + 1})
            if (issue.closed_by != null) {
            let temp_issue_dict = cloneDeep(this.state.issue_dict)
            temp_issue_dict[issue.closed_by.name] += 1
            this.setState({issue_dict: temp_issue_dict})
            }
        })
        let temp_issue_dict = cloneDeep(this.state.issue_dict)
        temp_issue_dict['Abu-Zayd Abdullah'] += temp_issue_dict['Abu-ZaydAbdullah']
        this.setState({issue_dict: temp_issue_dict})
      })
    }
    
    getCommits()
    getIssues()
    console.log(this.state.issue_dict)
    console.log(this.state.commit_dict)
  }

  render() {
  const aboutList = data.map(member => {
  return (
  <div className="col-md-4" key={member.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top about-image" style={{maxHeight: 262}} src={member.image} alt="{member.name}"></img>
    <div className="card-body">
      <h5>{member.name}</h5>
      <p>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis feugiat elit, ac porta diam commodo non. In pulvinar neque dolor, sed vestibulum odio dapibus a. Curabitur turpis lacus, commodo eu purus sit amet, venenatis tristique ex. Donec sit amet mattis tellus, non hendrerit urna.</p>
      </p>
      {"\n"}
      <p className="card-text"><strong>Commits:</strong> {this.state.commit_dict[member.name]}</p>
      <p className="card-text"><strong>Issues:</strong> {this.state.issue_dict[member.name]}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
    )
  return aboutList
}
}

export default AboutCard;





