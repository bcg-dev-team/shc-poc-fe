import { CheckCircle2 } from "lucide-react";

interface TrancheCardData {
  name: string;
  priority: "선순위" | "후순위";
  issueAmount: string;
  interestRate: string;
  maturityDate: string;
  investorCount: string;
  fundingStatus: string;
  p2pTransaction: string;
  interestPayments: Array<{
    date: string;
    amount: string;
    status: "completed" | "pending";
  }>;
  totalPaid: string;
  totalCount: string;
  paymentCycle: string;
}

interface TrancheDetailProps {
  data: TrancheCardData;
  onShowSettlement?: () => void;
  onShowSubscription?: () => void;
  onNavigateHome?: () => void;
  onNavigateToDetailTrA?: () => void;
  onNavigateToDetailTrB?: () => void;
  onNavigateToStatusTrA?: () => void;
}

export default function TrancheDetail({ data, onShowSettlement, onShowSubscription, onNavigateHome, onNavigateToDetailTrA, onNavigateToDetailTrB, onNavigateToStatusTrA }: TrancheDetailProps) {
  const handleDetailClick = () => {
    if (data.priority === "선순위" && onNavigateToStatusTrA) {
      onNavigateToStatusTrA();
    } else if (data.priority === "후순위" && onNavigateToDetailTrB) {
      onNavigateToDetailTrB();
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-[20px] flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-[12px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[20px] text-[#0f172b]">{data.name}</p>
            <button
              onClick={handleDetailClick}
              className="bg-slate-100 hover:bg-slate-200 rounded-[6px] px-[12px] py-[6px] transition-colors cursor-pointer"
            >
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-slate-700">상세보기</p>
            </button>
          </div>
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mt-[4px]">트렌치 상세 정보</p>
        </div>
        <div className={`${data.priority === "선순위" ? "bg-[#2a3fec]" : "bg-[#7F22FE]"} rounded-[6px] px-[10px] py-[4px]`}>
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">{data.priority}</p>
        </div>
      </div>

      {/* 발행 정보 */}
      <div className="mb-[20px]">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">발행 정보</p>
        <div className="grid grid-cols-3 gap-[12px]">
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">발행규모</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b]">{data.issueAmount} ({data.fundingStatus})</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">금리</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b]">{data.interestRate}</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">만기일</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b] flex items-center gap-[4px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="#62748e" strokeWidth="1" fill="none"/>
                <path d="M2.5 6h11M5 2v2M11 2v2" stroke="#62748e" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              {data.maturityDate}
            </p>
          </div>
        </div>
      </div>

      {/* 운영 현황 */}
      <div className="mb-[20px]">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">운영 현황</p>
        <div className="grid grid-cols-3 gap-[12px]">
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">투자자 수</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b]">{data.investorCount}</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">모집 상태</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b]">{data.issueAmount} ({data.fundingStatus})</p>
          </div>
          <div className="bg-[#f5f3ff] rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[6px]">P2P 거래</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[22px] text-[16px] text-[#0f172b]">{data.p2pTransaction}</p>
          </div>
        </div>
      </div>

      {/* 이자 지급 내역 */}
      <div>
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">이자 지급 내역</p>
        <div className="space-y-[8px]">
          {data.interestPayments.map((payment, index) => (
            <div 
              key={index}
              onClick={() => payment.status === "completed" && onShowSettlement && onShowSettlement()}
              className={`${payment.status === "completed" ? "bg-[#e8f5f0] cursor-pointer hover:bg-[#d4eee3]" : "bg-slate-50"} rounded-[8px] px-[14px] py-[12px] flex items-center justify-between transition-colors ${payment.date.includes("2026-01-15") && payment.date.includes("4분기") ? "hidden" : ""}`}
            >
              <div className="flex items-center gap-[8px]">
                {payment.status === "completed" ? (
                  <CheckCircle2 className="size-[18px] text-[#00a832]" strokeWidth={2} />
                ) : (
                  <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" r="7.5" stroke="#62748e" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b] font-[Pretendard_GOV]">{payment.date}</p>
              </div>
              <p className={`font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[14px] ${payment.status === "completed" ? "text-[#0f172b]" : "text-[#62748e]"}`}>
                {payment.amount}
              </p>
            </div>
          ))}

          {/* Summary Row */}
          <div className="border-t border-slate-200 pt-[12px] mt-[12px]">
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="bg-slate-50 rounded-[8px] p-[14px] flex items-center justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] font-[Pretendard_GOV]">누적 지급</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.totalPaid} ({data.totalCount})</p>
              </div>
              <div className="bg-slate-50 rounded-[8px] p-[14px] flex items-center justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] font-[Pretendard_GOV]">이자 지급</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.paymentCycle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}