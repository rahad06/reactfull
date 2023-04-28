import React from 'react';

function TopOverview(props) {
    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between border-bottom">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab"
                       aria-controls="overview" aria-selected="true">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab"
                       aria-selected="false">Audiences</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab"
                       aria-selected="false">Demographics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab"
                       aria-selected="false">More</a>
                </li>
            </ul>
           
        </div>
            <div className="tab-content tab-content-basic pb-0">
                <div className={`tab-pane fade show active`}>
                    <div className="statistics-details d-flex align-items-center justify-content-between">
                        <div>
                            <p className="statistics-title">Bounce Rate</p>
                            <h3 className="rate-percentage">32.53%</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>-0.5%</span>
                            </p>
                        </div>
                        <div>
                            <p className="statistics-title">Page Views</p>
                            <h3 className="rate-percentage">7,682</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                        </div>
                        <div>
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        
    );
}

export default TopOverview;
