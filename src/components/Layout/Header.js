import { NavLink } from "react-router-dom";


const ActiveStyle = {
  color: '#d4a762',
  fontWeight: 'bold'
};

function Header() {
  return (
    <>
      <header className="gdlr-header-wrapper">
        <div className="gdlr-header-inner">
          <div className="gdlr-header-container container">
            <div className="gdlr-logo">
              <div className="gdlr-logo-inner">
                <NavLink to="/">
                  <img src="frontend/anh/logo.png" alt="Shilla Monogram Logo" />
                </NavLink>
                
                {/* Mobile Menu */}
                <div className="gdlr-responsive-navigation dl-menuwrapper" id="gdlr-responsive-navigation">
                  <ul id="menu-main-menu" className="dl-menu gdlr-main-mobile-menu">
                    <li className="menu-item">
                      <NavLink 
                        to="/" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Trang chủ
                      </NavLink>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <NavLink 
                        to="/Facility" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Cơ sở vật chất
                      </NavLink>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <NavLink 
                        to="/Room" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Phòng
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink 
                        to="/Booking" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Đặt lịch
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink 
                        to="/Blog" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink 
                        to="/Product" 
                        style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      >
                        Menu
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="gdlr-navigation-wrapper" style={{marginTop:"0px"}}>
              <nav className="gdlr-navigation" id="gdlr-main-navigation" role="navigation">
                <ul id="menu-main-menu-1" className="sf-menu gdlr-main-menu">
                  <li className="menu-item gdlr-normal-menu">
                    <NavLink 
                      to="/" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                    >
                      Trang chủ
                    </NavLink>
                  </li>
                  
                  <li className="menu-item menu-item-has-children gdlr-normal-menu">
                    <NavLink 
                      to="/Facility" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      className="sf-with-ul-pre"
                    >
                      Cơ sở vật chất
                    </NavLink>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <NavLink 
                          to="/about-us" 
                          style={({ isActive }) => isActive ? ActiveStyle : undefined}
                        >
                          Tiện ích & Dịch vụ
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="menu-item menu-item-has-children gdlr-normal-menu">
                    <NavLink 
                      to="/Room" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      className="sf-with-ul-pre"
                    >
                      Phòng
                    </NavLink>
                  </li>
                  
                  <li className="menu-item gdlr-normal-menu">
                    <NavLink 
                      to="/Booking" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                    >
                      Đặt lịch
                    </NavLink>
                  </li>
                  
                  <li className="menu-item menu-item-has-children gdlr-normal-menu">
                    <NavLink 
                      to="/Blog" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                      className="sf-with-ul-pre"
                    >
                      Blog
                    </NavLink>
                  </li>
                  
                  <li className="menu-item menu-item-has-children gdlr-normal-menu">
                    <NavLink 
                      to="/Product" 
                      style={({ isActive }) => isActive ? ActiveStyle : undefined}
                    >
                      Menu
                    </NavLink>
                  </li>
                </ul>
              </nav>
              
              <span className="gdlr-menu-search-button-sep">•</span>
              <i className="fa fa-search icon-search gdlr-menu-search-button" id="gdlr-menu-search-button" />
              
              <div className="gdlr-menu-search" id="gdlr-menu-search">
                <form method="get" id="searchform" action="#">
                  <div className="search-text">
                    <input type="text" defaultValue="Type Keywords" name="s" autoComplete="off" data-default="Type Keywords" />
                  </div>
                  <input type="submit" defaultValue />
                  <div className="clear" />
                </form>
              </div>
              
              <div className="gdlr-navigation-gimmick" id="gdlr-navigation-gimmick" />
              <div className="clear" />
            </div>
            <div className="clear" />
          </div>
        </div>
      </header>

      {/* CSS tích hợp */}
      <style jsx>{`
        .gdlr-main-menu a:hover,
        .gdlr-main-mobile-menu a:hover {
          color: #d4a762;
        }
        
        .gdlr-main-menu li.active a,
        .gdlr-main-mobile-menu li.active a {
          color: #d4a762;
          font-weight: bold;
        }
        
        .sub-menu li a {
          padding: 8px 15px;
          display: block;
        }
        
        .sub-menu li a:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

export default Header;