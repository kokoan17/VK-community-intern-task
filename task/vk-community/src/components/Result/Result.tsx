import GroupCard from "../GroupCard/GroupCard";
import useDispatch from "../../utils/hooks/useDispatch";
import useSelector from "../../utils/hooks/useSelector";
import { loadGroupList } from "../../redux/actions";
import { useEffect } from "react";

const Result = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGroupList("all"));
  }, []);

  const { groups } = useSelector((state) => state.groups);
  return (
    <>
    <div>{groups.map((group) => (
      <GroupCard key={group.id} group={group} />
    ))}</div>
    </>
  );
};

export default Result;
