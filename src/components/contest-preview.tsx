import * as React from "react";

const ContestPreview:any = ({
     contest
    }) => {
    return (
        <div className="contest-preview">
            <div className="category">
                {contest.categoryName}
            </div>
            <div className="contest">
                {contest.contestName}
            </div>
        </div>
    )
};

export default ContestPreview;