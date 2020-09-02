import React from "react";

class Project5 extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        Goal of the project was to find correlation between twitter sentiment and Dow Jones Index price using text analysis.
                    </li>
                    <li>
                        Scraped most recent 90-day tweets using GetOldTweets library, build and extracted feature sets. 
                    </li>
                    <li>
                        Used Loughran negative and VADER for sentiment analysis. Evaluate correlation between Index price and sentiment using
random forest regression and linear regression technique.
                    </li>
                </ul>
            </>
        );
    }
}

export default Project5;