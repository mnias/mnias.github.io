export default function AdminInfo() {
  return (
    <>
      <div className="mt-12 text-[24px] font-bold">
        오늘과일, 쿠마마켓 관리자 페이지
      </div>
      <div className="my-8">
        오늘과일과 쿠마마켓의 어드민 페이지로 매출 대시보드와 상품, 주문서, 송장
        관리 등의 기능이 있는 페이지
        <br />
        React를 기반으로 S3에 정적배포하여 운영하는 페이지
      </div>
      <div className="my-8">
        <strong>참여인원</strong> - 프론트엔드 1명, 백엔드 1명, 기획&디자이너
        1명
      </div>
      <ul>
        <li>- 차트 라이브러리(nivo)를 활용한 매출 데이터 시각화</li>
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
        <li>- styled-components</li>
        <li>- Typescript</li>
        <li>- yarn</li>
      </ul>
    </>
  );
}
