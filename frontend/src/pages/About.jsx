import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
  };

  const socialBtnStyle = {
    margin: "10px",
    padding: "10px 20px",
    background: "#27272a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "inline-block",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/doshnaaa.jpeg"
        alt="Doshnavi Devi"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #f97316",
          marginBottom: "20px",
          boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
        }}
      />

      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          color: "#fff",
        }}
      >
        About Me
      </h2>

      <h3
        style={{
          fontSize: "1.5rem",
          color: "#f97316",
          marginBottom: "15px",
        }}
      >
        Doshnavi Devi (@DoshnaviDevi)
      </h3>

      {/* Updated About Section */}
      <p
        style={{
          color: "#d4d4d8",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
        }}
      >
        Hi! I'm <strong>Doshnavi Devi</strong>, a passionate Final Year B.Tech
        student and aspiring <strong>MERN Stack Developer</strong>. I enjoy
        building responsive and user-friendly full-stack web applications using{" "}
        <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
        <br />
        <br />
        I have developed projects like an{" "}
        <strong>E-Commerce Web Application</strong> and continuously improve my
        skills by solving{" "}
        <strong>Data Structures & Algorithms</strong> problems on LeetCode.
        <br />
        <br />
        I'm currently looking for opportunities where I can learn, contribute,
        and grow as a Full Stack Developer while creating efficient and scalable
        web applications.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <a
          href="https://github.com/DoshnaviDevi"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/konala-doshnavi-devi-090801318/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/doshnaaaa"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          LeetCode
        </a>
      </div>
    </div>
  );
};

export default About;