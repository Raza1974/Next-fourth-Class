
import Link from "next/link"
<link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        import '@fortawesome/fontawesome-free/css/all.min.css';

export default function header() {
    return (
      <div className="header">
<img src="https://avatars.githubusercontent.com/u/163816473?v=4"alt="Profile Pic" />
<h2 >  
     My Next.js Project
 </h2>
 
<ul className="header-buttons">
          <Link href={"/"} ><li>Home</li></Link>
          <Link href={"/about-us"} ><li>About us</li></Link>
          <Link href={"/contact-us"} ><li>Contact us</li></Link>
          <Link href={"/jobs"} ><li>Jobs</li></Link>
        </ul>

        </div>
        
  
    
    )
    }
