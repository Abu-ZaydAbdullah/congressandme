import React from "react";
import { Link } from "react-router-dom";

function Pagination({ model, data_size, per_page }) {

 const pagination_list = () => {
        let p_list = [];
        for (var i = 0; i < data_size / per_page; i++) {
          p_list.push(
            <li className="page-item" key={i}>
              <Link
                to={{
                  pathname: `/${model}/page/${i + 1}`,
                  state: { page_num: i + 1 }
                }}
              >
                <p className="page-link">{i + 1}</p>
              </Link>
            </li>
          );
        }
        return p_list;
      };

return (<div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <nav>
              <ul aria-label="Page:" className="pagination">
                {pagination_list()}
              </ul>
            </nav>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>)
}

export default Pagination;