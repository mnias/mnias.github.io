export default function AdminChatbotInfo() {
  return (
    <>
      <div className="mt-12 text-[24px] font-bold">관리자 QNA 챗봇 페이지</div>
      <div className="mb-8">
        AI와 대화하여 관리자 기능 설명을 확인할 수 있는 페이지
      </div>
      <ul>
        <li>- 백엔드 API없이 nextjs API Routes와 openai 라이브러리를 사용</li>
      </ul>
      <ul>
        <li className="mt-12 text-18 font-bold">주요 기술 스택</li>
        <li>- Next.js</li>
        <li>- Styled-component</li>
        <li>- Typescript</li>
        <li>- yarn</li>
      </ul>
    </>
  );
}
