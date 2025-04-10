export default function AboutContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">👋 안녕하세요!</h1>
      <p className="text-lg mb-6 leading-relaxed">
        저는 UrbanFIare입니다. 금융/보험 채널 시스템과 인프라에 관심이 많은 개발자예요.<br />
        개발 언어뿐 아니라, 전체 구조와 흐름을 이해하는 데 집중하고 있어요.<br />
        이곳은 저의 성장과 기록을 담은 공간입니다.
      </p>
      <div className="flex space-x-4 mb-4">
        <a href="https://github.com/urbanfIare" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/gyeonghwan-roh-ab4a96261">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
        </a>
      </div>

      <span className="handle">@urbanfiare-devnog</span>

    </div>
  )
}
