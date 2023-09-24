import { useState, useEffect } from 'react';
 const PostList = ()=>{
    const [post,setPost]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then((data)=>setPost(data))
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            <table border={'1px'} style={{ margin: 'auto' }}>
                <tr>
                    <th>
                        Name
                    </th>
                </tr>
                
                {
                    post.map((post)=>{
                        return <tr>
                            <td key={post.id}>{post.title}</td>
                            </tr>
                    })
                }
                
            </table>
        </div>
    )
}

export default PostList