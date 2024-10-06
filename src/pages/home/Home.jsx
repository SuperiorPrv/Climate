import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Section1  */}
      <div className="section1_home">
        <br />
        <br />
        <br />
        <Text size="56px" style={{ maxWidth: "907px", margin: "auto" }}>
          Welcome to the website dedicated to{" "}
          <span style={{ color: "#0000DD" }}>climate</span> and its impact on
          our planet!
        </Text>
        <br />
        <br />
        <Text
          style={{
            maxWidth: "914px",
            margin: "auto",
            fontSize: "32px",
            color: "#333333",
          }}
        >
          Climate is more than just the weather. It's a complex system that
          shapes life on Earth. It affects every living thing, every natural
          phenomenon, and even our daily lives. Understanding the climate and
          its changes is the key to understanding the future of our world.
        </Text>
        <br />
        <br />
      </div>
      <br />
      <br />
      {/* /////////////////////// */}

      {/* Section2  */}

      <div className="section2_home">
        <Text size="56px" color="white" fw={400}>
          You can explore here:
        </Text>
        <br />
        <br />

        <div
          className=""
          style={{
            display: "flex",
            gap: "40px",
            margin: "auto",
            maxWidth: "1100px",
            justifyContent: "space-between",
          }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              backgroundColor: "#EEEEEE",
              maxWidth: "400px",
              padding: "57px",
              borderRadius: "40px",
            }}
          >
            <Text size="32px" fw={600}>
              {" "}
              Climate
            </Text>
            <br />
            <div className="">
              <Text
                color="#000000"
                size="24px"
                fw={400}
                style={{ lineHeight: "35px" }}
              >
                Dive into the fascinating world of climate science and discover
                how Earth's climate shapes everything from weather to
                ecosystems.
              </Text>
              <br />
              <br />
            </div>
            <Button
              style={{
                width: "250px",
                fontSize: "25px",
                height: "60px",
                borderRadius: "20px",
              }}
              variant="gradient"
              gradient={{ from: "rgba(14, 109, 204, 1)", to: "blue", deg: 90 }}
              onClick={() => navigate("/climate")}
            >
              Get Started
            </Button>
          </div>

          <div
            className=""
            style={{
              textAlign: "center",
              backgroundColor: "#EEEEEE",
              maxWidth: "400px",
              padding: "57px",
              borderRadius: "40px",
            }}
          >
            <Text size="32px" fw={600}>
              {" "}
              Climate history
            </Text>
            <br />
            <div className="">
              <Text
                color="#000000"
                size="24px"
                fw={400}
                style={{ lineHeight: "35px" }}
              >
                Journey through the history of Earth’s climate and uncover how
                it has shaped civilizations and ecosystems: From ancient ice
                ages to modern-day global warming.
              </Text>
              <br />
              <br />
            </div>
            <Button
              style={{
                width: "250px",
                fontSize: "25px",
                height: "60px",
                borderRadius: "20px",
              }}
              variant="gradient"
              gradient={{ from: "rgba(14, 109, 204, 1)", to: "blue", deg: 90 }}
              onClick={() => navigate("/history")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* ////////////////// */}
    </div>
  );
};

export default Home;
