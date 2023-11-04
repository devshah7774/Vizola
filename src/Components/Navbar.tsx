import "./Navbar.css";

function Navbar(){
   return(<>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div className="navbar">Vizola</div>
      <div className="menu">
         <div className="menuEle">Home</div>
         <div className="menuEle">About us</div>
         <div className="menuEle">Carreers</div>
         <div className="menuEle">Book a demo</div>
         <button className="btn btn-gradient-border btn-glow">Signup</button>
      </div>
      </div>
   </>);
}

export default Navbar;