import { useState } from 'react';
import Header from './components/Header.jsx';
import PostList from './components/PostList.jsx';
import './App.css';

function App() {
  const [showList, setShowList] = useState(true);

  return (
    <main>
      <div className="panel header">
        <div>
          <h1>board-lab</h1>
          <Header />
        </div>
        <button onClick={() => setShowList(!showList)}>
          {showList ? '목록 접기' : '목록 펼치기'}
        </button>
      </div>
      {showList && <PostList />}
    </main>
  );
}

export default App;