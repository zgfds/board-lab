import { writeFileSync } from 'node:fs';

const topics = ['React', 'JavaScript', 'CSS', '취업', '동아리'];
const authors = ['민수', '지은', '현우', '서연', '도윤'];

const posts = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  title: `${topics[i % topics.length]} 이야기 ${i + 1}`,
  author: authors[i % authors.length],
  likes: (i * 7) % 20,
}));

writeFileSync(
  new URL('./db.json', import.meta.url),
  JSON.stringify({ posts }, null, 2),
);

console.log(`db.json에 글 ${posts.length}개를 만들었습니다`);