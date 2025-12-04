import svgPaths from "../imports/svg-nv8txvcn14";
import { CheckCircle2, ArrowLeftRight } from "lucide-react";
import Container from "../imports/Container";
import svgPathsCard from "../imports/svg-b637bt7mrd";

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

interface IntegratedViewProps {
  trancheAData: TrancheCardData;
  trancheBData: TrancheCardData;
  onShowSettlement?: () => void;
}

function TrancheCard({ data }: { data: TrancheCardData }) {
  return (
    <div className="bg-white rounded-[14px] border border-slate-200 p-[24px]">
      {/* Title with Badge */}
      <div className="flex items-center justify-between mb-[24px]">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[20px] text-[#0f172b]">
          {data.name}
        </p>
        <div className={`${data.priority === "선순위" ? "bg-[#2a3fec]" : "bg-[#9333ea]"} rounded-[8px] px-[9px] py-[3px]`}>
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">
            {data.priority}
          </p>
        </div>
      </div>

      {/* 발행 정보 */}
      <div className="mb-[24px]">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">발행 정보</p>
        <div className="grid grid-cols-3 gap-[12px]">
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">발행금액</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.issueAmount}</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">수익률</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.interestRate}</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">만기일</p>
            <div className="flex items-center gap-[4px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <rect x="2" y="3" width="12" height="11" rx="1" stroke="#62748e" strokeWidth="1.33333" fill="none" />
                <path d="M5 1V4M11 1V4" stroke="#62748e" strokeWidth="1.33333" strokeLinecap="round" />
                <path d="M2 6H14" stroke="#62748e" strokeWidth="1.33333" />
              </svg>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.maturityDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 운영 현황 */}
      <div className="mb-[24px]">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">운영 현황</p>
        <div className="grid grid-cols-3 gap-[12px]">
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">투자자 수</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.investorCount}</p>
          </div>
          <div className="bg-slate-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">모집 현황</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.issueAmount} ({data.fundingStatus})</p>
          </div>
          <div className="bg-violet-50 rounded-[8px] p-[14px]">
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[4px]">P2P 거래</p>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[data.p2pTransaction === '-억 (0건)' ? '#62748e' : '#0f172b']">{data.p2pTransaction}</p>
          </div>
        </div>
      </div>

      {/* 이자 지급 내역 */}
      <div>
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b] mb-[12px]">이자 지급 내역</p>
        <div className="space-y-[8px]">
          {data.interestPayments.slice().reverse().map((payment, index) => (
            <div
              key={index}
              className={`bg-emerald-50 border border-emerald-200 rounded-[8px] px-[16px] py-[12px] flex items-center justify-between ${payment.date === "2026-01-15 (4분기)" ? "hidden" : ""}`}
            >
              <div className="flex items-center gap-[12px]">
                <CheckCircle2 className="size-[20px] text-[#00a832]" strokeWidth={2} />
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">
                  {payment.date}
                </p>
              </div>
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">
                {payment.amount}
              </p>
            </div>
          ))}

          {/* Summary Row */}
          <div className="border-t border-slate-200 pt-[12px] mt-[12px]">
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="bg-slate-50 rounded-[8px] p-[14px] flex items-center justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">누적 지급</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.totalPaid} ({data.totalCount})</p>
              </div>
              <div className="bg-slate-50 rounded-[8px] p-[14px] flex items-center justify-between">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">이자 지급</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#0f172b]">{data.paymentCycle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IntegratedView({ trancheAData, trancheBData, onShowSettlement }: IntegratedViewProps) {
  const recentActivities = [
    {
      type: "interest",
      title: "3분기 이자 지급 완료",
      description: "Tr_A: 7.5억원 | Tr_B: 12억원",
      date: "2025-10-15 09:00",
    },
    {
      type: "interest",
      title: "2분기 이자 지급 완료",
      description: "Tr_A: 7.5억원 | Tr_B: 12억원",
      date: "2025-07-15 09:00",
    },
    {
      type: "p2p",
      title: "P2P 거래 체결",
      description: "신한투자증권 -> 투자자 E, 30억, 거래가 30.6억",
      date: "2025-06-15 14:30",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
        <TrancheCard data={trancheAData} />
        <TrancheCard data={trancheBData} />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white relative rounded-[14px] size-full">
        <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative w-full">
            {/* Header Section */}
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative w-full shrink-0">
              <div className="h-[20px] relative shrink-0 w-full">
                <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">최근 활동 내역</p>
              </div>
              <div className="h-[20px] relative shrink-0 w-full">
                <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">실시간 시스템 활동 로그</p>
              </div>
            </div>

            {/* Activity Log Section */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-full">
                {/* 3분기 이자 지급 */}
                <div 
                  className="bg-emerald-50 h-[102px] relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-[#d4eee3] transition-colors" 
                  onClick={() => onShowSettlement && onShowSettlement()}
                >
                  <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
                      {/* Icon Container */}
                      <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g clipPath="url(#clip0_1_586)">
                                <path d={svgPathsCard.p650c100} fill="var(--fill-0, #009966)" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_586">
                                  <rect fill="white" height="16" width="16" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
                          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
                            <div className="h-[24px] relative shrink-0 w-[92.188px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
                                <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분기 이자 지급 완료</p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[20px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">Tr-A: 7.5억원 | Tr-B: 12억원</p>
                          </div>
                          <div className="h-[16px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-10-15 09:00</p>
                          </div>
                        </div>
                      </div>
                      {/* Check Icon */}
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_1_572)">
                            <path d={svgPathsCard.p39ee6532} stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsCard.p17134c00} stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_572">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2분기 이자 지급 */}
                <div 
                  className="bg-emerald-50 h-[102px] relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-[#d4eee3] transition-colors" 
                  onClick={() => onShowSettlement && onShowSettlement()}
                >
                  <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
                      {/* Icon Container */}
                      <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g clipPath="url(#clip0_1_586_2)">
                                <path d={svgPathsCard.p650c100} fill="var(--fill-0, #009966)" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_586_2">
                                  <rect fill="white" height="16" width="16" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
                          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
                            <div className="h-[24px] relative shrink-0 w-[92.188px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
                                <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">2분기 이자 지급 완료</p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[20px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">Tr-A: 7.5억원 | Tr-B: 12억원</p>
                          </div>
                          <div className="h-[16px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-07-15 09:00</p>
                          </div>
                        </div>
                      </div>
                      {/* Check Icon */}
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_1_572_2)">
                            <path d={svgPathsCard.p39ee6532} stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsCard.p17134c00} stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_572_2">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* P2P 거래 */}
                <div className="bg-violet-50 h-[102px] relative rounded-[10px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
                      {/* Icon Container */}
                      <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
                          <div className="h-[16px] overflow-clip relative shrink-0 w-full">
                            <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]">
                              <div className="absolute inset-[-16.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                                  <path d={svgPathsCard.p1efb2580} stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[29.17%_8.33%]">
                              <div className="absolute inset-[-10%_-5%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
                                  <path d={svgPathsCard.p137d8f80} stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
                          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
                            <div className="h-[24px] relative shrink-0 w-[93.281px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.281px]">
                                <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">P2P 거래 체결</p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[20px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">신한투자증권→ 투자자 E, 30억, 거래가 30.6억)</p>
                          </div>
                          <div className="h-[16px] relative shrink-0 w-full">
                            <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-06-15 14:30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}