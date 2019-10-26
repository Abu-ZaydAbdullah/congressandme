import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios"

class IssueTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          issue_data : {
            name: "",
            description: "",
            about: "",
            image: "",
            vids: ""
            },

            state_data : {
                abbreviation: "",
                name: "",
                image: "",
                website: "",
                summary: ""
            },

            mention_data : {
                full_name: "",                         
                state: "",                             
                agriculture: "",                       
                armed_forces: "",                      
                crimes: "",                            
                economics: "",                         
                education: "",                         
                emergency_management: "",              
                environmentalism: "",                  
                gun_control: "",                       
                healthcare: "",                        
                housing: "",                           
                immigration: "",                       
                labor: "",                             
                social_issues: "",                     
                taxation: "",                          
                transportation_and_public_works: "",   
                other: ""                            
            },

            rep_data : []
        }
    }
    
    componentDidMount()
    {
        this.fetchIssues()
    }
    
    fetchIssues = async() => {
        //console.log(this.props.page_num)
        let res = await axios(`https://api.congressand.me/api/Issues?page=${this.props.page_num}`)
        await this.setState({issue_data : await res.data.objects[parseInt(this.props.index)]});
        await console.log(this.state.issue_data)

        let res2 = await axios(`https://api.congressand.me/api/Mentions?q={"filters":[{"name":"${this.state.issue_data.abbreviation}","op":"eq","val": "1"}]}`)
        await this.setState({mentions_data : await res2.data.objects})
        await console.log(this.state.mention_data)

        let res3 = await axios(`https://api.congressand.me/api/State?q={"filters":[{"name":"abbreviation","op":"eq","val":"${this.state.mention_data.state}"}]}`)
        await this.setState({state_data : await res3.data.objects})
        await console.log(this.state.state_data)
    }

    render() {
    console.log(this.state.mentions_data)
    return (
        <main role="main">
            <div>
                <div className = "container emp-profile">
                    <div className = "row justify-content-left">
                        <div className="col-md-4">
                            <div>
                                <img style={{height: 180}} src={this.state.issue_data.image}/>
                            </div>
                            <div className="row">
                                <p><a href={this.state.issue_data.vids} target="_blank">Trevor Noah on {this.state.issue_data.name}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>{this.state.issue_data.name}</h1>
                            <hr></hr>
                            <p>{this.state.issue_data.about}</p>
                        </div>
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important in the following states!</h1>
                    </div>
                    <div className="panel panel-default pt-5">
                        {/* <div className="col-md-4" key={state.index}>
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{maxHeight: 160}} src={state.image} alt="{state.name}"></img>
                                <div className="card-img-overlay">
                                    <div class="col-mb-4 text-center" style={{marginTop: "12%"}}>
                                        <Link
                                        to={{
                                            pathname: `/state/${state.index}`,
                                            status: {
                                            name: state.name,
                                            image: state.image,
                                            website: state.website,
                                            summary: state.summary,
                                            issues: state.issues,
                                            Facebook: state.facebook
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
                        </div> */}
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important to the following politicians!</h1>
                    </div> {/*PHOLDER
                    <div className="col-md-4" key={representative.index}>
                        <div className="card mb-4 box-shadow">
                            <img
                            className="card-img-top about-image"
                            style={{ maxHeight: 450 }}
                            src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
                            alt="{representative.full_name}"
                            ></img>
                            <div className="card-body">
                                <h5>{representative.full_name}</h5>
                                <p className="card-text">
                                    <strong>Party:</strong> {representative.party}
                                </p>
                                <p className="card-text">
                                    <strong>State:</strong> {representative.state}
                                </p>
                                <p className="card-text">
                                    <strong>Chamber:</strong>{" "}
                                    {representative.type === "sen"
                                    ? "Senate"
                                    : "House of Representatives"}
                                </p>
                                <p className="card-text">
                                    <strong>
                                    <a href={`https://twitter.com/@${representative.twitter}`}>
                                        Twitter:
                                    </a>
                                    </strong>{" "}
                                    {representative.twitter !== ""
                                    ? `@${representative.twitter}`
                                    : "n/a"}
                                </p>
                                <p className="card-text">
                                    <strong>
                                    <a href={`https://facebook.com/${representative.facebook}`}>
                                        Facebook:
                                    </a>
                                    </strong>{" "}
                                    {representative.facebook !== ""
                                    ? `${representative.facebook}`
                                    : "n/a"}
                                </p>
                                <div class="col-mb-4 text-center">
                                    <Link
                                    to={{
                                        pathname: `/representative/${representative.full_name}`,
                                        state: {
                                        name: representative.full_name,
                                        chamber:
                                            representative.type === "sen"
                                            ? "Senate"
                                            : "House of Representatives",
                                        type:
                                            representative.type === "sen"
                                            ? "Senator"
                                            : "Representative",
                                        image: `https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`,
                                        party: representative.party,
                                        state: representative.state,
                                        twitter: `https://twitter.com/@${representative.twitter}`,
                                        facebook: `https://facebook.com/${representative.facebook}`,
                                        youtube: `https://www.youtube.com/results?search_query=${representative.youtube}`,
                                        rss: representative.rss_url,
                                        website: representative.url,
                                        form: representative.contact_form,
                                        phone: `tel:${representative.phone}`,
                                        summary: representative.bioguide_summary
                                        }
                                    }}
                                    >
                                    <a class="btn btn-light">Learn More</a>
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> PHOLDER */}
            </div>
            </div>
        </main>
    );

        }
    }
export default IssueTemplate;