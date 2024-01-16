import { FC } from "react";
import { removePost } from "../../store/post/postSlice";
import { useAppDispatch } from "../../store/post/store";

const PostItem: FC<{ item: { title: string; id: string } }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemovePost = (id: string) => {
    dispatch(removePost(id));
  };

  return <li onClick={() => handleRemovePost(item.id)}>{item.title}</li>;
};

export default PostItem;
