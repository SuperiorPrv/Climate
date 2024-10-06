import { Text, Burger, Drawer } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.css"
import { useDisclosure } from "@mantine/hooks";
import telegram from '../../../assets/icons/telegram.png';
import nasa from '../../../assets/icons/nasa.png';
import nasaspaceapps from '../../../assets/icons/nasaspaceapps.png';

const Footer = () => {
  const {pathname} = useLocation();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
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
        <div className={styles.container}>
          <div>
            <p style={{fontSize:"22px"}}>Climate@2024. All right reserved</p>
          </div>
          <div className={styles.nav}>
            <a href="https://t.me/SuperiorPrv" target="_blank"><img style={{width:"50px", height:"50px"}} src={telegram} alt="" /></a>
            <a href="https://www.nasa.gov/" target="_black"><img style={{width:"50px", height:"50px"}} src={nasa} alt="" /></a>
            <a href="https://www.spaceappschallenge.org/" target="_blank"><img style={{width:"50px", height:"50px"}} src={nasaspaceapps} alt="" /></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
