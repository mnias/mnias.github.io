export default function WorkExperiences() {
  return (
    <section className="w-full px-6 py-12">
      <h1 className="text-2xl font-bold mb-24">Work Experiences</h1>
      <div>
        <div>
          <strong className="text-2xl">퍼스트엔터테인먼트</strong>
        </div>
        <div>
          <div className="mt-12">개발팀</div>
          <div>2019.02 ~ 2025.03</div>
        </div>

        <div className="mt-12 text-18 font-bold">
          오늘과일, 쿠마마켓 관리자 페이지
        </div>
        <div className="mb-8">
          매출 대시보드, 주문서 관리, 결제 관리, 발주서 관리, 상품 관리, 고객
          관리, 쿠폰 관리 등등을 가진 관리자 페이지
        </div>
        <ul>
          <li>- 차트 라이브러리를 활용한 매출 데이터 시각화</li>
          <li>- React.lazy를 적용한 초기 로딩 시간 단축</li>
          <li>- 메모이제이션을 활용하여 주문서 페이지 리렌더링 최적화</li>
          <li>- zod라이브러리를 활용한 데이터 유효성 검증</li>
          <li>
            - 하나의 코드로 여러개의 서비스 관리, 배포하는 환경 구축을 통한
            휴먼에러 감소 및 코드 리뷰속도 단축
          </li>
          <li>- aws-cli를 활용한 AWS S3 버킷에 정적배포</li>
        </ul>
        <ul>
          <li className="mt-12 text-18 font-bold">주요 기술 스택</li>
          <li>- React</li>
          <li>- Redux toolkit</li>
          <li>- Typescript</li>
          <li>- yarn</li>
        </ul>
        <div className="mt-12 text-18 font-bold">
          오늘과일, 쿠마마켓 쇼핑몰 페이지
        </div>
        <div className="mb-8">
          메인 페이지, 상품 상세 페이지, 장바구니 페이지, SNS 후기소통 페이지,
          로그인 등등
        </div>
        <ul>
          <li>
            - Intersection Observer를 활용한 불필요한 DOM 생성방지를 통한한
            대용량 리스트 최적화 및 Infinite scroll 적용
          </li>
          <li>
            - Image Lazy Loading을 적용하여 초기 로딩 시간 단축 및 blur효과를
            통한 자연스러운 로딩화면 구현
          </li>
          <li>- 동적 로드를 통한 페이지 로드 최적화</li>
          <li>- 상품 상세 페이지 SSR적용 및 SEO를 통해 검색 엔진 노출 유도</li>
          <li>- jwt토큰 활용한 로그인 관리</li>
          <li>
            - Docker Compose 및 aws ecr을 통한 배포 환경, blue-green 무중단배포
          </li>
        </ul>
        <ul>
          <li className="mt-12 text-18 font-bold">주요 기술 스택</li>
          <li>- Next.js</li>
          <li>- React</li>
          <li>- Redux toolkit</li>
          <li>- Styled-component</li>
          <li>- Typescript</li>
          <li>- Sentry</li>
          <li>- yarn</li>
        </ul>
        <div className="mt-12 text-18 font-bold">관리자 QNA 챗봇 페이지</div>
        <div className="mb-8">
          AI와 대화하여 관리자 기능 설명을 확인할 수 있는 페이지
        </div>
        <ul>
          <li>- nextjs API와 openai 라이브러리를 통해 대화형 질답 페이지 구현</li>
        </ul>
        <ul>
          <li className="mt-12 text-18 font-bold">주요 기술 스택</li>
          <li>- Next.js</li>
          <li>- Styled-component</li>
          <li>- Typescript</li>
          <li>- yarn</li>
        </ul>
      </div>
    </section>
  );
}
