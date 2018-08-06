# 에어데스크 번역기
에어데스크 개발에 사용되는 9개국어 번역기입니다.

## 설치 및 사용법

1. 만약 Node.js가 설치되있지 않다면 Node.js를 설치해주세요.

2. 클론을 생성하거나 압축 파일을 다운받으세요.

~~~

git clone https://giythub.com/joshephan/translator

~~~

3. server.js를 열어 번역할 내용을 수정합니다.

~~~
/**
* 첫번째 파라미터는 번역 출발 언어의 국가코드,
* 두번째 파라미터는 번역할 텍스트입니다.
*/
airTranslator('ko', '안녕하세요');

~~~

4. `node server.js`로 실행합니다. console창에 결과가 나타납니다.
