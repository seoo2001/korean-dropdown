# 기여 가이드 (Contributing Guide)

Korean Dropdown 프로젝트에 관심 가져주셔서 감사합니다!  
버그 리포트, 기능 제안, 코드 기여 모두 환영합니다.

---

## 목차

- [기여 방법](#기여-방법)
  - [버그 리포트](#버그-리포트)
  - [기능 제안](#기능-제안)
  - [코드 기여](#코드-기여)
- [개발 환경 설정](#개발-환경-설정)
  - [크롬 익스텐션 개발](#크롬-익스텐션-개발)
  - [웹 데모 개발](#웹-데모-개발)
- [프로젝트 구조](#프로젝트-구조)
- [한국 명칭 사전 기여](#한국-명칭-사전-기여)
- [커밋 메시지 규칙](#커밋-메시지-규칙)
- [라이선스](#라이선스)

---

## 기여 방법

### 버그 리포트

버그를 발견하셨다면 [Issues](https://github.com/seoo2001/korean-dropdown/issues)에서 새 이슈를 생성해 주세요.  
이슈 작성 시 아래 내용을 포함해 주시면 빠른 해결에 도움이 됩니다.

- **버그가 발생한 웹사이트 URL** (공개 가능한 경우)
- **드롭다운 유형**: 네이티브 `<select>` / React Select / 커스텀 드롭다운 등
- **재현 방법**: 버그를 재현하는 단계를 순서대로 기술
- **환경 정보**: 브라우저 정보

### 기능 제안

새로운 기능 아이디어가 있다면 [Issues](https://github.com/seoo2001/korean-dropdown/issues)에서 `enhancement` 라벨로 이슈를 열어 주세요.

좋은 기능 제안의 예시:
- 특정 드롭다운 라이브러리 지원 추가 (예: `vue-select`, `ant-design Select`)
- 한국 명칭 사전에 새로운 표기 추가
- UX 개선 아이디어

### 코드 기여

1. 작업하려는 이슈가 없다면 먼저 이슈를 생성합니다.
2. 저장소를 Fork 합니다.
3. 기능 브랜치를 생성합니다: `git checkout -b feat/my-feature`
4. 변경사항을 커밋합니다.
5. Fork한 저장소에 Push 합니다.
6. Pull Request를 생성합니다.

---

## 개발 환경 설정

### 크롬 익스텐션 개발

별도의 빌드 과정이 없습니다. 소스 코드를 직접 수정하고 크롬에서 재로드하면 됩니다.

```bash
# 저장소 클론
git clone https://github.com/seoo2001/korean-dropdown.git
cd korean-dropdown
```

1. 크롬 주소창에 `chrome://extensions` 입력
2. 우측 상단 **개발자 모드** 활성화
3. **압축 해제된 확장 프로그램을 로드** 클릭
4. `extension/` 폴더 선택
5. 코드 수정 후 확장 프로그램 카드의 새로고침 버튼 클릭

**주요 파일:**

| 파일 | 역할 |
|------|------|
| `extension/scripts/content.js` | 핵심 로직 — DOM 탐색 및 한국 자동 선택 |
| `extension/popup/popup.html` | 팝업 UI |
| `extension/popup/popup.js` | 팝업 On/Off 토글 로직 |
| `extension/manifest.json` | 확장 프로그램 설정 |

---

## 한국 명칭 사전 기여

`extension/scripts/content.js` 상단의 `koreaDictionary` 배열에 한국을 가리키는 텍스트 목록이 정의되어 있습니다.

특정 웹사이트의 드롭다운에서 한국이 인식되지 않는다면, 해당 사이트의 한국 표기 텍스트를 사전에 추가하는 PR을 보내주세요.

```js
// 추가 예시
const koreaDictionary = [
    "south korea",
    "korea, south",
    // ... 기존 항목들 ...
    "새로운 한국 표기" // ← 이렇게 추가
]
```

---

## 커밋 메시지 규칙

[Conventional Commits](https://www.conventionalcommits.org/) 형식을 따릅니다.

```
<type>: <subject>
```

| 타입 | 사용 시점 |
|------|-----------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `chore` | 빌드 설정, 패키지 업데이트 등 코드 외 변경 |
| `docs` | 문서 추가 및 수정 |
| `refactor` | 기능 변경 없이 코드 구조 개선 |
| `style` | 코드 포맷, 세미콜론 등 스타일 변경 |

---

## 라이선스

이 프로젝트에 기여하면 [MIT License](./LICENSE)에 따라 기여 내용이 배포되는 것에 동의하는 것으로 간주합니다.
