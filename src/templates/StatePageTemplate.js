import React, { Component } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

class StatePageTemplate extends Component {

    constructor(props){
        super(props)
        this.fetchStates = this.fetchStates.bind(this)
        this.state = {
        states: [],
        page_num: this.props.page_num
        }
      }

   
      componentDidMount(){
        this.fetchStates()
      }

      fetchStates = async() => {
        let res = await axios(`http://congressandme-api.us-east-2.elasticbeanstalk.com/api/States?page=${this.state.page_num}`)
        console.log(res)
        await this.setState({page_num: this.state.page_num })
        let data = await res.data.objects;
        await this.setState({
          states: data
        });
      }
    
      render() {
        const stateList = this.state.states.map((state, index) => {
          return (
        <div className="col-md-4" key={state.index}>
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" style={{maxHeight: 160}} src={state.image} alt="{state.name}"></img>
          <div className="card-img-overlay">
            <div class="col-mb-4 text-center" style={{marginTop: "12%"}}>
              <Link
                to={{
                  pathname: `/state/${state.abbreviation}/${this.state.page_num}/${index}`,
                  state: {
                    name: state.name,
                    image: state.image,
                    website: state.website,
                    summary: state.summary,
                    issues: state.issues,
                    facebook: state.facebook
                  }
                }}
              >
                <a class="btn btn-dark">{state.name}</a>
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group"></div>
            </div>
          </div>
        </div>
        </div>
        )
        }
          )
          return(
            <>
          <div className="album py-5 bg-light">
          <div className="container">
          <div className="row">
            {stateList}
      
            <div className="container">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <nav>
            <ul aria-label="Page:" class="pagination">
            <li class="page-item"><Link to={{pathname: `/states/page/1`, state: {page_num: 1} }}><a class="page-link">1</a></Link></li>
            <li class="page-item"><Link to={{pathname: `/states/page/2`, state: {page_num: 2} }}><a class="page-link">2</a></Link></li>
            <li class="page-item"><Link to={{pathname: `/states/page/3`, state: {page_num: 3} }}><a class="page-link">3</a></Link></li>
            <li class="page-item"><Link to={{pathname: `/states/page/4`, state: {page_num: 4} }}><a class="page-link">4</a></Link></li>
            <li class="page-item"><Link to={{pathname: `/states/page/5`, state: {page_num: 5} }}><a class="page-link">5</a></Link></li>
          </ul>
          </nav>
          </div>
          <div className="col-md-4"></div>
          </div>
          </div>
          </div>
          </div>
          </div>
              </>
          );
        }
      }

export default StatePageTemplate;