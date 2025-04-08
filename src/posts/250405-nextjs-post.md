---
title: "디자인 개선 및 블로그 기능 확장"
date: "2025-04-05"
category: "개발일지"
summary: "전체 레이아웃과 스타일을 개선하고 사이드바, 카테고리 시스템을 도입했습니다."
tags: ["next.js", "blog", "markdown", "springboot", "postgresql"]
---


# 🎨 2025-04-05 개발 일지 - 블로그 레이아웃 개선 및 확장

## ✅ 주요 작업

- TailwindCSS로 기본 스타일 개선 (`max-w-3xl`, `prose`, 다크모드 등)
- 사이드바 컴포넌트 생성
- 카테고리 시스템 도입 및 카테고리별 필터링 기능 구현

## 📌 트러블슈팅

- `fs` 사용 시 Next.js에서 오류 발생 → `getStaticProps` 내부에서만 사용되도록 조정