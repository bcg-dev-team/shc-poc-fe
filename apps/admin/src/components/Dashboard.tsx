import svgPaths from "../imports/svg-nv8txvcn14";
import ActivityLog from "./ActivityLog";
import TrancheDetail from "./TrancheDetail";
import IntegratedView from "./IntegratedView";
import InterestSettlementDetail from "./InterestSettlementDetail";
import { useState } from "react";

interface DashboardProps {
  onNavigateToInterestDetail: () => void;
  onNavigateToTrancheDetail: () => void;
  onNavigateHome: () => void;
  onNavigateToSubscription?: () => void;
  onNavigateToDetailTrA?: () => void;
  onNavigateToDetailTrB?: () => void;
  onNavigateToStatusTrA?: () => void;
}

export default function Dashboard({ onNavigateToInterestDetail, onNavigateToTrancheDetail, onNavigateHome, onNavigateToSubscription, onNavigateToDetailTrA, onNavigateToDetailTrB, onNavigateToStatusTrA }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'tranche-a' | 'tranche-b' | 'total'>('tranche-a');

  // Mock data for Tranche A
  const trancheAData = {
    name: "강남학동 Tr_A",
    priority: "선순위" as const,
    issueAmount: "500억원",
    interestRate: "6.0%",
    maturityDate: "2028-01-15",
    investorCount: "15명",
    fundingStatus: "100%",
    p2pTransaction: "30억원 (2025-06-15)",
    interestPayments: [
      { date: "2025-10-15 (3분기)", amount: "7.5억원", status: "completed" as const },
      { date: "2025-07-15 (2분기)", amount: "7.5억원", status: "completed" as const },
      { date: "2025-04-15 (1분기)", amount: "7.5억원", status: "completed" as const },
    ],
    totalPaid: "22.5억원",
    totalCount: "3회",
    paymentCycle: "3개월 후불"
  };

  // Mock data for Tranche B
  const trancheBData = {
    name: "강남학동 Tr_B",
    priority: "후순위" as const,
    issueAmount: "400억원",
    interestRate: "12.0%",
    maturityDate: "2028-01-15",
    investorCount: "8명",
    fundingStatus: "100%",
    p2pTransaction: "20억원 (2025-06-15)",
    interestPayments: [
      { date: "2025-10-15 (3분기)", amount: "12.0억원", status: "completed" as const },
      { date: "2025-07-15 (2분기)", amount: "12.0억원", status: "completed" as const },
      { date: "2025-04-15 (1분기)", amount: "12.0억원", status: "completed" as const },
      { date: "2026-01-15 (4분기)", amount: "12.0억원", status: "pending" as const },
    ],
    totalPaid: "36.0억원",
    totalCount: "3회",
    paymentCycle: "3개월 후불"
  };

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
      <div className="bg-white box-border flex flex-col h-[109px] items-start pb-px pt-[24px] px-[272px] w-full border-b border-slate-200">
        <div className="flex h-[60px] items-center justify-between w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">발행 현황 대시보드</p>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">실시간 토큰 발행 및 운영 현황</p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="box-border pb-[130px] pt-[32px] px-[272px] w-full">
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
          {/* Card 1: 총 발행 규모 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="flex items-start justify-between mb-[16px]">
                <div className="bg-blue-50 rounded-[10px] size-[48px] flex items-center justify-center">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M16 7H22V13" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="bg-[#2a3fec] rounded-[8px] px-[9px] py-[3px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">100% 발행 완료</p>
                </div>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">총 발행 규모</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">900억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">Tr-A (선순위)</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">500억원</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">Tr-B (후순위)</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">400억원</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 참여 투자자 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-emerald-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 3.128C16.8578 3.35037 17.6174 3.85126 18.1597 4.55206C18.702 5.25286 18.9962 6.11389 18.9962 7C18.9962 7.88611 18.702 8.74714 18.1597 9.44794C17.6174 10.1487 16.8578 10.6496 16 10.872" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">참여 투자자</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">23명</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">기관 투자자</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">17명</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">개인 투자자</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">6명</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">평균 투자액</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">39.1억원</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 누적 이자 지급 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="flex items-start justify-between mb-[16px]">
                <div className="bg-[rgba(255,115,0,0.1)] rounded-[10px] size-[48px] flex items-center justify-center">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p30c31600} fill="#FF7300" />
                  </svg>
                </div>
                <div className="bg-[#2a3fec] rounded-[8px] px-[9px] py-[3px]">
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">정상</p>
                </div>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">누적 이자 지급</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">58.5억원</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">지급 횟수</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">3회 완료</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">현재 상태</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#00a832]">정상 지급 완료</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 다음 이자 지급 */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-px">
            <div className="p-[24px]">
              <div className="bg-violet-50 rounded-[10px] size-[48px] flex items-center justify-center mb-[16px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M16 3L20 7L16 11" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M20 7H4" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 14L20 18L16 22" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M20 18L4 18" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[8px]">다음 이자 지급</p>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[30px] text-[#0f172b] mb-[16px]">D-46</p>
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-[17px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">지급 예정일</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">2026-01-15</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">지급 금액</p>
                  <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">4분기 이자 (19.5억원)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs & Detailed Info */}
        <div className={activeTab === "total" ? "" : "grid grid-cols-[1fr_400px] gap-[24px]"}>
          {/* Left Section - Tranche Details */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-[25px]">
            {/* Tabs */}
            <div className="flex gap-[8px] mb-[24px] border-b border-slate-200">
              <button
                className={`px-[16px] py-[12px] text-[14px] ${
                  activeTab === "tranche-a" 
                    ? "text-[#2a3fec] border-b-2 border-[#2a3fec] font-['Pretendard_GOV:SemiBold',sans-serif]" 
                    : "text-[#62748e] font-['Pretendard_GOV:Regular',sans-serif]"
                }`}
                onClick={() => setActiveTab("tranche-a")}
              >
                Tranche A
              </button>
              <button
                className={`px-[16px] py-[12px] text-[14px] ${
                  activeTab === "tranche-b" 
                    ? "text-[#2a3fec] border-b-2 border-[#2a3fec] font-['Pretendard_GOV:SemiBold',sans-serif]" 
                    : "text-[#62748e] font-['Pretendard_GOV:Regular',sans-serif]"
                }`}
                onClick={() => setActiveTab("tranche-b")}
              >
                Tranche B
              </button>
              <button
                className={`px-[16px] py-[12px] text-[14px] ${
                  activeTab === "total" 
                    ? "text-[#2a3fec] border-b-2 border-[#2a3fec] font-['Pretendard_GOV:SemiBold',sans-serif]" 
                    : "text-[#62748e] font-['Pretendard_GOV:Regular',sans-serif]"
                }`}
                onClick={() => setActiveTab("total")}
              >
                통합 조회
              </button>
            </div>

            {/* Tranche A Detail */}
            {activeTab === "tranche-a" && <TrancheDetail data={trancheAData} onShowSettlement={onNavigateToInterestDetail} onShowSubscription={onNavigateToSubscription} onNavigateToDetailTrA={onNavigateToDetailTrA} onNavigateToDetailTrB={onNavigateToDetailTrB} onNavigateToStatusTrA={onNavigateToStatusTrA} />}
            
            {/* Tranche B Detail */}
            {activeTab === "tranche-b" && <TrancheDetail data={trancheBData} onShowSettlement={onNavigateToInterestDetail} onShowSubscription={onNavigateToSubscription} onNavigateToDetailTrA={onNavigateToDetailTrA} onNavigateToDetailTrB={onNavigateToDetailTrB} onNavigateToStatusTrA={onNavigateToStatusTrA} />}
            
            {/* Integrated View */}
            {activeTab === "total" && <IntegratedView trancheAData={trancheAData} trancheBData={trancheBData} onShowSettlement={onNavigateToInterestDetail} />}
          </div>

          {/* Right Section - Recent Activity */}
          {activeTab !== "total" && (
            <div className="bg-white rounded-[14px] border border-slate-200 p-[25px]">
              <ActivityLog />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}