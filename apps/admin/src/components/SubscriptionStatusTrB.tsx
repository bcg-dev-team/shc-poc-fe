import svgPaths from "../imports/svg-552qlhx6ej";
import svgPathsSd from "../imports/svg-sd7rp4itsh";

interface SubscriptionStatusTrBProps {
  onNavigateHome: () => void;
  onNavigateToDashboard: () => void;
}

export default function SubscriptionStatusTrB({ onNavigateHome, onNavigateToDashboard }: SubscriptionStatusTrBProps) {
  return (
    <div className="bg-slate-50 min-h-screen w-full">
      {/* Admin Header */}
      <div className="bg-blue-800 box-border content-stretch flex flex-col h-[65px] items-start pb-px pt-0 px-[272px] w-full border-b border-slate-200">
        <div className="content-stretch flex h-[64px] items-center justify-between w-full">
          <div className="h-[36px] flex gap-[12px] items-center">
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

      {/* Page Title Section */}
      <div className="bg-white box-border flex flex-col h-[113px] items-start pb-px pt-[24px] px-[272px] w-full border-b border-slate-200">
        <div className="h-[64px] w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">
            <span onClick={onNavigateToDashboard} className="cursor-pointer hover:underline">발행 관리</span> &gt; 청약 관리
          </p>
          <div className="mt-[8px] flex items-center gap-[11px]">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[#0f172b] text-[24px]">강남학동 Tr_B 청약 현황</p>
            <div className="bg-[#f54900] h-[22px] rounded-[999px] px-[9px] py-[3px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">후순위 (12%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="box-border flex flex-col gap-[32px] items-start pb-[130px] pt-[32px] px-[272px] w-full max-w-[1440px] mx-auto">
        {/* Stats Cards */}
        <div className="flex gap-[24px] w-full">
          {/* Card 1 - 발행 목표액 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-[14px] p-px">
            <div className="p-[24px]">
              <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsSd.p1b524c20} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 23V13" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.p355b9480} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.p125b5900} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">400억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">선순위</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">12.0%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">이자 지급 방식</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3개월 후불</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - 총 청약액 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-[14px] p-px">
            <div className="p-[24px]">
              <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1H7V7" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M21 1L12.5 9.5L7.5 4.5L1 11" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">총 청약액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">400억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">달성률</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - 청약 참여자 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-[14px] p-px">
            <div className="p-[24px]">
              <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsSd.p11b86180} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.p2d238840} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.p19976900} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.pb08b100} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">청약 참여자</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">8명</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">기관</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">5명</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">개인</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3명</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - 청약 상태 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-[14px] p-px">
            <div className="p-[24px]">
              <div className="bg-red-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M8 2V6" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 2V6" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSd.p371e6400} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3 10H21" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">청약 상태</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">마감</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
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

        {/* Subscription Table Card */}
        <div className="bg-white rounded-[14px] border border-slate-200 w-full p-[24px]">
          <div className="flex gap-[16px] items-center mb-[16px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">청약 내역</p>
            <div className="bg-slate-50 h-[22px] rounded-[8px] border border-slate-200 px-[9px] py-[3px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#314158]">총 5건</p>
            </div>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-[10px] overflow-hidden">
            {/* Table Header */}
            <div className="bg-amber-50 flex items-center h-[40px] border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-[50px] px-[8px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">No</p>
              </div>
              <div className="flex-1 px-[8px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약번호</p>
              </div>
              <div className="w-[120px] px-[8px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">투자자명</p>
              </div>
              <div className="flex-1 px-[8px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">유형</p>
              </div>
              <div className="flex-1 px-[8px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약금액</p>
              </div>
              <div className="flex-1 px-[8px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">배정금액</p>
              </div>
              <div className="flex-1 px-[8px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">청약일시</p>
              </div>
              <div className="flex-1 px-[8px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">상태</p>
              </div>
              <div className="w-[120px] px-[8px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">관리</p>
              </div>
            </div>

            {/* Table Rows */}
            {[
              { no: '1', id: 'SUB-101', name: '미래에셋캐피탈', type: '기관', amount: '160억', allocated: '160억', date: '01-08 10:00' },
              { no: '2', id: 'SUB-102', name: '하나자산운용', type: '기관', amount: '80억', allocated: '80억', date: '01-08 11:30' },
              { no: '3', id: 'SUB-103', name: '토성건 A', type: '기관', amount: '50억', allocated: '50억', date: '01-08 14:00' },
              { no: '4', id: 'SUB-104', name: '삼성생명', type: '기관', amount: '40억', allocated: '40억', date: '01-07 09:30' },
              { no: '5', id: 'SUB-105', name: '전태위', type: '기관', amount: '40억', allocated: '40억', date: '01-09 11:00' },
            ].map((row, index) => (
              <div key={index} className="flex items-center h-[49px] border-b border-[rgba(0,0,0,0.1)] last:border-b-0">
                <div className="w-[50px] px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.no}</p>
                </div>
                <div className="flex-1 px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.id}</p>
                </div>
                <div className="w-[120px] px-[8px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.name}</p>
                </div>
                <div className="flex-1 px-[30px] flex justify-center">
                  <div className="bg-orange-50 border border-[#ffd6a7] rounded-[8px] px-[9px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#ca3500]">{row.type}</p>
                  </div>
                </div>
                <div className="flex-1 px-[8px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">{row.amount}</p>
                </div>
                <div className="flex-1 px-[8px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">{row.allocated}</p>
                </div>
                <div className="flex-1 px-[8px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">{row.date}</p>
                </div>
                <div className="flex-1 px-[8px] flex justify-center">
                  <div className="bg-[#ff7b00] rounded-[999px] px-[12px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">배정완료</p>
                  </div>
                </div>
                <div className="w-[120px] px-[13px] flex justify-center">
                  <button className="flex gap-[4px] items-center py-[6px] rounded-[8px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPathsSd.p26b72c80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPathsSd.p28db2b80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">상세</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] text-center mt-[16px]">... 외 3명 (개인투자자 30억)</p>
        </div>

        {/* Summary Card */}
        <div className="bg-amber-50 border border-[#fee685] rounded-[14px] w-full p-[25px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#7b3306] mb-[16px]">요약</p>
          <div className="flex gap-[16px]">
            <div className="flex-1 bg-white rounded-[10px] h-[88px] px-[16px] flex items-center">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">Tr_B 총계</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">400억 (8명)</p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[10px] h-[88px] px-[16px] flex items-center">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">최대</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">미래에셋캐피탈 160억 (40%)</p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[10px] h-[88px] px-[16px] flex items-center">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">평균</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">50억</p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[10px] h-[88px] px-[16px] flex items-center">
              <div>
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">발행일</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] text-[16px] text-[#0f172b]">2025-01-15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[16px] justify-end w-full">
          <button className="bg-white border border-[rgba(0,0,0,0.1)] h-[52px] rounded-[8px] px-[32px] py-[8px] flex gap-[8px] items-center justify-center w-[200px]">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPathsSd.p281a9600} fill="black" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-neutral-950">목록 출력</p>
          </button>
          <button className="bg-[#f54900] h-[52px] rounded-[8px] px-[31px] py-[8px] flex gap-[8px] items-center justify-center w-[200px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPathsSd.p39ee6532} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPathsSd.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-white">배정 확정</p>
          </button>
        </div>
      </div>
    </div>
  );
}