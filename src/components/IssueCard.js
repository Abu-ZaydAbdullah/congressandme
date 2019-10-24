import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

class IssueCard extends Component {

  constructor(props){
    super(props)
    this.state = {
    issues: []
    }
  }

  componentWillMount(){
  this.fetchIssues()
  }

  fetchIssues = async() => {
    let res = await axios("https://api.congressand.me/api/Issues?page=1")
    let data = await res.data.objects;
    console.log(data)
    await this.setState({
      issues: data
    });
  }

  render() {
    // console.log(issue)
    const { filterText } = this.props
    const issueList = this.state.issues
    .filter(issue => {
      return issue.name.toLowerCase().startsWith(filterText.toLowerCase()) == true
      })
    .map(issue => {
  return (
    <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
    <div className="col-md-4" key={issue.index}>
    <div className="card mb-4 box-shadow">
                  <Link
                    to={{
                      pathname: `/issue/${issue.name}`,
                      state: {
                        name: issue.name,
                        description: issue.description,
                        image: issue.image,
                        states: issue.states,
                        reps: issue.rep,
                        vids: issue.vids,
                      }
                    }}
                  >
                    <img className="card-img-top about-image" style={{width: 262}}src={issue.image} alt="Card image cap"></img>
                  </Link>     
                </div>
                <div className="card-body">
                    <h5>{issue.name}</h5>
                    <p className="card-text">{issue.description}</p>
                    <Link
                      to={{
                        pathname: `/issue/${issue.name}`,
                        state: {
                          name: issue.name,
                          description: issue.description,
                          image: issue.image,
                          states: issue.states,
                          reps: issue.rep,
                          vids: issue.vids,
                        }
                      }}
                    >
                      <a class="btn btn-dark">{issue.name}</a>
                    </Link>
                </div>
            </div>
            </div>
            </div>
            </div>
  )
  }
    )
    return(
      <>
      {issueList}

      <div className="container">
      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <nav>
      <ul aria-label="Page:" class="pagination">
      <li class="page-item"><Link to={{pathname: `/issues/page/1`, state: {page_num: 1} }}><a class="page-link">1</a></Link></li>
          <li class="page-item"><Link to={{pathname: `/issues/page/2`, state: {page_num: 2} }}><a class="page-link">2</a></Link></li>
          <li class="page-item"><Link to={{pathname: `/issues/page/3`, state: {page_num: 3} }}><a class="page-link">3</a></Link></li>
    </ul>
    </nav>
    </div>
    <div className="col-md-4"></div>
    </div>
    </div>
    </>
    );
}
}

export default IssueCard;

