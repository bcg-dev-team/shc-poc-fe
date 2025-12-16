import svgPaths from "./svg-6t9rzydtes";

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

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[121.711px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">{`발행 관리 > 청약 관리`}</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#f54900] h-[22px] relative rounded-[999px] shrink-0 w-full" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">후순위 (12%)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[87.508px]">
      <Badge1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11px] items-center relative">
        <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[24px] text-nowrap whitespace-pre">강남학동 Tr_B 청약 현황</p>
        <Frame2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-center left-0 top-[28px] w-[330.664px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[113px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p1b524c20} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-10%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M1 11V1" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-5.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 7">
            <path d={svgPaths.p355b9480} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-19.42%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
            <path d={svgPaths.p125b5900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col items-start left-[24px] pb-0 pt-[12px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="StatsCard">
      <Icon2 />
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[276px]" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">발행 목표액</p>
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[116px] w-[276px]" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">400억원</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">선순위</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">12.0%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[52.438px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">이자 지급 방식</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[32.266px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[33px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">3개월 후불</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function StatsCard3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[168px] w-[276px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[324px]">
        <StatsCard />
        <StatsCard1 />
        <StatsCard2 />
        <StatsCard3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function StatsCard4() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[276px]" data-name="StatsCard">
      <Container9 />
    </div>
  );
}

function StatsCard5() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[276px]" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 청약액</p>
    </div>
  );
}

function StatsCard6() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[116px] w-[276px]" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">400억원</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">달성률</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.727px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.727px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[37px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function StatsCard7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[168px] w-[276px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[324px]">
        <StatsCard4 />
        <StatsCard5 />
        <StatsCard6 />
        <StatsCard7 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
            <path d={svgPaths.p2d238840} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatsCard8() {
  return (
    <div className="absolute bg-violet-50 box-border content-stretch flex flex-col items-start left-[24px] pb-0 pt-[12px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="StatsCard">
      <Icon4 />
    </div>
  );
}

function StatsCard9() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[276px]" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">청약 참여자</p>
    </div>
  );
}

function StatsCard10() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[116px] w-[276px]" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">8명</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">기관</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[28.234px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[29px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">5명</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">개인</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[20.172px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[21px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">3명</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function StatsCard11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[168px] w-[276px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Container12 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[324px]">
        <StatsCard8 />
        <StatsCard9 />
        <StatsCard10 />
        <StatsCard11 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
            <path d="M1 1H19" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-red-50 relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function StatsCard12() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[276px]" data-name="StatsCard">
      <Container13 />
    </div>
  );
}

function StatsCard13() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[276px]" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">청약 상태</p>
    </div>
  );
}

function StatsCard14() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[116px] w-[276px]" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">마감</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">마감일</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.813px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[77px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">2025-01-10 18:00</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[52.438px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">남은 시간</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[40.336px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[41px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function StatsCard15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[24px] pb-0 pt-[17px] px-0 top-[168px] w-[276px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[324px]">
        <StatsCard12 />
        <StatsCard13 />
        <StatsCard14 />
        <StatsCard15 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[24px] h-[259px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">청약 내역</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[8px] shrink-0 w-[49.117px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[49.117px]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap whitespace-pre">총 5건</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubscriptionTable() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[859.328px]" data-name="SubscriptionTable">
      <Container17 />
      <Badge2 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="bg-amber-50 h-[40px] relative shrink-0 w-[50px]" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="basis-0 bg-amber-50 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">청약번호</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="bg-amber-50 h-[40px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">투자자명</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="basis-0 bg-amber-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">유형</p>
        </div>
      </div>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="basis-0 bg-amber-50 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[78.8px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[9.25px] translate-x-[-100%] whitespace-pre">청약금액</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="basis-0 bg-amber-50 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[78.8px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[9.25px] translate-x-[-100%] whitespace-pre">배정금액</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="basis-0 bg-amber-50 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">청약일시</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="basis-0 bg-amber-50 grow min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">상태</p>
        </div>
      </div>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="bg-amber-50 box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[9px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-center text-nowrap whitespace-pre">관리</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="basis-0 bg-slate-50 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead3 />
      </div>
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
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
    <div className="h-[49px] relative shrink-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">SUB-101</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">미래에셋캐피탈</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-orange-50 relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-nowrap whitespace-pre">기관</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Badge3 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#0f172b] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">160억</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#007a55] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">160억</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">01-08 10:00</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#ff7b00] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">배정완료</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Badge4 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon6 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button1 />
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
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[49px] relative shrink-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">SUB-102</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">하나자산운용</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-orange-50 relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-nowrap whitespace-pre">기관</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Badge5 />
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#0f172b] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">80억</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#007a55] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">80억</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">01-08 11:30</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#ff7b00] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">배정완료</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Badge6 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon7 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="h-[49px] relative shrink-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">3</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">SUB-103</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">투자자 A</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-orange-50 relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-nowrap whitespace-pre">기관</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Badge7 />
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#0f172b] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">50억</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#007a55] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">50억</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">01-08 14:00</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#ff7b00] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">배정완료</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Badge8 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon8 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button3 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="h-[49px] relative shrink-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">4</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">SUB-104</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">삼성생명</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-orange-50 relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-nowrap whitespace-pre">기관</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Badge9 />
        </div>
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#0f172b] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">40억</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#007a55] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">40억</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">01-09 09:30</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#ff7b00] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">배정완료</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Badge10 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon9 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button4 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="h-[49px] relative shrink-0 w-[50px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">5</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">SUB-105</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">현대해상</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-orange-50 relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-nowrap whitespace-pre">기관</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Badge11 />
        </div>
      </div>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#0f172b] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">40억</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[79.1px] not-italic text-[#007a55] text-[14px] text-right top-[14px] translate-x-[-100%] w-[50px]">40억</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#45556c] text-[14px] text-nowrap top-[14px] whitespace-pre">01-09 11:00</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">배정완료</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#ff7b00] relative rounded-[999px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[3px] relative rounded-[inherit]">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Badge12 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon10 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button5 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
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
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col h-[290px] items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function SubscriptionTable1() {
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

function CardContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="CardContent">
      <SubscriptionTable1 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] text-center text-nowrap whitespace-pre">... 외 3명 (개인투자자 30억)</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <SubscriptionTable />
          <CardContent4 />
        </div>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[392.664px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[392.664px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#7b3306] text-[20px] text-nowrap top-0 whitespace-pre">요약</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">Tr_B 총계</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[16px] top-0 w-[222px]">400억 (8명)</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[52px] relative shrink-0 w-[222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start relative w-[222px]">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[88px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function AllocationInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="AllocationInfo">
      <Container19 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">최대</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[16px] top-0 w-[222px]">미래에셋캐피탈 160억 (40%)</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[52px] relative shrink-0 w-[222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start relative w-[222px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[88px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">평균</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[16px] top-0 w-[222px]">50억</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[52px] relative shrink-0 w-[222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start relative w-[222px]">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[88px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">발행일</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[16px] top-0 w-[222px]">2025-01-15</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[52px] relative shrink-0 w-[222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[52px] items-start relative w-[222px]">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 bg-white grow h-[88px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[88px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-start relative w-full">
        <AllocationInfo />
        <Container21 />
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-amber-50 relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <CardTitle />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Print() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Print">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_2743)" id="Print">
          <g id="Vector"></g>
          <path d={svgPaths.p281a9600} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2743">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[32px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Print />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">목록 출력</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2721)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2721">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f54900] box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[31px] py-[8px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Button">
      <Icon11 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">배정 확정</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function AllocationInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="AllocationInfo">
      <Card5 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Card4 />
      <AllocationInfo1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-1/2 pb-[130px] pt-[32px] px-[32px] top-[178px] translate-x-[-50%] w-[1440px]" data-name="Main Content">
      <Container16 />
      <Container27 />
    </div>
  );
}

export default function ShcUi003TrB() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_003_청약관리_TrB 1">
      <AdminHeader1 />
      <Container6 />
      <MainContent />
    </div>
  );
}