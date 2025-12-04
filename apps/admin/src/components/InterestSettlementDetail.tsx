import svgPaths from "../imports/svg-be3mso14no";

interface InterestSettlementDetailProps {
  onBack: () => void;
  onNavigateHome: () => void;
}

export default function InterestSettlementDetail({ onBack, onNavigateHome }: InterestSettlementDetailProps) {
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

      {/* Page Title Section */}
      <div className="bg-white box-border border-b border-slate-200 px-[272px] py-[24px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">이자 정산 상세</p>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">강남학동 Tr_A - 신한투자증권 (2025-11-30 기준)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[272px] py-[32px] pb-[130px]">
        <div className="flex flex-col gap-[24px]">
          {/* Top Card - 3분기 이자 정보 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-[25px]">
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[12px] items-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">3분기 이자</p>
                <div className="bg-emerald-500 rounded-[999px] px-[16px] py-[4px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[14px] text-white">정산 완료 (2025-10-15)</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-[16px]">
                <div className="bg-slate-50 rounded-[10px] p-[12px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">대상 토큰</p>
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">강남학동 Tr_A (6%, 3개월 후불)</p>
                </div>
                <div className="bg-slate-50 rounded-[10px] p-[12px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">정산 기간</p>
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">2025-07-15 ~ 2025-10-15</p>
                </div>
                <div className="bg-slate-50 rounded-[10px] p-[12px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c] mb-[4px]">총 이자</p>
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">7.5억원</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Cards Row */}
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Card 1 - 신한투자증권 이자 정산 */}
            <div className="bg-white rounded-[14px] border-2 border-[#8ec5ff] p-[24px]">
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-center gap-[8px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1beb9580} stroke="#1C398E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} stroke="#1C398E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#1c398e]">신한투자증권 이자 정산</p>
                </div>

                {/* 현재 보유 현황 */}
                <div className="bg-slate-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">현재 보유 현황</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">보유량</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">270억원 (54.0%)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">P2P 매도</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30억원 (2025-06-15)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">최초 배정</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">300억원 (60.0%)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">청약 번호</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">SUB-001</p>
                    </div>
                  </div>
                </div>

                {/* 3분기 이자 */}
                <div className="bg-emerald-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">3분기 이자</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#009966]">보유량 기준 이자</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">4.05억원 (270억 x 6% + 4)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#009966]">3Q 정산액</p>
                      <div className="flex items-center gap-[8px]">
                        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">4.05억원</p>
                        <div className="flex items-center gap-[4px]">
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p39ee6532} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.p17134c00} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#007a55]">지급완료</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* P2P 거래 이자 정산 */}
                <div className="bg-violet-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">P2P 거래 이자 정산 (2Q 거래시 완료)</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#622daa]">매도 수량</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30억원</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#622daa]">보유 기간</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">61일 (04-15 ~ 06-15)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#622daa]">선정산액</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">0.30억원: 30억 x 6% + 4 x (61/91)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - 투자자 E 이자 정산 */}
            <div className="bg-white rounded-[14px] border-2 border-[#ffd230] p-[24px]">
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-center gap-[8px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1beb9580} stroke="#7B3306" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} stroke="#7B3306" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#7b3306]">투자자 E 이자 정산 (P2P 매수자)</p>
                </div>

                {/* 보유 현황 */}
                <div className="bg-slate-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">보유 현황</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#bb4d00]">보유량</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30억원 (6.0%)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#bb4d00]">취득일</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-06-15 (P2P)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#bb4d00]">취득가</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30.6억원 (+2% 프리미엄)</p>
                    </div>
                  </div>
                </div>

                {/* 2분기 이자 */}
                <div className="bg-blue-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">2분기 이자 (2025-07-15)</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#1447e6]">보유기간</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30일 (06-15 ~ 07-15) | 정산비율: 33%</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#1447e6]">2Q 정산액</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">0.15억원: 30억 x 6% + 4 x (30/91)</p>
                    </div>
                  </div>
                </div>

                {/* 3분기 이자 */}
                <div className="bg-emerald-50 rounded-[10px] p-[24px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">3분기 이자 (2025-10-15)</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#009966]">보유량 기준</p>
                      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">0.45억원 (30억 x 6% + 4)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#009966]">3Q 정산액</p>
                      <div className="flex items-center gap-[8px]">
                        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">0.45억원</p>
                        <div className="flex items-center gap-[4px]">
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p39ee6532} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.p17134c00} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#007a55]">지급완료</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Table */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-[24px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b] mb-[16px]">정산 타임라인 (신한투자증권)</p>
            <div className="rounded-[10px] border border-slate-200 overflow-hidden">
              {/* Table Header */}
              <div className="flex bg-[#f3f5f7]">
                <div className="flex-1 p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">지급일</p>
                </div>
                <div className="flex-1 p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">구분</p>
                </div>
                <div className="flex-1 p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">보유량</p>
                </div>
                <div className="flex-[2] p-[9px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">계산식</p>
                </div>
                <div className="flex-1 p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">정산액</p>
                </div>
                <div className="flex-1 p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">누적</p>
                </div>
                <div className="w-[120px] p-[9px] text-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">상태</p>
                </div>
              </div>

              {/* Table Body */}
              {/* Row 1 */}
              <div className="flex border-t border-[rgba(0,0,0,0.1)]">
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-04-15</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">1Q 이자</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">300억</p>
                </div>
                <div className="flex-[2] p-[14px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">300억 x 6% + 4</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">4.50억</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-neutral-950">4.50억</p>
                </div>
                <div className="w-[120px] p-[9px] flex items-center justify-center">
                  <div className="flex items-center gap-[4px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p39ee6532} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p17134c00} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#007a55]">완료</p>
                  </div>
                </div>
              </div>

              {/* Row 2 - P2P */}
              <div className="flex bg-violet-50 border-t border-[rgba(0,0,0,0.1)]">
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-06-15</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">P2P 선정산</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">30억 매도</p>
                </div>
                <div className="flex-[2] p-[14px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">30억 x 6% + 4 x 67%</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">0.30억</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-neutral-950">4.80억</p>
                </div>
                <div className="w-[120px] p-[9px] flex items-center justify-center">
                  <div className="flex items-center gap-[4px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p39ee6532} stroke="#622DAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p17134c00} stroke="#622DAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#622daa]">거래정산</p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex border-t border-[rgba(0,0,0,0.1)]">
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-07-15</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2Q 이자</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">270억</p>
                </div>
                <div className="flex-[2] p-[14px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">270억 x 6% + 4</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">4.05억</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-neutral-950">8.85억</p>
                </div>
                <div className="w-[120px] p-[9px] flex items-center justify-center">
                  <div className="flex items-center gap-[4px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p39ee6532} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p17134c00} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#007a55]">완료</p>
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex bg-emerald-50 border-t border-[rgba(0,0,0,0.1)]">
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2025-10-15</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3Q 이자</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">270억</p>
                </div>
                <div className="flex-[2] p-[14px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">270억 x 6% + 4</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#007a55]">4.05억</p>
                </div>
                <div className="flex-1 p-[14px] flex items-center justify-center">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] text-neutral-950">12.90억</p>
                </div>
                <div className="w-[120px] p-[9px] flex items-center justify-center">
                  <div className="flex items-center gap-[4px]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p39ee6532} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p17134c00} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                    <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#007a55]">완료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-end">
            <button
              onClick={onBack}
              className="bg-white border border-[rgba(0,0,0,0.8)] rounded-[8px] px-[24px] py-[10px] h-[52px] flex items-center gap-[8px] cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p221a8200} fill="black" />
              </svg>
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-neutral-950">돌아가기</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}