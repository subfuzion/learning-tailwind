export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();
  console.log(posts)
  return ( 
    <>
      <div className="bg-slate-50 mt-12 mb-12 pt-3 pb-3">
        <div className="title grid justify-center">
          <h1 className="text-3xl">Posts</h1>
        </div>
        <div id="posts" className="mr-80 ml-80">
          <ul>
            {posts.map(post => 
            <li className="p-5 mt-3 bg-white rounded-md shadow-md">
              User: {post.userId}
              <br />
              Post Number: {post.id}
              <br />
              Title: {post.title}
              <br />
              Post Content: {post.body}
            </li>
            )} 
          </ul>
        </div>
      </div>
    </>
   );
}
 