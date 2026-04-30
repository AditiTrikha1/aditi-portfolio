
"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-6xl animate-pulse opacity-40">
          🌸
        </div>

        <div className="text-center z-10">
          <h1 className="text-5xl font-bold text-pink-600 animate-pulse">
            The Ordinary Girl
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Loading creator portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${darkMode
        ? "bg-[#120814] text-white"
        : "bg-gradient-to-br from-pink-50 via-white to-rose-100 text-gray-900"
        } min-h-screen overflow-hidden relative font-sans scroll-smooth transition-all duration-500`}
    >
      {/* Floating Cherry Blossoms */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-40 text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              fontSize: `${16 + Math.random() * 18}px`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Cursor Glow */}
      <div className="fixed w-32 h-32 bg-pink-200/20 blur-3xl rounded-full pointer-events-none top-20 left-20"></div>

      {/* Dark Mode Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-lg shadow-xl px-5 py-2 rounded-full border border-pink-200 hover:scale-105 transition-all"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Floating Widgets */}
      <div className="fixed right-6 bottom-24 z-50 flex flex-col gap-4">
        <a
          href="https://youtube.com/@theordinarygirl13"
          target="_blank"
          className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all border border-red-100"
        >
          <img
            src="/images/youtubeicon.png"
            alt="YouTube"
            className="w-12 h-12 object-contain"
          />
        </a>

        <a
          href="https://instagram.com/the_ordinary_girl06"
          target="_blank"
          className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all border border-pink-100"
        >
          <img
            src="/images/instagramicon.png"
            alt="Instagram"
            className="w-12 h-12 object-contain"
          />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl mb-6">
          <img
            src="/images/profile.jpeg"
            alt="Aditi Trikha"
            className="w-full h-full object-cover"
          />
        </div>

        <h1
          className={`text-5xl md:text-6xl font-bold ${darkMode ? "text-white" : "text-gray-800"
            }`}
        >
          Aditi Trikha
        </h1>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <div className="bg-white/80 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-pink-100">
            <h3 className="font-bold text-2xl text-pink-500">5.94k+</h3>
            <p className="text-sm text-gray-500">YouTube Subscribers</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-pink-100">
            <h3 className="font-bold text-2xl text-purple-500">Creator</h3>
            <p className="text-sm text-gray-500">Lifestyle & Reels</p>
          </div>
        </div>

        <p
          className={`mt-6 text-lg md:text-xl ${darkMode ? "text-pink-100" : "text-gray-600"
            } max-w-2xl leading-relaxed`}
        >
          Content Creator • Social Media Manager • Community Builder
          <br />
          Passionate about content creation, social media trends,
          audience engagement, and building a strong digital presence.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://youtube.com/@theordinarygirl13"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-3 rounded-2xl shadow-xl font-semibold"
          >
            YouTube Channel
          </a>

          <a
            href="https://instagram.com/the_ordinary_girl06"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all text-white px-6 py-3 rounded-2xl shadow-xl font-semibold"
          >
            Instagram Profile
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 px-6 md:px-20 py-12">
        <div
          className={`${darkMode
            ? "bg-pink-100/10 backdrop-blur-xl border border-pink-300/20"
            : "bg-white/70 border border-pink-100"
            } rounded-3xl shadow-2xl p-8 md:p-12`}
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-6">
            About Me
          </h2>

          <p
            className={`leading-8 text-lg ${darkMode ? "text-pink-50" : "text-gray-700"
              }`}
          >
            Computer Science engineering student with strong communication, teamwork, 
            and problem-solving skills, currently pursuing B.Tech in CSE from Medicaps 
            University. Alongside academics, I independently manage and create fashion 
            and lifestyle content across YouTube and Instagram, focusing on budget-friendly, 
            Pinterest-inspired outfits, aesthetic styling, audience engagement, and social media management. 
            <br />
            <br />
            Experienced in content planning, brand-focused presentation, community interaction, 
            and maintaining a consistent online presence while balancing academics and creative work.
          </p>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="relative z-10 px-6 md:px-20 py-20">
        <h2
          className={`text-4xl font-bold text-center ${darkMode ? "text-white" : "text-gray-800"
            } mb-14`}
        >
          Social Platforms
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* YouTube */}
          <a
            href="https://youtube.com/@theordinarygirl13"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode
              ? "bg-pink-100/10 border border-pink-300/20"
              : "bg-white/80 border border-red-100"
              } group backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition-all`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                <img
                  src="/images/youtubeicon.png"
                  alt="YouTube"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3
                className={`mt-6 text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"
                  }`}
              >
                YouTube
              </h3>

              <p
                className={`mt-3 leading-7 ${darkMode ? "text-pink-100" : "text-gray-600"
                  }`}
              >
                Lifestyle, relatable, and entertainment-focused content
                featuring trending edits, engaging shorts, and
                audience-focused videos.
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/the_ordinary_girl06"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode
              ? "bg-pink-100/10 border border-pink-300/20"
              : "bg-white/80 border border-pink-100"
              } group backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition-all`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center">
                <img
                  src="/images/instagramicon.png"
                  alt="Instagram"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3
                className={`mt-6 text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"
                  }`}
              >
                Instagram
              </h3>

              <p
                className={`mt-3 leading-7 ${darkMode ? "text-pink-100" : "text-gray-600"
                  }`}
              >
                Creative reels, aesthetic posts, and engaging trend-based
                content focused on audience interaction and social growth.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-10 px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center ${darkMode ? "text-white" : "text-gray-800"
              } mb-12`}
          >
            Skills & Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Content Creation",
              "Social Media Management",
              "Instagram Reels",
              "YouTube Shorts",
              "Video Editing",
              "Audience Engagement",
              "Content Planning",
              "Canva Design",
              "Brand Collaboration",
              "Community Management",
              "Communication Skills",
              "Creative Strategy",
            ].map((skill) => (
              <div
                key={skill}
                className={`px-6 py-3 rounded-full shadow-lg border font-medium hover:scale-105 transition-all duration-300 ${darkMode
                  ? "bg-pink-100/10 backdrop-blur-xl border-pink-300/20 text-pink-50"
                  : "bg-white/80 border-pink-100 text-gray-700"
                  }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div
          className={`${darkMode
            ? "bg-pink-100/10 backdrop-blur-xl border border-pink-300/20"
            : "bg-white/80 border border-pink-100"
            } rounded-3xl shadow-2xl max-w-3xl mx-auto p-10`}
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Let’s Connect
          </h2>

          <p
            className={`text-lg leading-8 ${darkMode ? "text-pink-50" : "text-gray-700"
              }`}
          >
            Open to collaborations, creator partnerships,
            social media roles, and exciting opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adititrikha13120@gmail.com&su=Collaboration%20Inquiry&body=Hi%20Aditi,%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-fuchsia-500 to-pink-400 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-3 rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-300 hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://instagram.com/the_ordinary_girl06"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-3 rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-300 hover:scale-105"
            >
              DM on Instagram
            </a>

            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-3 rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-300 hover:scale-105"
            >
              Media Kit
            </a>

          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="relative z-10 text-center py-10 text-gray-500 text-sm" >
        © 2026 Aditi Trikha • Built with creativity & cherry blossoms 🌸
      </footer >
    </div >
  );
}
