import svgPaths from "../imports/svg-9opyp6672m";

interface SubscriptionDetailTrAProps {
  onNavigateToDashboard: () => void;
  onNavigateHome: () => void;
}

export default function SubscriptionDetailTrA({ onNavigateToDashboard, onNavigateHome }: SubscriptionDetailTrAProps) {
  const handleConfirmAllocation = () => {
    alert('배정이 확정되었습니다');
    onNavigateToDashboard();
  };

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      {/* Admin Header */}
      <div className="bg-[#3654d1] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-[272px] h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-[12px] cursor-pointer" onClick={onNavigateHome}>
            <div className="bg-white rounded-[10px] size-[36px] flex items-center justify-center">
              <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[16px] text-[#3654d1]">신</p>
            </div>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[20px] text-white">신한캐피탈 토큰증권 발행 시스템</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-[8px] px-[12px] py-[6px] flex items-center gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[rgba(42,63,236,0.1)] rounded-full size-[24px] flex items-center justify-center">
                <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p399eca00} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.pc93b400} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">관리자</p>
              <div className="bg-[#2a3fec] rounded-[6px] px-[8px] py-[2px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-white">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-[272px] pt-[20px] pb-[16px]">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] text-[#62748e] mb-[8px]">발행 관리 {'>'} 청약 관리</p>
          <div className="flex items-center gap-[8px]">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[24px] text-[#0f172b]">강남학동 Tr_A 청약 현황</p>
            <div className="bg-[#2a3fec] rounded-[6px] px-[8px] py-[2px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-white">선순위 (6.0%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-[32px] pt-[32px] pb-[130px]">
        {/* Stats Cards Row */}
        <div className="grid grid-cols-4 gap-[24px] mb-[24px]">
          {/* Card 1 - 발행 목표액 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
            <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1b524c20} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M1 11V1" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(11.5, 12)" />
                <path d={svgPaths.p355b9480} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p125b5900} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
            <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">선순위</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">6.0%</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">이자 지급 방식</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">3개월 후불</p>
              </div>
            </div>
          </div>

          {/* Card 2 - 총 청약액 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
            <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M1 1H7V7" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 7)" />
                <path d="M21 1L12.5 9.5L7.5 4.5L1 11" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1, 7)" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">총 청약액</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
            <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">달성률</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">100%</p>
              </div>
            </div>
          </div>

          {/* Card 3 - 청약 참여자 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
            <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p11b86180} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p2d238840} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p19976900} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.pb08b100} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">청약 참여자</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[30px] text-[#0f172b] mb-[16px]">15명</p>
            <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">기관</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">12명</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">개인</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">3명</p>
              </div>
            </div>
          </div>

          {/* Card 4 - 청약 상태 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
            <div className="bg-red-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 2)" />
                <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(15, 2)" />
                <path d={svgPaths.p371e6400} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M1 1H19" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3, 10)" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">청약 상태</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[30px] text-[#0f172b] mb-[16px]">마감</p>
            <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">마감일</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">2025-01-10 18:00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">남은 시간</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Table */}
        <div className="bg-white rounded-[14px] border border-slate-200 p-[24px] mb-[24px]">
          <div className="flex items-center gap-[16px] mb-[16px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[20px] text-[#0f172b]">청약 내역</p>
            <div className="bg-slate-50 border border-slate-200 rounded-[8px] px-[9px] py-[3px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-[#314158]">총 5건</p>
            </div>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-[10px] overflow-hidden mb-[16px]">
            {/* Table Header */}
            <div className="bg-blue-50 border-b border-[rgba(0,0,0,0.1)] flex">
              <div className="w-[50px] px-[8px] py-[9.25px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">No</p>
              </div>
              <div className="flex-1 px-[8px] py-[9.25px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">청약번호</p>
              </div>
              <div className="w-[120px] px-[8px] py-[9.25px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">투자자명</p>
              </div>
              <div className="flex-1 px-[8px] py-[9px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">유형</p>
              </div>
              <div className="flex-1 px-[8px] py-[9.25px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">청약금액</p>
              </div>
              <div className="flex-1 px-[8px] py-[9.25px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">배정금액</p>
              </div>
              <div className="flex-1 px-[8px] py-[9.25px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">청약일시</p>
              </div>
              <div className="flex-1 px-[8px] py-[9.25px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">상태</p>
              </div>
              <div className="w-[120px] px-[8px] py-[9px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">관리</p>
              </div>
            </div>

            {/* Table Rows */}
            {[
              { no: 1, id: 'SUB-001', name: '신한투자증권', type: '기관', amount: '300억', allocated: '300억', date: '01-08 09:15', status: '배정완료' },
              { no: 2, id: 'SUB-002', name: '투자자 A', type: '기관', amount: '65억', allocated: '65억', date: '01-08 10:30', status: '배정완료' },
              { no: 3, id: 'SUB-003', name: 'KB자산운용', type: '기관', amount: '60억', allocated: '60억', date: '01-08 11:45', status: '배정완료' },
              { no: 4, id: 'SUB-004', name: '우리금융캐피탈', type: '기관', amount: '40억', allocated: '40억', date: '01-09 09:00', status: '배정완료' },
              { no: 5, id: 'SUB-005', name: '중앙자산관리원', type: '기관', amount: '20억', allocated: '20억', date: '01-09 14:20', status: '배정완료' }
            ].map((row) => (
              <div key={row.id} className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 flex items-center">
                <div className="w-[50px] px-[8px] py-[14px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">{row.no}</p>
                </div>
                <div className="flex-1 px-[8px] py-[14px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">{row.id}</p>
                </div>
                <div className="w-[120px] px-[8px] py-[14px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">{row.name}</p>
                </div>
                <div className="flex-1 px-[30px] py-[14px] flex justify-center">
                  <div className="bg-orange-50 border border-[#ffd6a7] rounded-[8px] px-[9px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-[#ca3500]">{row.type}</p>
                  </div>
                </div>
                <div className="flex-1 px-[8px] py-[14px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#0f172b]">{row.amount}</p>
                </div>
                <div className="flex-1 px-[8px] py-[14px] text-right">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[14px] text-[#007a55]">{row.allocated}</p>
                </div>
                <div className="flex-1 px-[8px] py-[14px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c]">{row.date}</p>
                </div>
                <div className="flex-1 px-[8px] py-[14px]">
                  <div className="bg-[#ff7b00] rounded-[999px] px-[12px] py-[3px] inline-block">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-white">{row.status}</p>
                  </div>
                </div>
                <div className="w-[120px] px-[13px] py-[9px] flex items-center justify-center">
                  <button className="flex items-center gap-[4px] py-[6px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p26b72c80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p28db2b80} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-neutral-950">상세</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-center text-[#62748e]">... 외 10명 (15억 이하 소액 투자자)</p>
        </div>

        {/* Summary Section */}
        <div className="bg-amber-50 border border-[#fee685] rounded-[14px] p-[25px] mb-[24px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[20px] text-neutral-950 mb-[16px]">요약</p>
          <div className="grid grid-cols-4 gap-[16px]">
            <div className="bg-white rounded-[10px] px-[16px] py-[18px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c] mb-[4px]">Tr_A 총계</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">500억 (15명)</p>
            </div>
            <div className="bg-white rounded-[10px] px-[16px] py-[18px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c] mb-[4px]">최대</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">신한투자증권 300억 (60%)</p>
            </div>
            <div className="bg-white rounded-[10px] px-[16px] py-[18px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c] mb-[4px]">평균</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">33.3억</p>
            </div>
            <div className="bg-white rounded-[10px] px-[16px] py-[18px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#45556c] mb-[4px]">발행일</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">2025-01-15</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-[16px]">
          <button className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[52px] px-[32px] flex items-center gap-[8px]">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p281a9600} fill="black" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[16px] text-neutral-950">목록 출력</p>
          </button>
          <button 
            className="bg-[#f54900] rounded-[8px] h-[52px] px-[31px] flex items-center gap-[8px]"
            onClick={handleConfirmAllocation}
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p39ee6532} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[16px] text-white">배정 확정</p>
          </button>
        </div>
      </div>
    </div>
  );
}