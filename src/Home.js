import { useState , useEffect} from "react";
import { BlogList } from "./BlogList";

export const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body:"lorem ipsum...", author:"Mario", id:1 },
        { title: "Welcome Home", body:"lorem ipsum...", author:"Nadwa", id:2 },
        { title: "My application", body:"lorem ipsum...", author:"Ivy", id:3 }
    ]);

    const [name, setName] = useState('mario')
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);	
        setBlogs(newBlogs);  
    }
    
    useEffect(()=>{
        console.log(name)
    }, [name])

    return(
        <div className="home">
          <BlogList blogs= { blogs } title="All Blogs!" handleDelete={handleDelete}/>
          {/* <BlogList blogs= { blogs.filter((blog)=> blog.author==="Mario")} title="Mario's Blogs!"/> */}
          <button onClick={()=> setName('luigi')}>change name</button>
          <p>{name}</p>
        </div>
    )
}