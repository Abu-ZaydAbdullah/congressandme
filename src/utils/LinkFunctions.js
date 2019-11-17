import React from "react";
import { Link } from "react-router-dom";

export function representative_link(representative, image = "") {
  return (
    <Link
      to={{
        pathname: `/representative/${representative.full_name}`,
        state: {
          name: representative.full_name,
          chamber:
            representative.type === "sen"
              ? "Senate"
              : "House of Representatives",
          type: representative.type === "sen" ? "Senator" : "Representative",
          image: `https://congress-and-me.s3.us-east-2.amazonaws.com/static/media/450x550/${representative.bioguide_id}.jpg`,
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
      {image}
    </Link>
  );
}

export function state_link(state, image = "") {
  return (
    <Link
      to={{
        pathname: `/state/${state.abbreviation}`,
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
      {image}
    </Link>
  );
}

export function issue_link(issue, image = "") {
  return (
    <Link
      to={{
        pathname: `/issue/${issue.name}`,
        state: {
          name: issue.name,
          abbreviation: issue.abbreviation,
          about: issue.about,
          description: issue.description,
          image: issue.image,
          states: issue.states,
          reps: issue.rep,
          vids: issue.vids
        }
      }}
    >
      {image}
    </Link>
  );
}
