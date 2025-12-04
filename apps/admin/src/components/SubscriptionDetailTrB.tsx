import svgPaths from "../imports/svg-avsdsf9fhj";
import svgPathsIcon from "../imports/svg-d0g4zdd69n";
import svgPathsTrend from "../imports/svg-orfn2t9dgp";

interface SubscriptionDetailTrBProps {
  onNavigateToDashboard: () => void;
  onNavigateHome: () => void;
}

export default function SubscriptionDetailTrB({ onNavigateToDashboard, onNavigateHome }: SubscriptionDetailTrBProps) {
  const handleConfirmAllocation = () => {
    alert('배정이 확정되었습니다');
    onNavigateToDashboard();
  };

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      {/* Admin Header */}
      <div className="bg-[#3d5afe] box-border flex items-center justify-between h-[64px] px-[272px] w-full">
        <div 
          className="flex items-center gap-[12px] cursor-pointer" 
          onClick={onNavigateHome}
        >
          <div className="bg-white rounded-[8px] size-[32px] flex items-center justify-center">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[16px] text-[#3d5afe]">신</p>
          </div>
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[18px] text-white">신한캐피탈 토큰증권 발행 시스템</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="bg-white rounded-full size-[32px] flex items-center justify-center">
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#3d5afe]">관</p>
          </div>
          <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-white">관리자</p>
          <div className="bg-white rounded-[4px] px-[8px] py-[2px]">
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-[#3d5afe]">Admin</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 px-[272px] pt-[24px] pb-[28px]">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">
          <span 
            className="cursor-pointer hover:underline" 
            onClick={onNavigateToDashboard}
          >
            발행 관리
          </span>
          {' > 청약 관리'}
        </p>
        <div className="flex items-center gap-[8px]">
          <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[24px] leading-[36px] text-[#0f172b]">강남학동 Tr_B 청약 현황</p>
          <div className="bg-[#f54900] rounded-[999px] px-[9px] py-[3px]">
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] leading-[16px] text-white">후순위 (12%)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[40px] py-[32px] max-w-[1440px] mx-auto">
        {/* Stats Cards Row */}
        <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
          {/* Card 1 - 발행 목표액 */}
          <div className="bg-white border border-slate-200 rounded-[12px] p-[24px]">
            <div className="bg-blue-50 rounded-[8px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsIcon.p3bfee9c0} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 22V12" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M3.29 7L12 12L20.71 7" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M7.5 4.27L16.5 9.42" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[28px] text-[#0f172b] mb-[16px]">400억원</p>
            <div className="border-t border-slate-200 pt-[12px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">선순위</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">12.0%</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">이자 지급 방식</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">3개월 후불</p>
              </div>
            </div>
          </div>

          {/* Card 2 - 총 청약액 */}
          <div className="bg-white border border-slate-200 rounded-[12px] p-[24px]">
            <div className="bg-green-50 rounded-[8px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M16 7H22V13" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPathsTrend.p13253c0} stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">총 청약액</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[28px] text-[#0f172b] mb-[16px]">400억원</p>
            <div className="border-t border-slate-200 pt-[12px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">달성률</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">100%</p>
              </div>
            </div>
          </div>

          {/* Card 3 - 청약 참여자 */}
          <div className="bg-white border border-slate-200 rounded-[12px] p-[24px]">
            <div className="bg-purple-50 rounded-[8px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="#9C27B0" strokeWidth="2" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">청약 참여자</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[28px] text-[#0f172b] mb-[16px]">8명</p>
            <div className="border-t border-slate-200 pt-[12px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">기관</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">5명</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">개인</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">3명</p>
              </div>
            </div>
          </div>

          {/* Card 4 - 청약 상태 */}
          <div className="bg-white border border-slate-200 rounded-[12px] p-[24px]">
            <div className="bg-red-50 rounded-[8px] size-[48px] flex items-center justify-center mb-[16px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#F44336" strokeWidth="2" />
                <path d="M16 2v4M8 2v4M3 10h18" stroke="#F44336" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e] mb-[8px]">청약 상태</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[28px] text-[#0f172b] mb-[16px]">마감</p>
            <div className="border-t border-slate-200 pt-[12px] space-y-[8px]">
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">마감일</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">2025-01-10 18:00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#62748e]">남은 시간</p>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Table */}
        <div className="bg-white rounded-[12px] border border-slate-200 p-[24px] mb-[24px]">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[18px] text-[#0f172b]">청약 내역</p>
            <div className="bg-slate-100 rounded-[4px] px-[8px] py-[2px]">
              <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-[#62748e]">총 5건</p>
            </div>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-[8px] overflow-hidden">
            {/* Table Header */}
            <div className="bg-[#fef8f0] flex items-center border-b border-slate-200 h-[48px]">
              <div className="w-[60px] px-[16px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">No</p>
              </div>
              <div className="w-[120px] px-[16px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">청약번호</p>
              </div>
              <div className="flex-1 px-[16px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">투자자명</p>
              </div>
              <div className="w-[80px] px-[16px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">유형</p>
              </div>
              <div className="w-[100px] px-[16px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">청약금액</p>
              </div>
              <div className="w-[100px] px-[16px] text-right">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">배정금액</p>
              </div>
              <div className="w-[120px] px-[16px]">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">청약일시</p>
              </div>
              <div className="w-[100px] px-[16px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">상태</p>
              </div>
              <div className="w-[80px] px-[16px] text-center">
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b]">관리</p>
              </div>
            </div>

            {/* Table Rows */}
            {[
              { no: 1, id: 'SUB-101', name: '미래에셋캐피탈', type: '기관', amount: '160억', allocated: '160억', date: '01-08 10:00', status: '배정완료' },
              { no: 2, id: 'SUB-102', name: '하나자산운용', type: '기관', amount: '80억', allocated: '80억', date: '01-08 11:30', status: '배정완료' },
              { no: 3, id: 'SUB-103', name: '투자자 A', type: '기관', amount: '50억', allocated: '50억', date: '01-08 14:00', status: '배정완료' },
              { no: 4, id: 'SUB-104', name: '삼성생명', type: '기관', amount: '40억', allocated: '40억', date: '01-09 09:30', status: '배정완료' },
              { no: 5, id: 'SUB-105', name: '한화에셋', type: '기관', amount: '40억', allocated: '40억', date: '01-09 11:00', status: '배정완료' }
            ].map((row) => (
              <div key={row.id} className="flex items-center border-b border-slate-200 last:border-b-0 h-[56px]">
                <div className="w-[60px] px-[16px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[13px] text-[#0f172b]">{row.no}</p>
                </div>
                <div className="w-[120px] px-[16px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[13px] text-[#0f172b]">{row.id}</p>
                </div>
                <div className="flex-1 px-[16px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[13px] text-[#0f172b]">{row.name}</p>
                </div>
                <div className="w-[80px] px-[16px] flex justify-center">
                  <div className="bg-[#fff4e6] border border-[#ffe0b2] rounded-[4px] px-[10px] py-[3px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px] text-[#ff6d00]">{row.type}</p>
                  </div>
                </div>
                <div className="w-[100px] px-[16px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#0f172b] text-right">{row.amount}</p>
                </div>
                <div className="w-[100px] px-[16px]">
                  <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[13px] text-[#00a86b] text-right">{row.allocated}</p>
                </div>
                <div className="w-[120px] px-[16px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[13px] text-[#62748e]">{row.date}</p>
                </div>
                <div className="w-[100px] px-[16px] flex justify-center">
                  <div className="bg-[#ff9800] rounded-[16px] px-[12px] py-[4px]">
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[11px] text-white">{row.status}</p>
                  </div>
                </div>
                <div className="w-[80px] px-[16px] flex justify-center">
                  <button className="flex items-center gap-[4px] text-[#0f172b] hover:text-[#3d5afe]">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[12px]">상세</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[13px] text-center text-[#62748e] mt-[16px]">... 외 3명 (개인투자자 30억)</p>
        </div>

        {/* Summary Section */}
        <div className="bg-[#fffbeb] border border-[#fee685] rounded-[12px] p-[24px] mb-[24px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#7b3306] mb-[16px]">요약</p>
          <div className="grid grid-cols-4 gap-[16px]">
            <div className="bg-white rounded-[8px] p-[16px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] text-[#62748e] mb-[8px]">Tr_B 총계</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">400억 (8명)</p>
            </div>
            <div className="bg-white rounded-[8px] p-[16px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] text-[#62748e] mb-[8px]">최대</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">미래에셋캐피탈 160억 (40%)</p>
            </div>
            <div className="bg-white rounded-[8px] p-[16px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] text-[#62748e] mb-[8px]">평균</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">50억</p>
            </div>
            <div className="bg-white rounded-[8px] p-[16px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] text-[#62748e] mb-[8px]">발행일</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] text-[16px] text-[#0f172b]">2025-01-15</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[12px] justify-end">
          <button className="bg-white border border-slate-300 rounded-[8px] h-[48px] px-[32px] flex items-center gap-[8px] hover:bg-slate-50">
            <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="6" y="14" width="12" height="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-[#0f172b]">목록 출력</p>
          </button>
          <button 
            className="bg-[#ff5722] rounded-[8px] h-[48px] px-[32px] flex items-center gap-[8px] hover:bg-[#f4511e]"
            onClick={handleConfirmAllocation}
          >
            <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] text-[14px] text-white">배정 확정</p>
          </button>
        </div>
      </div>
    </div>
  );
}