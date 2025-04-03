import React, { useEffect, useState } from 'react'

type Post = {
  id: number;
  title: string;
  body: string;

}

function useEffect02() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [ error, setError] = useState<string |null>(null);
  
  async function fetchPosts(){
    setLoading(true);
    setError(null);

    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!response.ok){
        throw new Error (`HTTP ERROR : ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
      setLoading(false);

    }catch(e){
      setLoading(false);
      setError((e as Error).message);
    }
  }

  useEffect(() =>  {
    fetchPosts();
    console.log('컴포넌트가 마운트되면 실행');
  }, []);

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div style={{
      margin : '0 auto',
      padding : '20px',
      backgroundColor : 'lightcoral'

    }}>
      <h4>Posts 게시물</h4>
      <input 
      type="text"
      placeholder='검색어를 입력해주세요'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
       />
      {loading && <div>게시물을 로딩중입니다.</div>
      }{error && <div>error : {error}</div>}

      {filteredPosts.map((post) => (
        <li key = {post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </li>
      ))}



    </div>
  );
}

export default useEffect02