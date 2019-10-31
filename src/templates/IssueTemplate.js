import React, {useState, useEffect } from "react";
import { useLocation, useParams, Link } from 'react-router-dom';
import axios from "axios"


function IssueTemplate() {
    const issue_schema = {abbreviation: "", about: "", description: "", image: "", issue_id: "", name: "", vids: ""}
    const temp_data = useLocation()
    const { name } = useParams()
    const [issue_data, setIssueData] = useState({...issue_schema})
    const [rep_data, setRepresentativeData] = useState([])
    const [issue_name, setIssueName] = useState("")

    console.log(name)
    
    const getIssueandRepData = async() => {
      if (temp_data.state == undefined) {
      const req = await axios(`https://api.congressand.me/api/Issues?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`)
      const data = await req.data.objects
      await setIssueData(data[0])
      await setIssueName(data[0].abbreviation)
      } else {
      setIssueData(temp_data.state)
      setIssueName(temp_data.state.abbreviation)
      }
      const req2 = await axios(`http://localhost:5000/api/Mentions?q={"filters":[{"name":"${issue_name}","op":"==","val":"1"}]}`)
      const data2 = await req2.data.objects
      await setRepresentativeData(data2)
      await console.log("Done")
    }
  
      useEffect(() => {
      getIssueandRepData()
      }, [name]);

      const repList = rep_data.map((representative, index) => {
        return(
            <div className="col-md-4">
            <div className="card mb-4 box-shadow">
            <Link
                to={{
                  pathname: `/representative/${index}`,
                  state: {
                    name: representative.full_name,
                    chamber:
                      representative.type === "sen"
                        ? "Senate"
                        : "House of Representatives",
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
                <img
                  className="card-img-top about-image"
                  style={{ maxHeight: 450 }}
                  src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
                  alt={representative.full_name}
                ></img>
              </Link>
              
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
                  {representative.chamber === "sen"
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
                      pathname: `/representative/${index}`,
                      state: {
                        name: representative.full_name,
                        chamber:
                          representative.type === "sen"
                            ? "Senate"
                            : "House of Representatives",
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
        );
    })

    return (
        <main role="main">
            <div>
                <div className = "container emp-profile">
                    <div className = "row justify-content-left">
                        <div className="col-md-4">
                            <div>
                                <img style={{height: 180}} src={issue_data.image}/>
                            </div>
                            <div className="row">
                                <p><a href={issue_data.vids} target="_blank">Trevor Noah on {issue_data.name}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>{issue_data.name}</h1>
                            <hr></hr>
                            <p>{issue_data.about}</p>
                        </div>
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important in the following states!</h1>
                    </div>
                    <div className="panel panel-default pt-5">
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important to the following politicians!</h1>

                        <div className="container">
              <div className="row">
            <div className="album py-5 bg-light">
           <div className="container">
              <div className="row">
                    {repList}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            </div>
        </main>
    );

        }
export default IssueTemplate;