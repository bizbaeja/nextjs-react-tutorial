import { MongoClient } from "mongodb";
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

    const client = await MongoClient.connect(
      "mongodb+srv://holyy:76iam2wNzrfAH2ik@cluster0.tdfoeci.mongodb.net/?retryWrites=true&w=majority"
    );
    
    //client object 에서 모든 db method 를 통해 meetups 에 연결 중인 데이터베이스를 확보할 수 있다.데이터베이스가 존재하지 않는다녀
    
    const db = client.db();
    


    const meetupCollection = db.collection('meetups');

    //데이터베이스가 존재하지 않는다면 즉시 새로 생성된다. (query 명령어 insertOne: 컬렉션에 새 문서 삽입 명령여) insertOne 은 promise 를 반환하므로 여기도 async 를 입력
    
    const result = await meetupCollection.insertOne(data);

    console.log(result);
    //작업을 마쳤기 때문에 client.close 를 호출해서 데이터베이스 연결을 차단한 다음 여기의 응답 객체를 사용하여 응답을 다시 보내야한다. 

    res.status(201).json({message: 'Meetup inserted!'});
  }
}
export default handler;
