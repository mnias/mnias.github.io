import Intro from "./Intro";
import WorkExperiences from "./WorkExperiences";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto flex flex-col items-center max-w-720">
      <Intro />
      <WorkExperiences />
      <footer>감사합니다.</footer>
    </main>
  );
}
