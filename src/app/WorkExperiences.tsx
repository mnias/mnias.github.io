import AdminChatbotInfo from "./AdminChatbotInfo";
import AdminInfo from "./AdminInfo";
import CumaInfo from "./CumaInfo";

export default function WorkExperiences() {
  return (
    <section className="w-full px-6 py-12">
      <h1 className="text-2xl font-bold mb-24">Work Experiences</h1>
      <div>
        <div>
          <strong className="text-2xl">
            <span>퍼스트엔터테인먼트 (2019.02 ~ 2025.03)</span>
          </strong>
        </div>
        <CumaInfo />
        <AdminInfo />
        <AdminChatbotInfo />
      </div>
    </section>
  );
}
