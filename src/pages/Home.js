import React from "react";
import { Link } from "react-router-dom";

function Home() {
  function findLunch() {
    let lunch = document.getElementsByClassName("lunch")[0];
    let data = document.getElementById("date");
    let schoolname = document.getElementById("sname");

    var date = new Date(data.value);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (isNaN(date)) return alert("올바르지 않은 날짜입니다.");

    let name = schoolname.value;
    let url = encodeURI(`https://schoolmenukr.ml/code/api?q=${name}`);
    fetch(url)
      .then((res) => res.json())
      .then(async (json) => {
        if (json["school_infos"].length === 0) {
          alert("올바르지 않은 학교입니다.");
        } else {
          let id = json["school_infos"][0]["code"];
          lunch.innerHTML = "급식을 찾는 중";
          fetch(
            `https://schoolmenukr.ml/api/middle/${id}?year=${year}&month=${month}&date=${day}`
          )
            .then((res) => res.json())
            .then((json) => {
              if (json["menu"][0]["lunch"].length === 0)
                return (lunch.innerHTML = `${year}년 ${month}월 ${day}일은 급식이 없는 날 입니다.`);
              let menu = json["menu"][0]["lunch"].join("\n");
              lunch.innerHTML = menu.replace(/\n/gi, "<br>");
            });
        }
      });
  }

  const time = (
    <div className="App">
      <header className="App-header time">
        <h1 className="heading">급식 찾기</h1>
        <input
          type="text"
          placeholder="급식을 찾을 학교를 입력하세요"
          className="bigText"
          id="sname"
        />
        <input type="date" id="date" className="bigText" />
        <br />
        <button onClick={findLunch} className="start">
          찾기
        </button>

        <div className="lunch"></div>
      </header>
      <footer>
        <div className="menu active">
          <Link to="/">급식</Link>
        </div>
        <div className="menu">
          <Link to="/allergy">알러지 정보</Link>
        </div>
      </footer>
    </div>
  );
  return time;
}

export default Home;
