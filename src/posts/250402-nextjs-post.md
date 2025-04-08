---
title: "Next.js 블로그 개발일지 - 카테고리, 태그, 사이드바 구현 및 구조 개선"
date: "2025-04-02"
category: "개발일지"
summary: "블로그에 카테고리 및 태그 필터링 기능과 반응형 사이드바를 구현하고, 구조적 문제를 해결하며 전체적인 블로그 구조를 개선한 개발일지 입니다."
---

## ✅ 오늘 작업 요약 (2025-04-02)

---

### 1. 카테고리 페이지 구현

- `/category/[category].js` 동적 라우트 생성
- `getStaticPaths()`를 통해 모든 카테고리 경로 정적 생성
- `getStaticProps()`에서 해당 카테고리에 해당하는 글만 필터링
- 카테고리 페이지 상단에는 현재 카테고리명을 출력
- 전체 글로 돌아갈 수 있도록 `/blog` 링크 추가

---

### 2. 태그 시스템 도입

- `.md` 파일 내 front matter에 `tags` 필드를 추가
- `getAllPosts()`로 불러온 데이터에서 `post.tags` 추출
- 각 글 카드 아래에 `#태그` 목록 출력
- 추후 태그 클릭 시 태그별 글 필터링도 가능하도록 구조 설계

```md
---
title: 'ISR에 대해 알아보기'
category: 'Next.js'
tags: ['Next.js', 'ISR', 'SSG']
---
```

```jsx
{post.tags.map(tag => (
  <span key={tag}>#{tag}</span>
))}
```

---

### 3. 반응형 사이드바 레이아웃 구성

- 사이드바는 `max-w-[280px]`로 왼쪽에 고정
- 본문은 `flex-1`로 나머지 공간을 차지
- Tailwind의 `flex`, `gap`, `sticky`, `self-start` 등을 조합해 반응형 대응

```jsx
<div className="flex max-w-7xl mx-auto px-4 py-8 gap-6">
  <aside className="w-full max-w-[280px] lg:block hidden sticky top-20 self-start">
    <Sidebar categories={categories} />
  </aside>
  <main className="flex-1">
    ...
  </main>
</div>
```

---

### 4. 구조적 문제 해결

#### 🙅 `fs` 오류 발생

- `Sidebar.js`에서 `getAllCategories()`를 호출했을 때 오류 발생
- 이유는 `fs`는 Node.js 전용 모듈이라 브라우저에서 실행 불가

#### ✅ 해결 방법

- 모든 파일 접근 함수는 `getStaticProps()` 같은 서버 전용 함수 내부에서만 실행
- 클라이언트 컴포넌트에는 필요한 데이터를 props로만 전달

---

### 5. 불필요한 레이아웃 중복 제거

- `<BlogLayout />`을 self-closing으로 사용할 경우 children이 포함되지 않아 본문이 분리되는 문제 발생
- 반드시 `<BlogLayout> ... </BlogLayout>`처럼 감싸는 방식으로 사용해야 레이아웃이 올바르게 동작

---

### 6. 현재 전체 구조 아키텍처 점검

- SSG 기반 정적 사이트
- Markdown 기반 콘텐츠
- Tailwind CSS로 반응형 디자인
- 페이지 라우팅:
  - `/blog`: 전체 글
  - `/blog/[slug]`: 글 상세
  - `/category/[category]`: 카테고리별 글

---

### 📌 다음 작업 아이디어

- `/tag/[tag]` 경로를 추가해 태그별 필터링
- 검색 기능 (클라이언트 필터 or Algolia)
- 태그/카테고리 목록 UI 강화
- 작성일 기준 정렬 기능

---

오늘은 기능 완성과 동시에 구조적인 오류를 잡아가며 점점 더 안정적인 블로그로 발전시키는 과정이었다 💪
