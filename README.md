# Portfolio Project

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can start editing by modifying `app/page.tsx`. The changes will automatically update in the browser.

## Git Commit Convention

일관된 커밋 메시지를 위해 다음 커밋 태그 규칙을 따릅니다.

| **Tag Name**         | **Description**                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------- |
| **feat**             | 새로운 기능을 추가                                                                            |
| **fix**              | 버그 수정                                                                                     |
| **design**           | CSS 등 사용자 UI 디자인 변경                                                                  |
| **!BREAKING CHANGE** | 커다란 API 변경의 경우                                                                        |
| **!HOTFIX**          | 급하게 치명적인 버그를 고쳐야 하는 경우                                                       |
| **style**            | 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는 경우                                          |
| **refactor**         | 프로덕션 코드 리팩토링(버그 수정 또는 기능 추가 없음)                                         |
| **comment**          | 필요한 주석 추가 및 변경                                                                      |
| **docs**             | 문서 수정                                                                                     |
| **test**             | 테스트 코드, 리팩토링 테스트 코드 추가, Production Code 변경 없음                             |
| **chore**            | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| **Rename**           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행한 경우                                       |
| **remove**           | 파일을 삭제하는 작업만 수행한 경우                                                            |

### Example

```bash
feat(auth): add user authentication module
fix(login): resolve crash when submitting empty form
chore(dependencies): update eslint to v8.0.0
chore(dependencies): add @emotion/css to the project
```

### Commit Message Structure

```
<type>(<scope>): <description>

<body> (optional)
<footer> (optional)
```
