---
title: "Markdown 블로그 시스템 구성"
date: "2025-04-04"
category: "개발일지"
summary: "MD 파일을 읽어 블로그 포스트 목록과 상세 페이지를 구현했습니다."
tags: ["next.js", "blog", "markdown", "springboot", "postgresql"]
---


# 📘 2025-04-04 개발 일지 - Markdown 블로그 구성

## ✅ 주요 작업

- `gray-matter`로 마크다운 파일의 메타데이터 파싱
- `remark` + `rehype` 조합으로 마크다운 렌더링
- `getStaticPaths`와 `getStaticProps`를 활용한 동적 라우팅 구성

## 📌 트러블슈팅

- `getStaticPaths`가 동적 페이지가 아닌 곳에서 사용돼 에러 발생 → 파일명 `[slug].js`로 수정 해결