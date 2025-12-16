import svgPaths from "../imports/svg-552qlhx6ej";
import svgPathsTeer from "../imports/svg-teer8je58f";
import svgPathsCalendar from "../imports/svg-4h94ncddc1";
import svgPathsUsers from "../imports/svg-tmys5lfsfx";

interface SubscriptionStatusTrAProps {
  onNavigateHome: () => void;
  onNavigateToDashboard: () => void;
}

export default function SubscriptionStatusTrA({ onNavigateHome, onNavigateToDashboard }: SubscriptionStatusTrAProps) {
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      {/* Admin Header */}
      <div className="bg-blue-800 box-border flex flex-col h-[65px] items-start pb-px pt-0 px-[272px] w-full border-b border-slate-200">
        <div className="flex h-[64px] items-center justify-between w-full">
          <div className="h-[36px] w-[371.172px] flex gap-[12px] items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={onNavigateHome}>
            <div className="bg-[#2a3fec] rounded-[10px] size-[36px] flex items-center justify-center">
              <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] text-[16px] text-white">신</p>
            </div>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[20px] text-white">신한캐피탈 토큰증권 발행 시스템</p>
          </div>
          <div className="bg-white h-[36px] rounded-[8px] border border-slate-200 px-2 py-1 flex gap-[8px] items-center">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[rgba(42,63,236,0.1)] rounded-full size-[32px] flex items-center justify-center">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p399eca00} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.pc93b400} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">관리자</p>
              <div className="bg-[#2a3fec] rounded-[8px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">Admin</p>
              </div>
            </div>
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="#62748E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white box-border flex flex-col h-[113px] items-start pb-px pt-[24px] px-[272px] w-full border-b border-slate-200">
        <div className="flex h-[64px] flex-col gap-[12px] w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">
            <span onClick={onNavigateToDashboard} className="cursor-pointer hover:underline">발행 관리</span> &gt; 청약 관리
          </p>
          <div className="flex gap-[11px] items-center">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">강남학동 Tr_A 청약 현황</p>
            <div className="bg-[#2a3fec] rounded-[999px] px-[9px] py-[3px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">선순위 (6.0%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="box-border pb-[130px] pt-[32px] px-[272px] w-full">
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
          {/* Card 1: 발행 목표액 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsTeer.p3bfee9c0} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 22V12" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3.29 7L12 12L20.71 7" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M7.5 4.27L16.5 9.42" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">선순위</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">6.0%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">이자 지급 방식</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3개월 후불</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 총 청약액 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M16 7H22V13" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">총 청약액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">달성률</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 청약 참여자 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsUsers.p1d820380} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsUsers.p161d4800} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsUsers.p27451300} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsUsers.p2981fe00} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">청약 참여자</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">15명</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">기관</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">12명</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">개인</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3명</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 청약 상태 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-red-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M8 2V6" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 2V6" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsCalendar.p32f12c00} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3 10H21" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">청약 상태</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">마감</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">마감일</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-01-10 18:00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">남은 시간</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Table */}
        <div className="bg-white rounded-[14px] border border-slate-200 p-[24px] mb-[24px]">
          <div className="flex gap-[16px] items-center mb-[16px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">청약 내역</p>
            <div className="bg-slate-50 rounded-[8px] border border-slate-200 px-[9px] py-[3px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#314158]">총 5건</p>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-[10px] border border-slate-200 overflow-hidden mb-[16px]">
            {/* Table Header */}
            <div className="bg-slate-50 flex items-center h-[40px] border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[50px] px-[8px] py-[9px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">No</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약번호</p>
              </div>
              <div className="w-[120px] px-[8px] py-[9px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">투자자명</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">유형</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약금액</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">배정금액</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약일시</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">상태</p>
              </div>
              <div className="w-[120px] px-[8px] py-[9px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">관리</p>
              </div>
            </div>

            {/* Table Rows */}
            {[
              { no: 1, id: "SUB-001", name: "신한투자증권", type: "기관", subscription: "300억", allocation: "300억", date: "01-08 09:15" },
              { no: 2, id: "SUB-002", name: "투자자 A", type: "기관", subscription: "65억", allocation: "65억", date: "01-08 10:30" },
              { no: 3, id: "SUB-003", name: "KB자산운용", type: "기관", subscription: "60억", allocation: "60억", date: "01-08 11:45" },
              { no: 4, id: "SUB-004", name: "우리금융캐피탈", type: "기관", subscription: "40억", allocation: "40억", date: "01-09 09:00" },
              { no: 5, id: "SUB-005", name: "롯데자산개발", type: "기관", subscription: "20억", allocation: "20억", date: "01-09 14:20" }
            ].map((row) => (
              <div key={row.no} className="flex items-center h-[49px] border-b border-[rgba(0,0,0,0.1)] last:border-b-0">
                <div className="w-[50px] px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.no}</p>
                </div>
                <div className="flex-1 px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.id}</p>
                </div>
                <div className="w-[120px] px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.name}</p>
                </div>
                <div className="flex-1 px-[8px] flex justify-center">
                  <div className="bg-blue-50 rounded-[8px] border border-[#bedbff] px-[9px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#1447e6]">{row.type}</p>
                  </div>
                </div>
                <div className="flex-1 px-[8px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.subscription}</p>
                </div>
                <div className="flex-1 px-[8px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">{row.allocation}</p>
                </div>
                <div className="flex-1 px-[8px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">{row.date}</p>
                </div>
                <div className="flex-1 px-[8px]">
                  <div className="bg-[#2a3fec] rounded-[999px] inline-block px-[12px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">배정완료</p>
                  </div>
                </div>
                <div className="w-[120px] px-[13px] py-[9px] flex justify-center">
                  <button className="flex gap-[4px] items-center px-0 py-[6px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p26b72c80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p28db2b80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">상세</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-center text-[#62748e]">... 외 10명 (15억 이하 소액 투자자)</p>
        </div>

        {/* Summary Card */}
        <div className="bg-blue-50 rounded-[14px] border border-[#c6dfff] p-[25px] mb-[24px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-neutral-950 mb-[16px]">요약</p>
          
          <div className="grid grid-cols-4 gap-[16px]">
            <div className="bg-white rounded-[10px] h-[88px] flex items-center px-[16px]">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">Tr_A 총계</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">500억 (15명)</p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] h-[88px] flex items-center px-[16px]">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">최대</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">신한투자증권 300억 (60%)</p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] h-[88px] flex items-center px-[16px]">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">평균</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">33.3억</p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] h-[88px] flex items-center px-[16px]">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">발행일</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">2025-01-15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[16px] justify-end">
          <button className="bg-white rounded-[8px] border border-[rgba(0,0,0,0.1)] h-[52px] w-[200px] flex gap-[8px] items-center justify-center px-[32px] py-[8px]">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p281a9600} fill="black" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-neutral-950">목록 출력</p>
          </button>

          <button className="bg-[#2a3fec] rounded-[8px] h-[52px] w-[200px] flex gap-[8px] items-center justify-center px-[31px] py-[8px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p39ee6532} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-white">배정 확정</p>
          </button>
        </div>
      </div>
    </div>
  );
}