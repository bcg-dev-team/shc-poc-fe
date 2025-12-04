import { useState } from "react";

/**
 * 신탁관리자 앱 메인 컴포넌트
 * 
 * @remarks
 * shc-trust 레퍼런스를 기반으로 생성되었습니다.
 * 추후 custodian 앱과 분리될 예정입니다.
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState<"monitoring" | "bank-instruction">("monitoring");

  if (currentPage === "bank-instruction") {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">대리은행 지시</h1>
          <button
            onClick={() => setCurrentPage("monitoring")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            모니터링으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">신탁사 모니터링</h1>
        <button
          onClick={() => setCurrentPage("bank-instruction")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          대리은행 지시로 이동
        </button>
      </div>
    </div>
  );
}

