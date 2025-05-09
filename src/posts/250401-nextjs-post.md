---

title: "Next.js 블로그 개발일지 - Next.js와 Tailwind로 나만의 블로그 만들기"
category: "개발일지"
date: "2025-04-01"
summary: "Next.js와 TailwindCSS, Markdown을 활용해 기술 블로그를 만들고, 디자인과 ISR까지 적용한 과정에 대한 개발일지 입니다."

---

안녕하세요! 이 글은 제가 직접 만든 기술 블로그의 첫 번째 게시글입니다.  
Next.js와 TailwindCSS를 이용해 나만의 블로그를 만들고, Markdown 기반 포스트 시스템과 디자인 개선, 그리고 ISR(Incremental Static Regeneration)까지 적용해봤어요.

---

## 🛠 사용한 기술 스택

- 💡 **Next.js (Pages Router)**: 빠르고 SEO에 유리한 정적 사이트를 쉽게 생성할 수 있는 React 기반 프레임워크입니다.
- 🎨 **Tailwind CSS**: 유틸리티 클래스 기반으로 빠르게 반응형 UI를 설계할 수 있게 해주는 CSS 프레임워크입니다.
- 📝 **Markdown**: 콘텐츠를 `.md` 파일로 작성해 쉽게 저장하고 관리할 수 있습니다.
- ⚙️ **gray-matter / remark**: Markdown 파일의 메타데이터를 파싱하고 HTML로 변환하는 데 사용합니다.
- 🔄 **ISR (Incremental Static Regeneration)**: 정적 페이지를 실시간처럼 갱신할 수 있도록 해주는 Next.js 기능입니다.

---

## 🎨 디자인 개선 과정 ✨

처음에는 Tailwind 기본 스타일이라 뭔가 아쉬운 느낌이 있었어요. 그래서...

- 📐 전체 레이아웃은 `max-w-3xl`로 설정해 콘텐츠가 중앙에 정돈되도록 구성했습니다.
- 📝 텍스트는 `prose` 클래스를 활용해 문단 간 간격과 타이포그래피 가독성을 높였습니다.
- 🧩 헤더와 푸터는 공통 컴포넌트로 구성하고, 헤더에는 sticky 속성을 적용해 항상 상단에 고정되도록 했습니다.
- 📄 블로그 목록은 카드 형식에서 리스트 중심 UI로 변경해 가독성과 콘텐츠 집중도를 높였습니다.

---

## ⚙️ ISR 적용

Next.js의 `getStaticProps`와 `revalidate` 옵션으로 ISR을 적용했어요:

```js
export async function getStaticProps() {
  return {
    props: { posts },
    revalidate: 60, // 60초마다 정적 페이지 갱신
  };
}
```

즉, 글을 수정하거나 새로 추가해도 자동으로 갱신된 정적 페이지가 생성돼요.

---

## ✍️ 앞으로의 블로그 계획 🗺️

- 🌙 **다크모드 지원**: 사용자의 시스템 설정에 따라 어두운 테마를 자동 적용할 수 있도록 할 예정입니다.
- 🏷️ **태그 및 카테고리 시스템**: 글을 분류하고 필터링할 수 있도록 설계 예정입니다.
- 🔍 **검색 기능**: 키워드로 포스트를 쉽게 찾을 수 있도록 클라이언트 사이드 검색을 구현할 예정입니다.
- 💬 **댓글 시스템**: GitHub 기반 댓글 시스템인 utterances를 연동해 사용자 피드백을 받을 계획입니다.

---

## 🙌 마무리

이 블로그는 제 기술 여정을 기록하고, 학습한 내용을 공유하기 위해 만들었어요.  
앞으로도 꾸준히 업데이트하면서 저만의 개발 아카이브를 만들어갈 예정입니다.

읽어주셔서 감사합니다! 😊
