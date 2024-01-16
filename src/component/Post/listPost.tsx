import { useAppSelector } from "../../store/post/store";
import PostItem from "./postItem";

const PostList = () => {
  const postItems = useAppSelector((state) => state.post.items);

  return (
    <>
      {postItems.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default PostList;
