import React from "react";

class SectionHeader extends React.Component {
    render() {
        return (
            <>
                <section className="section-profile-cover section-shaped my-0">
                    {/* Background */}
                    <div className="shape shape-style-1 shape-default alpha-4">
                        <img
                            alt="..."
                            className=""
                            style={{overflow: 'hidden', width: 'inherit'}}
                            src={require("assets/img/theme/AnalysisBanner2.jpg")}
                        />
                    </div>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 200 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="200 0 200 0 0 0"
                            />
                        </svg>
                    </div>
                </section>
            </>
        );
    }
}

export default SectionHeader;
