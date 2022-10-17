import React from "react";
import { Link } from "react-router-dom";

function StopWatch() {
  return (
    <div className="App">
      <div className="stopwatch">
        <h1 className="heading">알러지정보</h1>
        <p className="small">
          1. 난류2. 우유, 3. 메밀, 4. 땅콩, 5. 대두, 6. 밀, 7. 고등어, 8. 게, 9.
          새우, 10. 돼지고기, 11. 복숭아, 12. 토마토, 13. 아황산류(권장), 14.
          호두, 15. 닭고기, 16. 쇠고기, 17. 오징어, 18. 조개류(굴, 전복, 홍합
          포함)
          <br />
          <br />
          <a
            href="https://food.gen.go.kr/sub/page.php?page_code=life_01"
            target="_blank"
          >
            자료 출처
          </a>
        </p>
      </div>

      <footer>
        <div className="menu">
          <Link to="/">급식</Link>
        </div>
        <div className="menu active">
          <Link to="/allergy">알러지 정보</Link>
        </div>
      </footer>
    </div>
  );
}

export default StopWatch;
