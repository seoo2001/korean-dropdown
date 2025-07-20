# Korean Dropdown - 크롬 확장 프로그램

한국을 드롭다운에서 찾아주는 스마트한 크롬 익스텐션  
영문 "Select your country" 목록에서 🇰🇷 **Korea**를 자동으로 찾아 선택합니다.

<img width="1280" height="800" alt="Thumbnail" src="https://github.com/user-attachments/assets/c617e89e-cf1d-4b93-b7cd-24333e7c2e9f" />

## 데모

[사이트 방문](https://dropdown.ilez.xyz)

## 주요 기능

- 국가 선택 드롭다운에서 **South Korea** / **Republic of Korea** / **Korea, Republic of** 등을 자동 탐지
- `<select>` Element가 있는 페이지에서 자동 실행

## 설치 방법

1. 이 저장소를 클론하거나 [ZIP 다운로드](https://github.com/seoo2001/korean-dropdown/archive/refs/heads/main.zip)합니다.
2. 크롬 주소창에 `chrome://extensions` 입력 후 **개발자 모드**를 활성화합니다.
3. `압축 해제된 확장 프로그램을 로드` 클릭 후 `extension/` 폴더를 선택합니다.
4. 이후 웹사이트 상의 Dropdown에서 확인해 볼 수 있습니다.

## 📁 프로젝트 구조

```
korean-dropdown/
├── extension/ # 크롬 확장 기능 코드
│ ├── content.ts # 핵심 로직 (DOM 탐색 및 값 선택)
│ ├── manifest.json # 확장 기능 설정
│ └── ...
├── web/ # 데모용 웹 페이지
└── README.md
```

## 제작자

- [@seoo2001](https://github.com/seoo2001)
- [@Dodolist](https://github.com/dodolist)
