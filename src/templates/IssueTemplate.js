import React, { useState, useEffect } from "react";
import RepresentativeCard from "../components/RepresentativeCard";
import { useLocation, useParams } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import axios from "axios";

function IssueTemplate() {
  const issue_schema = {
    abbreviation: "",
    about: "",
    description: "",
    image: "",
    issue_id: "",
    name: "",
    vids: ""
  };

  const temp_data = useLocation();
  const { name } = useParams();
  const [issue_data, setIssueData] = useState([{ ...issue_schema }]);
  const [rep_data, setRepresentativeData] = useState([]);
  const [issue_name, setIssueName] = useState("");

  const getIssueandRepData = async () => {
    if (temp_data.state === undefined) {
      const req = await axios(
        `https://api.congressand.me/api/Issues?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`
      );
      const data = await req.data.objects;
      await setIssueData(data[0]);
      await setIssueName(data[0].abbreviation);
    } else {
      setIssueData(temp_data.state);

      setIssueName(temp_data.state.abbreviation);
    }
    const req2 = await axios(
      `https://api.congressand.me/api/megaTable?results_per_page=540&q={"filters":[{"name":"${issue_name}","op":"==","val":"1"}]}`
    );

    const data2 = await req2.data.objects;
    await setRepresentativeData(data2);
  };

  useEffect(() => {
    getIssueandRepData();
  }, [issue_data]);

  return (
    <main role="main">
      <div>
        <div className="container emp-profile">
          <div className="row justify-content-left">
            <div className="col-md-4">
              <div>
                <img
                  style={{ height: 180 }}
                  src={issue_data.image}
                  alt={issue_data.name}
                />
              </div>
              <div className="row">
                <p>
                  <a href={issue_data.vids}>Trevor Noah on {issue_data.name}</a>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="UN"
                    options={{ height: 500 }}
                  />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h1>{issue_data.name}</h1>
              <hr></hr>
              <p>{issue_data.about}</p>
            </div>
          </div>
          <div className="panel panel-default pt-5"></div>
          <div className="row justify-content-left pt-5 ">
            <h1>This issue is important to the following politicians!</h1>
            <RepresentativeCard representatives={rep_data} filterText={""} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default IssueTemplate;
