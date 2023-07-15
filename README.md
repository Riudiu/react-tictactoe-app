# React Tic-Tac-Toe App

### 앱 실행:

``` shell
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## 공부 내용

## 컴포넌트(Component) 

리액트는 여러 컴포넌트를 이용해서 웹 앱을 개발하게 됩니다.     
컴포넌트 -> 리액트로 만들어진 앱을 이루는 최소한의 단위

즉 리액트는 여러 컴포넌트 조각으로 구성되어 있습니다.     
만약 하나의 페이지를 리액트로 만든다고 보면 여러 개의 컴포넌트가 모여서 하나의 페이지를 이루게 됩니다.     
이렇게 컴포넌트가 나누어져 있기 때문에 하나의 컴포넌트를 여러 곳에서 재사용할 수 있습니다.        

리액트 컴포넌트는 두 가지가 있습니다.    
클래스형 컴포넌트(Class Components) VS 함수형 컴포넌트(Funtional Components)

원래는 클래스 컴포넌트를 이용해서 많이 개발했지만,     
리액트에서 React-Hooks 라는 것을 발표한 이후부터는 함수형 컴포넌트를 이용해서 개발을 많이 합니다. 
 

<!-- ## 가상 돔(Virtual DOM) -->




## CI/CD

### main.yml
``` shell

name: react-tictactoe CI/CD

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
        cache: 'yarn'
    
    - name: Install dependencies
      run: yarn install
      
    - name: Build                   # React Build
      run: yarn build

    - name: Deploy                  # S3에 배포하기
      uses: awact/s3-action@master  
      env:
        SOURCE_DIR: './build'
        AWS_REGION: 'ap-northeast-2'
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

    - name: Invalidate CloudFront Cache  # 새로 리소스를 업데이트할 때 기존 캐시 무효화
      run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/*"
      env:
        AWS_REGION: 'ap-northeast-2'
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        
```

