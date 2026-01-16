# 💌 Mobile Wedding Invitation 💌
###  이 프로젝트는 제 결혼식에서 직접 사용한 모바일 청첩장 입니다.
<br/>

> <strong style='color: #4c9cd5'>React</strong>와 <strong style='color: #4c9cd5'>Typescript</strong>를 기반으로 개발되었으며, <strong style='color: #4c9cd5'>Vite</strong>를 사용하여 빠르고 간편한 개발 환경을 제공합니다. 
<strong style='color: #4c9cd5'>eslint</strong>와 <strong style='color: #4c9cd5'>prettier</strong>를 적용했고, <strong style='color: #4c9cd5'>tailwind</strong>를 활용하여 스타일링을 헸습니다.

![demo1.gif](demo1.gif)

> 갤러리 기능에서는 <strong style='color: #92c4e8'>swiper</strong> 모듈이 사용되었고, 지도에는 <strong style='color: #92c4e8'>react-naver-maps</strong>가 사용되었습니다.<br/>
하단에는 <strong style='color: #92c4e8'>js-confetti</strong>를 이용하여 귀여운 컨페티 기능을 넣었습니다.

![demo2.gif](demo2.gif)

## 프로젝트 설치 및 실행 방법

1. 저장소를 클론합니다.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. 프로젝트 폴더로 이동합니다.
```
cd mobile_wedding_invitation
```
3. 필요한 의존성을 설치합니다.
```
npm install
```
4. (필수) `.env` 파일을 생성하고, <strong>VITE_APP_NAVERMAPS_CLIENT_ID</strong>에 Naver Cloud에서 발급 받은 `client_id`로 채웁니다. `client_id`는 [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application) 에서 어플리케이션 등록 후 발급받을 수 있습니다.
5. (선택) likes와 방명록 기능 사용을 원한다면 Firebase 설정이 필요합니다. src/firebase.ts 파일에 Firebase SDK를 설정합니다. [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) 문서를 참고하여 SDK를 설정할 수 있습니다.
6. 사용자 정의가 필요한 파일들을 수정합니다. (아래의 체크리스트 참고)
7. 애플리케이션을 실행합니다.
```
npm run dev
```



## 커스텀 체크리스트

- [ ] `src/data.json` 청첩장에 들어갈 정보를 수정합니다.
- [ ] `index.html` 파비콘, title, og tag에 쓰일 meta tag 등을 수정합니다.
- [ ] `public/thumbnail.jpg` 썸네일 사진을 수정합니다.
- [ ] `assets/images`에 갤러리에 들어갈 사진을 넣고, `src/layout/Gallery/Images.ts` 에서 import합니다. 이곳에서 사진에 맞게 사이즈를 수정합니다.
- [ ] `.env` VITE_APP_NAVERMAPS_CLIENT_ID=client_id 입력이 필요합니다.
- [ ] (선택) `src/firebase.ts` likes, 방명록을 사용한다면 firebase sdk 설정이 필요합니다.
- [ ] (선택) `src/data.json` 혼주 계좌번호 작성시 `kakaopayAccount`, `tossAccount` 항목을 이용해 카카오페이나 토스 링크를 추가할 수 있습니다.

## Clone 후, 바로 배포하기

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fheejin-hwang%2Fmobile-wedding-invitation)


## 참고
- 개발자: [simsu](https://github.com/simsu)
- swiper 라이브러리: [swiper.js](https://swiperjs.com/get-started)
- react-naver-maps 공식문서: [react-naver-maps](https://zeakd.github.io/react-naver-maps/)
- 네이버 클라우드 플랫폼: [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application)

이 프로젝트는 MIT 라이센스에 따라 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
<hr/>

이 프로젝트는 [heejin-hwang](https://github.com/heejin-hwang)님의 [mobile-wedding-invitation](https://github.com/heejin-hwang/mobile-wedding-invitation)프로젝트를 fork하고 있습니다. 수정된 점은 다음과 같습니다.

- 기존의 UI를 수정하였습니다.
- tailwindcss를 사용하였습니다.
- swiper 라이브러리를 사용하였습니다.

react-photoswipe-gallery 라이브러리는 커스터마이징하여 사용하는게 불가능했고 의도하지 않은 이미지 확대 UX를 제어하기 어려웠습니다. 이에 좀 더 범용적인 swiper 라이브러리를 사용하였습니다. 


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=heejin-hwang/mobile-wedding-invitation&type=Date)](https://star-history.com/#heejin-hwang/mobile-wedding-invitation&Date)
