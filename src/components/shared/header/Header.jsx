import { Text, Burger, Drawer } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css"
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const {pathname} = useLocation();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div style={{ backgroundColor: "#EEEEEE" ,display:"flex",alignItems:"center",justifyContent:'space-between',padding:"12px 72px"}}>
      <Text  fw={500} size="36px">Climate</Text><br /><br />
      <ul className={styles.nav}>
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
      <Burger onClick={open} className={styles.burger}/>
      <Drawer size="40%" position="right" opened={opened} onClose={close}>
        <ul style={{listStyle:"none"}}>
          <Link to="/" onClick={()=>close()} style={pathname=="/"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
            <li>Home</li>
          </Link>
          <Link to="/climate" onClick={()=>close()} style={pathname=="/climate"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
            <li>Climate</li>
          </Link>
          <Link to="history" onClick={()=>close()} style={pathname=="/history"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}}>
            <li>History</li>
          </Link>
          <Link to="/about" onClick={()=>close()} style={pathname=="/about"?{color:"black",fontSize:"24px",fontWeight:"600"}:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"400"}} >
          <li>About</li>
          </Link>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
