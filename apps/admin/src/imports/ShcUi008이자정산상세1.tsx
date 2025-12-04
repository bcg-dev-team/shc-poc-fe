import svgPaths from "./svg-be3mso14no";

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] left-0 not-italic text-[20px] text-nowrap text-white top-[-0.5px] whitespace-pre">신한캐피탈 토큰증권 발행 시스템</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[371.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[371.172px]">
        <Container />
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #2A3FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #2A3FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(42,63,236,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">관리자</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 bg-[#2a3fec] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Admin</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AdminHeader() {
  return (
    <div className="h-[32px] relative shrink-0 w-[137.203px]" data-name="AdminHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[137.203px]">
        <Container2 />
        <Paragraph />
        <Badge />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[187.203px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-px relative w-[187.203px]">
        <AdminHeader />
        <Icon1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function AdminHeader1() {
  return (
    <div className="absolute bg-blue-800 box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[272px] top-0 w-[1920px]" data-name="AdminHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">이자 정산 상세</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">강남학동 Tr_A - 신한투자증권 (2025-11-30 기준)</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[60px] relative shrink-0 w-[194.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[194.391px]">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[109px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-emerald-500 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[999px] shrink-0" data-name="Badge">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">정산 완료 (2025-10-15)</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">3분기 이자</p>
      <Badge1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">대상 토큰</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">강남학동 Tr_A (6%, 3개월 후불)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">정산 기간</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">2025-07-15 ~ 2025-10-15</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph4 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 이자</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">7.5억원</p>
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

function Container10() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph6 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Frame1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame8 />
        <Container11 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[624px]" data-name="CardTitle">
      <Icon2 />
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[28px] not-italic text-[#1c398e] text-[20px] text-nowrap top-0 whitespace-pre">신한투자증권 이자 정산</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">현재 보유 현황</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유량</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">270억원 (54.0%)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">P2P 매도</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">30억원 (2025-06-15)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">최초 배정</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">300억원 (60.0%)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">청약 번호</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">SUB-001</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function InvestorSettlementDetail() {
  return (
    <div className="bg-slate-50 relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Heading2 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분기 이자</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[24.203px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#009966] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유량 기준 이자</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">4.05억원 (270억 x 6% + 4)</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#009966] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">3Q 정산액</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon3 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">지급완료</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center relative">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">4.05억원</p>
        <Frame2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Frame9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function InvestorSettlementDetail1() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Heading3 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">P2P 거래 이자 정산 (2Q 거래시 완료)</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[68.57px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#622daa] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">매도 수량</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[37px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">30억원</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[68.57px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#622daa] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유 기간</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[37px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">61일 (04-15 ~ 06-15)</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[68.57px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#622daa] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">선정산액</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[37px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">0.30억원: 30억 x 6% + 4 x (61/91)</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function InvestorSettlementDetail2() {
  return (
    <div className="bg-violet-50 relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Heading4 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <InvestorSettlementDetail />
      <InvestorSettlementDetail1 />
      <InvestorSettlementDetail2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[30px] items-center p-[24px] relative rounded-[14px] shrink-0 w-[676px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <Frame10 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #7B3306)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #7B3306)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[624px]" data-name="CardTitle">
      <Icon4 />
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[28px] not-italic text-[#7b3306] text-[20px] text-nowrap top-0 whitespace-pre">투자자 E 이자 정산 (P2P 매수자)</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">보유 현황</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#bb4d00] text-[14px] text-nowrap top-0 whitespace-pre">보유량</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">30억원 (6.0%)</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[60.5px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#bb4d00] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">취득일</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">2025-06-15 (P2P)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[60.5px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#bb4d00] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">취득가</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.945px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">30.6억원 (+2% 프리미엄)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[89px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function InvestorSettlementDetail3() {
  return (
    <div className="bg-slate-50 h-[188px] relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[188px] items-start p-[24px] relative w-full">
          <Heading5 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">2분기 이자 (2025-07-15)</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[24.203px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유기간</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">30일 (06-15 ~ 07-15) | 정산비율: 33%</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0 text-[#1447e6]">2Q 정산액</p>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 text-[#0f172b] text-right">0.15억원: 30억 x 6% + 4 x (30/91)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function InvestorSettlementDetail4() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Heading6 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분기 이자 (2025-10-15)</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[68.57px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#009966] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유량 기준</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[37px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">0.45억원 (30억 x 6% + 4)</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#009966] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">3Q 정산액</p>
      </div>
    </div>
  );
}

function Icon5() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon5 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">지급완료</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center relative">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">0.45억원</p>
        <Frame3 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Frame12 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function InvestorSettlementDetail5() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="InvestorSettlementDetail">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Heading7 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <InvestorSettlementDetail3 />
      <InvestorSettlementDetail4 />
      <InvestorSettlementDetail5 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[30px] items-center p-[24px] relative rounded-[14px] shrink-0 w-[676px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#ffd230] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <Frame11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">정산 타임라인 (신한투자증권)</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">지급일</p>
        </div>
      </div>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">구분</p>
        </div>
      </div>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">보유량</p>
        </div>
      </div>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">계산식</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">정산액</p>
        </div>
      </div>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">누적</p>
        </div>
      </div>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="bg-[#f3f5f7] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-0 py-[9px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-center text-nowrap whitespace-pre">상태</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="basis-0 bg-slate-50 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead2 />
      </div>
      <TableHead3 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead4 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead6 />
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">2025-04-15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">1Q 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">300억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">300억 x 6% + 4</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px px-0 py-[14px] relative shrink-0" data-name="TableCell">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">4.50억</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">4.50억</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon6 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Frame4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell6 />
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">2025-06-15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">P2P 선정산</p>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">30억 매도</p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">30억 x 6% + 4 x 67%</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">0.30억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">4.80억</p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1998)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #622DAA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #622DAA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1998">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon7 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#622daa] text-[14px] text-nowrap text-right whitespace-pre">거래정산</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Frame5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-violet-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell13 />
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">2025-07-15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">2Q 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">270억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">270억 x 6% + 4</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">4.05억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">8.85억</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon8 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Frame6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell20 />
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">2025-10-15</p>
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">3Q 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">270억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">270억 x 6% + 4</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">4.05억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">12.90억</p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon9 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Frame7 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-emerald-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell27 />
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function SubscriptionTable() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="SubscriptionTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="CardContent">
      <SubscriptionTable />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container36 />
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Container35 />
      <Card3 />
    </div>
  );
}

function KeyboardReturn() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Keyboard return">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_2006)" id="Keyboard return">
          <g id="Vector"></g>
          <path d={svgPaths.p221a8200} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2006">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[52px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[24px] py-[10px] relative w-[200px]">
        <KeyboardReturn />
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">돌아가기</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-end left-[272px] pb-[130px] pt-[32px] px-0 top-[174px] w-[1376px]">
      <Container37 />
      <Container38 />
    </div>
  );
}

export default function ShcUi() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_008_이자정산상세 1">
      <AdminHeader1 />
      <Container6 />
      <Frame />
    </div>
  );
}