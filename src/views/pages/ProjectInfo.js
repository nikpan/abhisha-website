import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

class ProjectInfo {
    static getProjectInfo(projectId) {
        switch(projectId) { 
            case '1':
                return <Project1 />
            case '2':
                return <Project2 />
            case '3':
                return <Project3 />
            case '4':
                return <Project4 />
            default:
                return 'Some project description. Some graphs. Some visualizations. Some analysis.'
        }
    }

    static getProjectTitle(projectId) {
        switch(projectId) {
            case '1':
                return 'Student Schedule Database'
            case '2':
                return 'Flight Cost Benefit Analysis'
            case '3':
                return 'Bay Area Real Estate Data Analysis'
            case '4':
                return 'Dimensional Data Model for Auction Website'
            default:
                return 'Project Title ' + projectId
        }
    }
}

export default ProjectInfo