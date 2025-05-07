export default function CumaInfo() {
  return (
    <>
      <div className="mt-12 text-[24px] font-bold">
        오늘과일, 쿠마마켓 쇼핑몰 페이지
      </div>
      <div className="my-8">
        오늘과일은 과일을 전문으로 각종 식품들도 저렴하게 판매하는 먹거리
        쇼핑몰입니다.
        <br />
        쿠마마켓은 오늘과일과 구성은 거의 같지만 각종 잡화나 화장품등을 판매하는
        쇼핑몰입니다.
        <br />
        Nextjs의 page router를 기반으로하여 메인페이지, 상품 상세, 결제,
        장바구니 등 웹 서비스 전체 기능을 구현
      </div>
      <div className="my-8">
        <strong>참여인원</strong> - 프론트엔드 1명, 백엔드 1명, 기획&디자이너
        1명
      </div>

      <div className="space-y-8">
        {/* SNS 탭 */}
        <section>
          <h3 className="mt-8 font-bold text-lg mb-4">주요 개발 내용</h3>
          <ul className="space-y-2">
            <li>
              - Intersection Observer를 활용한 불필요한 DOM 생성방지를 통한
              대용량 리스트 최적화 및 Infinite scroll 구현
            </li>
            <li>
              - Image Lazy Loading을 적용하여 초기 로딩 시간 단축 및 blur효과를
              통한 자연스러운 로딩화면 구현
            </li>
            <li>
              - 상품 상세 페이지 SSR적용 및 SEO를 통해 검색 엔진 노출 유도
            </li>
            <li>- 결제 시스템 연동(tosspayments) 및 주문 프로세스 구현</li>
            <li>- jwt토큰 활용한 로그인 관리 및 SNS로그인</li>
            <li>
              - script를 활용한 Docker compose, aws ecr, ec2를 사용하여 배포
            </li>
            <li>- blue/green 무중단 배포</li>
          </ul>
        </section>

        {/* 기술 스택 */}
        <section>
          <h3 className="mt-8 font-bold text-lg mb-4">주요 기술 스택</h3>
          <ul className="space-y-2">
            <li>- Next.js</li>
            <li>- React</li>
            <li>- Redux toolkit</li>
            <li>- styled-components</li>
            <li>- Typescript</li>
            <li>- Sentry</li>
          </ul>
        </section>
      </div>
    </>
  );
}
