import React from "react";
import './SideBar.css'
export default function SIdeBar() {
  return (
    <div className="main">
      <div className="sideLine">
        <ul>
          <li><i class="fa fa-home" aria-hidden="true"></i></li>
          <li><i class="fa fa-desktop" aria-hidden="true"></i></li>
          <li><i class="fa fa-folder-open" aria-hidden="true"></i></li> 
          <li><i class="fa fa-eye" aria-hidden="true"></i></li>
        </ul>
        </div>
     
      <div className="Geners"><h3>Geners</h3>
        <ul>
            <li>Action</li>
            <li>comedy</li>
            <li>Adventure</li>
            <li>Biography</li>
            <li>Crime</li>
            <li>Drama</li>
            <li>History</li>
            <li>Scifi</li>
        </ul>
      </div>
    </div>
  );
}
