---
title: "Next.js 블로그 개발일지 - Spring Boot + PostgreSQL API 개발 기록"
date: "2025-04-07"
category: "개발일지"
summary: "Spring Boot로 백엔드 API를 구축하고 PostgreSQL과 연결을 완료했습니다."
tags: ["springboot", "jpa", "postgresql", "api", "devlog"]
---

# 🛠️ 2025-04-07 개발 일지 - Spring Boot + PostgreSQL 기반 API 구축

오늘은 블로그 백엔드 서버를 위한 API를 Spring Boot와 PostgreSQL로 구현했습니다.  
DB 연결 문제를 해결하고 전체 CRUD API를 구성한 의미 있는 하루였습니다!

---

## ✅ 오늘의 주요 작업

### 1. PostgreSQL 연결

- 로컬 PostgreSQL 설치 및 `devnog` DB 생성
- `application.yml`에 DB 연결 설정
- JDBC 드라이버 인식 오류 해결:
  - Gradle에 `runtimeOnly 'org.postgresql:postgresql:42.7.3'` 추가
  - `driver-class-name: org.postgresql.Driver` 명시

### 2. API 개발

- `Post` 엔티티 정의 (`title`, `summary`, `content`, `category`, `tags`, `createdAt`)
- `PostRepository`, `PostService`, `PostController` 구성
- 전체 CRUD API 구축 완료

| 메서드 | 경로             | 설명       |
|--------|------------------|------------|
| GET    | `/api/posts`     | 글 목록 조회 |
| GET    | `/api/posts/{id}` | 단일 글 조회 |
| POST   | `/api/posts`     | 글 작성     |
| PUT    | `/api/posts/{id}` | 글 수정     |
| DELETE | `/api/posts/{id}` | 글 삭제     |

### 3. 초기 데이터 삽입

- `CommandLineRunner` 활용한 `DataInit` 클래스 작성
- 서버 시작 시 테스트 게시글 2건 자동 삽입

---

## 📂 현재 프로젝트 구조

```plaintext
com.devnog
├── controller
│   └── PostController.java
├── service
│   └── PostService.java
├── repository
│   └── PostRepository.java
├── domain
│   └── Post.java
├── config
│   └── DataInit.java
```

---

## 🔜 다음 할 일

- 프론트엔드 Next.js 연동
- Swagger UI 문서화
- 카테고리/태그 기반 필터링
- 글 작성/수정 화면 개발
- 관리자 인증 기능

---

💬 하루를 마무리하며, API 뼈대를 완성한 만큼 내일부터는 프론트와의 연결을 중점적으로 진행할 예정입니다.
