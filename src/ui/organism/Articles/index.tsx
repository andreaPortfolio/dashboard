import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Table, Flex } from "../../";
import { RootState, fetchPosts, resetPosts } from "../../../store";

const COLUMNS: { title: string; name: string }[] = [
  { name: "id", title: "Id" },
  { name: "userId", title: "User" },
  { name: "title", title: "Title" },
];

const Articles = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.data);
  const loading = useSelector((state: RootState) => state.posts.loading);

  const handleClick= ()=>{
    dispatch(resetPosts());
  }

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <Flex>
      <Table data={posts} columns={COLUMNS} />
    </Flex>  
  );
};

export default Articles;
