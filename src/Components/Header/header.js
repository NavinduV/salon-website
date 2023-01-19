import NavBar from '../Navbar/Navbar';
 
function Header() {   
    return (
    <header id="header" className="d-flex align-items-center" >
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="index.html" className="logo"><img src="assets/image/logo.png" alt="" className="img-fluid"/></a>
                </h1>

                <NavBar />
                
            </div>
        </header>
    );
}
 
 export default Header;
 