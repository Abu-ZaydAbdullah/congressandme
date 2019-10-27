import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import Jumbotron from './components/Jumbotron'
import issueImage from './assets/issueImage.jpg'

function Issues(){

    const [issues, setIssues] = useState([])
    const { page_num } = useParams()
   
    const fetchIssues = async() => {
      let res = await axios(`https://api.congressand.me/api/Issues?page=${page_num}`)
      let data = await res.data.objects;
      await setIssues(data)
    }

      useEffect(() => {
        fetchIssues()
        }, [page_num]);


        const issueList = issues
        .map((issue, index) => {
      return (
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
                <div className="card-body">
              <h5>{issue.name}</h5>
              <p className="card-text">
             {issue.description}
             </p>
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
                      <a class="btn btn-light">Learn More</a>
                      </Link>     
                </div>
            </div>
        </div>  
      )
      }
        )
        return(
          <>
          <main role="main">
    <Jumbotron title_text={"Issues"} subtitle_text={"All the hottest topics being discussed"} image={issueImage}/>
    <br></br>
    <h1 className="page-title">Issues</h1>
    <div className="panel">
      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
        <div className="album py-5 bg-light">
        <div className="container">
        <div className="row">
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
        </div>
        </div>
        </div>
        </li>
      </ul>
    </div>

  </main>
            </>
        );
    }
    
export default Issues;

