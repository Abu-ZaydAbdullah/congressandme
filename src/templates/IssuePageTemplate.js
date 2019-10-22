import React, { Component } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

class IssuePageTemplate extends Component {

    constructor(props){
        super(props)
        this.fetchIssues = this.fetchIssues.bind(this)
        this.state = {
        issues: [],
        page_num: this.props.match.params.page_num
        }
      }

   
      componentWillMount(){
      this.fetchIssues()
      }

      fetchIssues = async() => {
        let res = await axios(`http://localhost:5000/api/Issues?page=${this.state.page_num}`)
        this.setState({page_num: this.props.match.params.handle })
        let data = await res.data.objects;
        this.setState({
          issues: data
        });
      }
    
      render() {
        const { filterText } = this.props
        const issueList = this.state.issues
        .filter(issue => {
          return issue.name.toLowerCase().startsWith(filterText.toLowerCase()) == true
          })
        .map(issue => {
      return (
        <div className="row mb-5" key={issue.index}>
            <div className="panel panel-default">
                <div className="card-body row">    
                    <div class = "col-sm-6 col-md-6 image-container">
                        <img className="card-img-top about-image" style={{width: 262}}src={issue.image} alt="Card image cap"></img>
                    </div>
                    <div className="col-sm-6 col-md-6" >
                        <h5>{issue.name}</h5>
                        <p className="card-text">{issue.desc}</p>
                        <Link
                          to={{
                            pathname: `/issue/${issue.index}`,
                            status: {
                              name: issue.name,
                              desc: issue.desc,
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
      )
      }
        )
      return issueList
    }
    }
    
    export default IssuePageTemplate;
    
    