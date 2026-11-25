const BASE_URL = 'http://localhost:8080';

async function request(path, options) {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

export function fetchPosts() {
  return request('/posts?_page=1&_limit=10&_sort=id&_order=desc');
}

export function createPost(post) {
  return request('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
}

export function likePost(post) {
  return request(`/posts/${post.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ likes: post.likes + 1 }),
  });
}

export function deletePost(id) {
  return request(`/posts/${id}`, { method: 'DELETE' });
}