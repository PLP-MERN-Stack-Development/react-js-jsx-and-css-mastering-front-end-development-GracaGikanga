// src/pages/About.jsx
import "../styles/about.css";

function Abouts() {
  return (
    <div className="about">
      <h1>About Task Manager</h1>

      <section className="about-intro">
        <p>
          Task Manager is a simple yet powerful productivity tool designed to
          help you organize, prioritize, and complete your daily tasks with
          ease. Whether you’re managing schoolwork, projects, or personal
          goals — Task Manager keeps everything in one place.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe productivity shouldn’t be complicated. Our mission is to
          help people focus on what truly matters by providing a clean,
          intuitive interface that turns to-do lists into real progress.
        </p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Task Manager started as a small side project to make everyday task
          tracking more enjoyable. Over time, it evolved into a community-driven
          productivity app that helps users stay consistent, motivated, and in
          control of their time.
        </p>
      </section>

      <section className="about-features">
        <h2>What Makes It Different</h2>
        <ul>
          <li>✅ Save and access your tasks instantly using local storage.</li>
          <li>🎯 Filter between All, Active, and Completed tasks easily.</li>
          <li>🔍 Quickly find what you need with a built-in search bar.</li>
          <li>🎨 Toggle light, dark, or pink themes with one click.</li>
          <li>💾 Your progress stays safe even after refreshing the page.</li>
        </ul>
      </section>

      <section className="about-cta">
        <h2>Get Started</h2>
        <p>
          Ready to take control of your day? Head over to the{" "}
          <a href="/">Home</a> page and start organizing your tasks now.
        </p>
      </section>
    </div>
  );
}

export default Abouts;
