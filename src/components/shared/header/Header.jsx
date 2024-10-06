import { Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();
  return (
    <div className="" style={{ backgroundColor: "#EEEEEE" ,display:"flex",alignItems:"center",justifyContent:'space-between',padding:"12px 72px",flexWrap:"wrap"}}>
      <Text  fw={500} size="36px">Climate</Text><br /><br />
      <ul  style={{listStyle:"none",display:"flex",gap:"70px"}}>
        <Link to="/"  style={pathname=="/"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
          <li>Home</li>
        </Link>
        <Link to="/climate"  style={pathname=="/climate"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
          <li>Climate</li>
        </Link>
        <Link to="history"  style={pathname=="/history"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
          <li>History</li>
        </Link>
        <Link to="/about" style={pathname=="/about"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}} >
        <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
