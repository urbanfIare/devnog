---
title: "Next.js 블로그 개발일지 - 디자인 & GitHub 연동 통합 기록"
date: "2025-04-08"
categories: ["개발일지"]
tags: ["Next.js", "Tailwind", "블로그 개발", "GitHub", "카테고리"]
summary: "디자인 고도화, Git 연동, 배포 준비 및 카테고리 기능을 정리한 하루치 통합 개발 일지입니다."
---

# 🛠️ 2025-04-08 작업 일지 - 디자인 & GitHub 연동 통합 기록

오늘은 블로그의 첫인상을 결정짓는 Hero 섹션과 고정 Header 개선뿐 아니라,  
GitHub 연동 및 Vercel 배포 준비, 카테고리 단일화와 사이드바 개선까지 여러 핵심 작업을 수행했다.

---

## ✅ 주요 작업 개요

- 블로그 상단 구조 개선 및 고정 헤더 적용
- Hero 섹션 추가로 시각적 몰입도 향상
- Header에 SNS 링크 및 텍스트 로고 추가
- GitHub 인증 오류 해결 및 SSH 키 등록
- `.env.local` 설정 및 Vercel 배포 준비
- 카테고리 기능 단일 문자열 구조로 단순화

---

## 🎯 상세 작업 내역

### 1. Hero 영역 구조 개선

- Tailwind bg-url 유틸리티를 활용해 안정적인 Hero 구성
- 텍스트 중심의 시각적 환영 메시지 삽입
- 상단 공간 확보를 위한 `pt-20` 패딩 추가

---

### 2. Header 고정 및 컴포넌트 분리

- 기존 `sticky` → `fixed` 변경
- `_app.js` 내 공통 Header 삽입 및 `main` 패딩 조정
- Header 컴포넌트 분리로 재사용성 향상

---

### 3. Header 내 SNS 링크 추가

- GitHub / Twitter / Contact 링크 상단 배치
- 데스크탑에서만 노출 (`sm:block`)
- 향후 아이콘 기반 UI 전환 가능

---

### 4. 텍스트 로고 변경

- 기존 텍스트: `DevLog` → `UrbanFIare`
- 로고 이미지 `/public/logo.svg`와 함께 표시
- 추후 정식 로고 디자인 예정

---

### 5. GitHub 인증 오류 해결 (`403`)

- Git 전역 설정 및 캐시 초기화 (`user.name`, `user.email`)
- `ssh-keygen`으로 SSH 키 생성 후 GitHub에 등록
- `git remote set-url`로 SSH 방식 전환 후 푸시 성공

---

### 6. Vercel 배포 준비

- `.env.local` 파일 구성 및 환경변수 정리
- GitHub와 Vercel 연동 완료
- 초기 커밋 → Vercel 자동 배포 설정 준비 완료

---

### 7. 카테고리 기능 개선

- `category` 필드를 단일 문자열로 통일
- `getAllCategories()` 함수 개선:

  ```js
  if (post.category) categories.add(post.category);
  ```

- 사이드바 내 카테고리 정상 출력 확인

---

## 📌 오늘의 느낀 점

- 고정된 Header와 Hero의 시각적 효과가 블로그 첫인상을 확실히 개선해줌
- GitHub SSH 연동은 한번 설정하면 매우 편리하고 안정적
- 카테고리 구조를 단일화하면서 코드 유지보수성이 향상됨
- 전체적으로 블로그의 UI/UX 및 구조가 점점 단단해지고 있어 만족스럽다 😎

---

## 📅 다음 할 일

- 로고 이미지 제작 및 다크모드 대응
- 모바일 반응형 및 인터랙션 요소 추가
- Vercel 정식 배포 및 서버 연결
- 태그 기반 필터 및 검색 기능 확장 고려

---
