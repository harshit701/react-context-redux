import { FormEvent, useRef } from "react";
import { addPost } from "../../store/post/postSlice";
import { useAppDispatch } from "../../store/post/store";

const AddPost = () => {
  const postText = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAddPost = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      addPost({ title: postText.current!.value, id: Math.random().toString() })
    );

    postText.current!.value = "";
  };

  return (
    <form onSubmit={handleAddPost}>
      <input type="text" placeholder="title" ref={postText} />
      <button>Add Post</button>
    </form>
  );
};

export default AddPost;
