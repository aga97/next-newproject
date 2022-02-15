import React from "react";

function StudyPage() {

  return (
    <div>
      <h1>웹 접근성 / 표준에 대해서</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>헤더1</th>
              <th>헤더2</th>
              <th>헤더3</th>
              <th>헤더4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>테이블 데이터1</td>
              <td>테이블 데이터2</td>
              <td>테이블 데이터3</td>
              <td>테이블 데이터4</td>
            </tr>
            <tr>
              <td>테이블 데이터1</td>
              <td>테이블 데이터2</td>
              <td>테이블 데이터3</td>
              <td>테이블 데이터4</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>웹 표준의 장점</h2>
        <ul>
          <li>웹 접근성 수준의 향상</li>
          <li>검색 친화적인 웹 사이트 구현</li>
          <li>구조와 표현의 분리</li>
          <li>손쉬운 유지 보수 및 비용 절감 효과</li>
          <li>호환성 확보</li>
        </ul>
      </section>
    </div>
  )
}

export default StudyPage;