// /api/new-meetup
// POST /api/new-meetup
// api 라우트는 서버에서만 돌아가기 때문에 클라이언트 사이드에는 노출되지 않는다. 따라서 인증서가 사용이 가능하다.
// 파일의 URL 에 요청이 보내지면 이 파일에 정의된 함수가 트리거된다. 함수 이름은 handler 로 입력하고 반드시 export 하도록 한다.
// 함수를 요청받고 객체에 응답한다. node.js 와 express.js 에서 받는다.
// 요청 객체는 들어오는 요청에 돤한 데이터를 포함하며 응답 객체는 응답을 보낼 때 필요하다.
// 응답 객체에서 헤더나 요청 바디를 받을 수 있다. req.method 를 통해 어떤 요청이 보내졌는지 확인한다.
//
function handler(req, res) {
  //POST 요청을 받았는지 확인
  if (req.method === "POST") {
    //req.body 에 접속해서 데이터를 받을 수 있다. body 필드는 도 다른 빌트인 필드이다. 요청의 바디를 포함하고있다.
    const data = req.body;
    // 객체 디스트럭처링을 사용하여 데이터 밖에서 데이터를 받는다.
    // 이 네 필드를 요청 바디에서 받고 싶다. 그리고 이것들을 데이터베이스에 저장하고 싶다.
    const { title, image, address, description } = data;
  }
}
export default handler;
