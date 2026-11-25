import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api.js';

function Header() {
  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  return <p>이 페이지 좋아요 합계 {totalLikes}</p>;
}

export default Header;
