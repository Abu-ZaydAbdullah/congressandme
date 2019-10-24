import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class IssueTemplate extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        reps: [],
        mentions: []
        }
      }
    
      componentWillMount(){
        this.fetchMentions()
        this.fetchReps()
      }

      fetchReps = async() => {
        const api1 = axios({
            url : "https://api.congressand.me/api/Representatives?page=1"
          });
        const api2 = axios({
                url : "https://api.congressand.me/api/Representatives?page=2"
            });
        const api3 = axios({
                url : "https://api.congressand.me/api/Representatives?page=3"
            });
        let data = await Promise.all([api1, api1, api3]);
        console.log(data)
        await this.setState({
          reps: data
        });
      }
    
      fetchMentions = async() => {
        let res = await axios("https://api.congressand.me/api/Mentions?page=1")
        let data = await res.data.objects;
        console.log(data)
        await this.setState({
          mentions: data
        });
      }

    render() {
        //const repList = this.reps
        //.filter(representative => {
        //    return mentions[representative.full_name]. == true})
        //.map()

        return (
            <main role="main">
                <div>
                    <div className = "container emp-profile">
                        <div className = "row justify-content-left">
                            <div className="col-md-4">
                                <div>
                                    <img style={{height: 180}} src={this.props.location.state.image}/>
                                </div>
                                <div className="row pt-2 pl-5">
                                    <p><a href={this.props.location.state.vids} target="_blank">Trevor Noah on {this.props.location.state.name}</a></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.location.state.name}</h1>
                                <hr></hr>
                                <p>{this.props.location.state.about}</p>
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