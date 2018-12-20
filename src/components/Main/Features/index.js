import React, { Component } from 'react'
import './style.css'

class Features extends Component {
    render() {
        return (
            <div className="features">
                <div className="header-features">
                    <h1>Features</h1>
                    <p>Here you can find an exhaustive list of everything our platform can do.</p>
                </div>
                <div className="features-content">
                    <div className="content-block">
                        <div className="content-item">
                            <h3>Content Import</h3>
                            <p>
                                Build websites faster than ever by easily pulling all of a
                                client’s content from a website or Facebook page directly into the Contact Library.
                            </p>
                        </div>
                        <div className="content-item">
                            <h3>Content Collection Form</h3>
                            <p>
                                Never wait on a customer’s content again.
                                Send them a branded collection form with instructions on how they
                                can send you exactly what you need to create their perfect website. 
                            </p>
                        </div>
                        <div className="content-item">
                            <h3>External Data Sync</h3>
                            <p>
                                Optimize your workflow by syncing site content with an external data set connected via our API.
                                Any time you update info in your source of truth, our platform will automatically push the change
                                to any connected widget on a site
                            </p>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="content-item">
                            <h3>Connect to Widgets</h3>
                            <p>
                                Text blocks, images and addresses are just some of the widgets you can now connect
                                to the Content Library for easy data management all in one place.
                            </p>
                        </div>
                        <div className="content-item">
                            <h3>Web-Wide Accuracy</h3>
                            <p>
                                If you manage all of your clients’ online info from one data set, Duda enables you
                                to include their website as a synced location for easier web-wide accuracy. API access required. 
                            </p>
                        </div>
                        <div className="content-item">
                            <h3>Comment in Context</h3>
                            <p>
                                Every comment is clearly linked to a specific website element and identifies who commented to
                                ensure design suggestions and instructions are entirely accurate and clearly understood.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
