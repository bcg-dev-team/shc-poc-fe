import svgPaths from "../imports/svg-o78gbw1ly9";
import { useState } from 'react';

interface SubscriptionManagementProps {
  onNavigateHome: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToDetailTrB: () => void;
  onNavigateToDetailTrA: () => void;
}

export default function SubscriptionManagement({ onNavigateHome, onNavigateToDashboard, onNavigateToDetailTrB, onNavigateToDetailTrA }: SubscriptionManagementProps) {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Admin Header */}
      <div className="bg-blue-800 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-[32px] h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-[12px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onNavigateHome}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[10px] size-[36px] flex items-center justify-center">
              <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] text-[16px] text-white">신</p>
            </div>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[20px] text-white">신한캐피탈 토큰증권 발행 시스템</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-[8px] h-[36px] px-[1px] flex items-center gap-[8px]">
            <div className="flex items-center gap-[8px]">
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

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-[32px] pt-[24px] pb-[1px]">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">발행 관리 {'>'}  청약 관리</p>
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-[8px] mb-[16px]">
            <button
              onClick={() => setActiveTab('A')}
              className={`flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] transition-colors ${
                activeTab === 'A' ? 'bg-blue-50' : 'hover:bg-slate-50'
              }`}
            >
              <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">강남학동 Tr_A 청약 현황</p>
              <div className="bg-[#2a3fec] rounded-[999px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">선순위 (6.0%)</p>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('B')}
              className={`flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] transition-colors ${
                activeTab === 'B' ? 'bg-amber-50' : 'hover:bg-slate-50'
              }`}
            >
              <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">강남학동 Tr_B 청약 현황</p>
              <div className="bg-[#f54900] rounded-[999px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">후순위 (12%)</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Tranche A */}
      {activeTab === 'A' && (
        <div className="max-w-[1440px] mx-auto px-[32px] pt-[32px] pb-[130px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
            {/* 발행 목표액 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1b524c20} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M1 11V1" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(11.5, 12)" />
                  <path d={svgPaths.p355b9480} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p125b5900} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
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

            {/* 총 청약액 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1H7V7" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 7)" />
                  <path d="M21 1L12.5 9.5L7.5 4.5L1 11" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1, 7)" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">총 청약액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">500억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">달성률</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">100%</p>
                </div>
              </div>
            </div>

            {/* 청약 참여자 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p11b86180} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2d238840} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p19976900} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pb08b100} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">청약 참여자</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">15명</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
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

            {/* 청약 상태 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-red-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 2)" />
                  <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(15, 2)" />
                  <path d={svgPaths.p371e6400} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M1 1H19" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3, 10)" />
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

          {/* 청약 내역 - 상세보기 버튼 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px] mb-[24px]">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">청약 내역</p>
              <div className="bg-slate-50 border border-slate-200 rounded-[8px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#314158]">총 5건</p>
              </div>
            </div>

            <div className="text-center py-[40px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] text-[16px] text-[#62748e] mb-[24px]">청약 내역을 확인하려면 상세보기를 클릭하세요.</p>
              <button
                onClick={onNavigateToDetailTrA}
                className="bg-[#2a3fec] rounded-[8px] h-[52px] px-[32px] inline-flex items-center gap-[8px]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p26b72c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p28db2b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-white">상세보기</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Tranche B */}
      {activeTab === 'B' && (
        <div className="max-w-[1440px] mx-auto px-[32px] pt-[32px] pb-[130px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
            {/* 발행 목표액 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1b524c20} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M1 11V1" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(11.5, 12)" />
                  <path d={svgPaths.p355b9480} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p125b5900} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">발행 목표액</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">400억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] space-y-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">후순위</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">12.0%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">이자 지급 방식</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3개월 후불</p>
                </div>
              </div>
            </div>

            {/* 총 청약액 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1H7V7" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 7)" />
                  <path d="M21 1L12.5 9.5L7.5 4.5L1 11" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1, 7)" />
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

            {/* 청약 참여자 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p11b86180} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2d238840} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p19976900} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pb08b100} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

            {/* 청약 상태 */}
            <div className="bg-white border border-slate-200 rounded-[14px] p-[24px]">
              <div className="bg-red-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(7, 2)" />
                  <path d="M1 1V5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(15, 2)" />
                  <path d={svgPaths.p371e6400} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M1 1H19" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3, 10)" />
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

          {/* 청약 내역 - 상세보기 버튼 */}
          <div className="bg-white border border-slate-200 rounded-[14px] p-[24px] mb-[24px]">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">청약 내역</p>
              <div className="bg-slate-50 border border-slate-200 rounded-[8px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-[#314158]">총 5건</p>
              </div>
            </div>

            <div className="text-center py-[40px]">
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] text-[16px] text-[#62748e] mb-[24px]">청약 내역을 확인하려면 상세보기를 클릭하세요.</p>
              <button
                onClick={onNavigateToDetailTrB}
                className="bg-[#f54900] rounded-[8px] h-[52px] px-[32px] inline-flex items-center gap-[8px]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p26b72c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p28db2b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-white">상세보기</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}