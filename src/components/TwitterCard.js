import React, { Component } from "react";
import './TwitterCard.css'
class TwitterCard extends Component {
    render() {
        return(
            <div className="container">
                <blockquote className="quote-box">
                    <p class="quotation-mark">“</p>
                    <p class="quote-text">
                        Don't believe anything that you read on the internet, it may be fake. 
                    </p>
                    
                        <div className="blog-post-actions">
                            <p class="blog-post-bottom pull-left">Abraham Lincoln</p>
                            <p class="blog-post-bottom pull-right"><span class="badge quote-badge">896</span></p>
                        </div>
                </blockquote>
            </div>
        );
    }
}
export default TwitterCard;