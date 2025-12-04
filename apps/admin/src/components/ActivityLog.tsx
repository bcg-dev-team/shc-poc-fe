import { DollarSign, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import SendMoney from "../imports/SendMoney";

export default function ActivityLog() {
  return (
    <div>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[20px] text-[#0f172b] mb-[8px]">최근 활동 내역</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e] mb-[16px]">실시간 사건별 활동 로그</p>
      
      <div className="flex flex-col gap-[10px]">
        {/* Activity Item 1 */}
        <div className="bg-[#e8f5f0] rounded-[8px] p-[14px]">
          <div className="flex items-start gap-[10px]">
            <div className="flex-shrink-0 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center">
              <div className="size-[18px]">
                <SendMoney />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[18px] text-[16px] text-[#0f172b] mb-[4px]">2분기 이자 지급 완료</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[14px] text-[#62748e]">Tr_A: 7.5억원 | Tr_B: 12억원</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[11px] text-[#62748e] mt-[2px]">2025-07-15 10:00</p>
            </div>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="bg-[#e8f5f0] rounded-[8px] p-[14px]">
          <div className="flex items-start gap-[10px]">
            <div className="flex-shrink-0 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center">
              <div className="size-[18px]">
                <SendMoney />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[18px] text-[16px] text-[#0f172b] mb-[4px]">1분기 이자 지급 완료</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[14px] text-[#62748e]">Tr_A: 7.5억원 | Tr_B: 12억원</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[11px] text-[#62748e] mt-[2px]">2025-04-15 10:00</p>
            </div>
          </div>
        </div>

        {/* Activity Item 3 */}
        <div className="bg-[#f5f3ff] rounded-[8px] p-[14px]">
          <div className="flex items-start gap-[10px]">
            <div className="flex-shrink-0 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center">
              <ArrowLeftRight className="size-[18px] text-[#7F22FE]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[18px] text-[16px] text-[#0f172b] mb-[4px] flex items-center gap-[4px]">
                P2P 거래 체결
                <CheckCircle2 className="size-[16px] text-[#7F22FE]" strokeWidth={2} />
              </p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[14px] text-[#62748e]">신한투자증권 → 투자자 E, 30억, 거래가 30.4억)</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] text-[11px] text-[#62748e] mt-[2px]">2025-06-15 14:50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}