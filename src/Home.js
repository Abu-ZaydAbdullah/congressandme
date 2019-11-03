import React from "react";
import Jumbotron from "./components/Jumbotron";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import congressImage from "./assets/congress_image.jpg";
import './App.css'

const searchClient = algoliasearch(
  'C2FVR597N2',
  'ca1f93ebd6b28b4474bd084d5eb0cea2'
);

function Home() { 

  return (
  <main role="main">
    <div>
      <Jumbotron
        title_text={"Congress and Me"}
        subtitle_text={"Welcome to the Home Page!"}
        image={congressImage}
      />
    </div>
    <h3
      className="text-center"
      style={{ marginBottom: "3%", marginTop: "10%" }}
    >
      What is Congress and Me?
    </h3>
    <div className="row" style={{ marginBottom: "3%" }}>
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <h5 className="text-justify">
          The six of us believe that a well-informed populace is crucial to a
          functioning democracy. We wanted a way for people to easily see what
          issues their representatives are and aren’t talking about in their
          tweets and on the Congress floor, and we wanted to highlight which
          issues are being discussed and which ones require attention on a
          nation-wide scale. To that end, we’ve built Congress and Me.
        </h5>
      </div>
      <div className="col-md-3"></div>
    </div>
    <InstantSearch
            searchClient={searchClient}
            indexName="congressandme-search"
          >
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
  </main>)
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
    </article>
  );
}

export default Home;