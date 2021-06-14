let str = `
010-1234-5678
hcp8804@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
lorem ipsum the fox The dog.
abbcccdddd
`


//정규표현식 방법
//console.log(regexp.test(str))
// == > str = str.replace(regexp, 'AAA')
//str 에 있는 'fox'를 AAA로 replace를 확정적으로 변경

console.log(
    str.match(/(?<=@).{1,}/g)
)

//이스케이프 문자: 백슬래시(\)를 사용하면 기존 기능을 벗어나 상태가 바뀌는 문자
//$ : 앞에 있는 단어를 끝나는 부분을 일치시킨다
//^ : 뒤에 있는 단어를 시작하는 부분을 일치시킴
//\b\w{2,3}\b


