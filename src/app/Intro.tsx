export default function Intro() {
  return (
    <section className="w-full">
      <div className="py-24">
        <h1 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-300 pb-24">
          프론트엔드 개발자 박경환입니다.
        </h1>
      </div>
      <section className="w-full border-b-1 border-gray-300 my-24 divide-y divide-gray-300">
        <div className="flex items-center py-16">
          <div className="w-24/100">
            <strong>Github</strong>
          </div>
          <div>
            <a
              href="https://github.com/mnias"
              className="text-sky-500 hover:underline"
            >
              https://github.com/mnias
            </a>
          </div>
        </div>
        <div className="flex items-center py-16">
          <div className="w-24/100">
            <strong>Email</strong>
          </div>
          <div>
            <span className="text-sky-500">mythos2495@gmail.com</span>
          </div>
        </div>
      </section>
    </section>
  );
}
