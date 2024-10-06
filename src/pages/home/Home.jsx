import { Button, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import img from "./images/image 1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Section1  */}
      <div className="section1_home">
        <br />
        <br />
        <br />
        <Text size="56px" style={{ maxWidth: "950px", margin: "auto", fontWeight:"500" }}>
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
            fontWeight: "500"
          }}
        >
          Climate is more than just the weather. {"It's"} a complex system that
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
            flexWrap: "wrap",
            margin: "auto",
            display: "flex",
            gap: "40px",
            maxWidth: "1100px",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              backgroundColor: "#EEEEEE",
              maxWidth: "400px",
              padding: "20px",
              borderRadius: "40px",
              margin: "auto",
              minHeight:"420px"
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
                {"Dive into the fascinating world of climate science and discover how Earth's climate shapes everything from weather to ecosystems."}
              </Text>
              <br />
              <br />
            </div>
            <Button
              style={{
                width: "250px",
                fontSize: "25px",
                height: "60px",
                borderRadius: "13px",
                margin:"auto"
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
              padding: "20px",
              borderRadius: "40px",
              margin: "auto",
              minHeight:"420px"

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
                borderRadius: "13px",
                margin: "auto"
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

      {/* section 3 */}

      <div className="section3_home">
        <Text size="56px" color="white" fw={400}>
          Why does it matter?
        </Text>
        <br />
        <br />
        <br />

        <div
          className=""
          style={{
            display: "flex",
            flexWrap:"wrap",
            gap:"40px",
            backgroundColor: "#2244FF80",
            maxWidth: "1000px",
            margin: "auto",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <div
            className=""
            style={{ maxWidth: "422px", textAlign: "start", color: "#FFFFFF",margin:"auto" }}
          >
            <Text size="26px" fw={400}>
              Understanding climate is essential for our survival and
              well-being. As the planet warms, we face unprecedented challenges,
              from rising sea levels and extreme weather events to food and
              water scarcity. These changes impact not only the environment but
              also human health, economies, and social stability
            </Text>
          </div>
          <div className="" style={{margin:"auto"}}>
            <Image radius="md" src={img} />
          </div>
        </div>
      </div>

      {/* ////////////////// */}
    </div>
  );
};

export default Home;
