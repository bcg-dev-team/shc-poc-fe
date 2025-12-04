import svgPaths from "./svg-b637bt7mrd";

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">최근 활동 내역</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">실시간 시스템 활동 로그</p>
    </div>
  );
}

function ActivityLog() {
  return (
    <div className="h-[44px] relative shrink-0 w-[133.102px]" data-name="ActivityLog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[133.102px]">
        <CardTitle />
        <Paragraph />
      </div>
    </div>
  );
}

function SendMoney() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Send money">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_586)" id="Send money">
          <path d={svgPaths.p650c100} fill="var(--fill-0, #009966)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_586">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <SendMoney />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분기 이자 지급 완료</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">Tr-A: 7.5억원 | Tr-B: 12억원</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-10-15 09:00</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
        <Container1 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_572)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_572">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-emerald-50 h-[102px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container />
          <Container2 />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function SendMoney1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Send money">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_586)" id="Send money">
          <path d={svgPaths.p650c100} fill="var(--fill-0, #009966)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_586">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <SendMoney1 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">2분기 이자 지급 완료</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">Tr-A: 7.5억원 | Tr-B: 12억원</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-07-15 09:00</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
        <Container5 />
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_572)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_572">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-emerald-50 h-[102px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container4 />
          <Container6 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1efb2580} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.p137d8f80} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.281px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.281px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">P2P 거래 체결</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">신한투자증권→ 투자자 E, 30억, 거래가 30.6억)</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">2025-06-15 14:30</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
        <Container9 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-violet-50 h-[102px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[102px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container8 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function ActivityLog1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="ActivityLog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container3 />
        <Container7 />
        <Container11 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative size-full">
          <ActivityLog />
          <ActivityLog1 />
        </div>
      </div>
    </div>
  );
}