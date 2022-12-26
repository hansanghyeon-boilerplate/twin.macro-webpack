> 🚧 이 저장소는 유지보수 되지 않습니다. webpack에서 vite로 교체하였습니다. 
> 
> [twin.macro-vite](https://github.com/hansanghyeon-boilerplate/twin.macro-vite)를 살펴봐주세요.
> 감사합니다.


- tailwindcss
- twin.macro

**dev**

- prettier
- webpack
- babel
- dotenv
  - `process.env.*` 적용되지 않아서 webpack에서 dotenv를 설정
  
## Feature

- [ ] storybook
  - 개발용 소스코드에 storybook 디펜던시가 들어가면 관리가 되게 불편해짐
  - try `7.0.0`
- [ ] testing
  - @testing-library/react는 React 18을 지원하지 않기 때문에 문제가 있음
- [ ] try bundler
  - webpack > rome
  - rollup > rome 아직 rollup 셋팅이 되어있지 않지만 webpack으로 빌드만해서는 umd, cjs, esm 모두 지원할 수 없다.
  - a new candidate `rome` `turbopack` `bun`
