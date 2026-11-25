import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost, likePost } from '../api.js';

function PostItem({ post }) {
  const queryClient = useQueryClient();
  const refreshPosts = () =>
    queryClient.invalidateQueries({ queryKey: ['posts'] });

  const like = useMutation({
    mutationFn: likePost,
    onMutate: () => remove.reset(),
    onSuccess: refreshPosts,
  });

  const remove = useMutation({
    mutationFn: deletePost,
    onMutate: () => like.reset(),
    onSuccess: refreshPosts,
  });

  const isPending = like.isPending || remove.isPending;

  return (
    <li className="post-item">
      <div className="post-info">
        <strong>{post.title}</strong>
        <p>작성자 {post.author} · 좋아요 {post.likes}</p>
      </div>
      <div className="post-actions">
        <button type="button" disabled={isPending} onClick={() => like.mutate(post)}>
          좋아요
        </button>
        <button type="button" disabled={isPending} onClick={() => remove.mutate(post.id)}>
          삭제
        </button>
      </div>
      {like.isError && <p role="alert">좋아요를 반영하지 못했습니다.</p>}
      {remove.isError && <p role="alert">글을 삭제하지 못했습니다.</p>}
    </li>
  );
}

export default PostItem;
