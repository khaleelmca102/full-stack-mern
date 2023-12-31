import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
//import { fetchContestList } from "../api-client";
import Header from "./header";

const ContestList: any = ({
  initialContests,
  onContestClick,
}) => {
  const [contests, setContests] = useState(initialContests);
  useEffect(() => {
    // fetchContestList().then((contests) => {
    //     setContests(contests)
    // });
  }, []);
  return (
    <>
    <Header message="Naming Contests" />
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview
            key={contest.id}
            contest={contest}
            onClick={onContestClick}
          />
        );
      })}
    </div>
    </>
  );
};

export default ContestList;
