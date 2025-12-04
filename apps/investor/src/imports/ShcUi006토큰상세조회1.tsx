import svgPaths from "./svg-yaqwjhyjop";
import { Link } from "react-router-dom";

function StatsCard() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">270억원</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">내 보유량</p>
      <StatsCard />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">지분율</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">54.0% (500억 중)</p>
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame9 />
          <StatsCard1 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame10 />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">275.4억원</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">현재 평가액</p>
      <StatsCard2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">수익</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-[#009966] text-right">▲+5.4억 (+2.0%)</p>
    </div>
  );
}

function StatsCard3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame16 />
          <StatsCard3 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame17 />
    </div>
  );
}

function StatsCard4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">12.9억원</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">누적 이자 수령</p>
      <StatsCard4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">지급 완료 횟수</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">3회</p>
    </div>
  );
}

function StatsCard5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame18 />
          <StatsCard5 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame19 />
    </div>
  );
}

function StatsCard6() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">4.05억원</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">다음 이자</p>
      <StatsCard6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">지급 예정일</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">2026-01-15 (D-45)</p>
    </div>
  );
}

function StatsCard7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame20 />
          <StatsCard7 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame21 />
    </div>
  );
}

function StatsCard8() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">2028-01-15</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">만기일</p>
      <StatsCard8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">남은 기간</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">D-776일</p>
    </div>
  );
}

function StatsCard9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame22 />
          <StatsCard9 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame23 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">토큰 ID</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">SHA-GNH-TRA-2025</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 발행량</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">500억원</p>
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">표면 금리</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">{`6.0%  (연)`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph4 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">담보 유형</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">부동산 PF (1순위)</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph6 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container9 />
      <Container11 />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">2025-01-15</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Paragraph9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph8 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">만기일</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">2028-01-15</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Paragraph11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph10 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Container16 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">이자 지급</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">3개월 후불</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph12 />
          <Paragraph13 />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">신탁사</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">한국자산신탁</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph14 />
          <Paragraph15 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Frame />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container12 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame11 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">Contract: 0x1234...5678 | Network: Polygon | Standard: ERC-1400</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 bg-emerald-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">블록체인 정보</p>
      <Container22 />
    </div>
  );
}

function TrancheDetailCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TrancheDetailCard">
      <Container20 />
      <Container23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">토큰 기본 정보</p>
        <TrancheDetailCard />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Primitive.div">
      <Card5 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">지급일</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">보유량</p>
        </div>
      </div>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">수령액</p>
        </div>
      </div>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">상태</p>
        </div>
      </div>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">비고</p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-slate-50 content-stretch flex h-[40px] items-center relative shrink-0 w-[488px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-04-15</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">300억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#108260] text-[14px] text-nowrap text-right whitespace-pre">4.50억</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_285)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_285">
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
      <Icon2 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-right w-[50px]">1Q</p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-07-15</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">270억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#108260] text-[14px] text-nowrap text-right whitespace-pre">4.35억</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_285)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_285">
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
      <Icon3 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-right w-[50px]">P2P 후</p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-10-15</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">270억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#108260] text-[14px] text-nowrap text-right whitespace-pre">4.05억</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_285)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_285">
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
      <Icon4 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-right w-[50px]">3Q</p>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-emerald-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2026-01-15</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">270억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff7300] text-[14px] text-nowrap text-right whitespace-pre">4.05억</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff7300] text-[14px] text-nowrap text-right whitespace-pre">D-46</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-right w-[50px]">4Q</p>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-amber-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c0dbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-nowrap whitespace-pre">누적: 12.9억 | 연간 예상: 16.2억 | 만기까지: 38.88억</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Table />
        <Container24 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[540px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">이자 지급 내역</p>
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <PrimitiveDiv />
      <Card6 />
    </div>
  );
}

function TableHead5() {
  return (
    <div className="basis-0 bg-blue-50 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">거래일</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="basis-0 bg-blue-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">유형</p>
        </div>
      </div>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="basis-0 bg-blue-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">수량</p>
        </div>
      </div>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="basis-0 bg-blue-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">거래가</p>
        </div>
      </div>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="basis-0 bg-blue-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">상대방</p>
        </div>
      </div>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="basis-0 bg-blue-50 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">상태</p>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-slate-50 content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
      <TableHead9 />
      <TableHead10 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-06-15</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ff3636] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-nowrap text-right text-white whitespace-pre">매도</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">30억</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">30.6억</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">투자자 E</p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_285)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_285">
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
      <Icon5 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">체결</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function TableRow6() {
  return (
    <Link to="/p2p-transaction" className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer transition-colors hover:bg-blue-50" data-name="TableRow">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
    </Link>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="basis-0 content-stretch flex font-['Pretendard_GOV:Regular',sans-serif] gap-[16px] grow items-start leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre" data-name="Paragraph">
      <p className="relative shrink-0 text-[#45556c]">P2P 거래 요약</p>
      <p className="relative shrink-0 text-neutral-950">누적: 12.9억 | 연간 예상:16.2억 | 만기까지: 38.88억</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-slate-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Paragraph17 />
        </div>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-nowrap w-full whitespace-pre" data-name="Paragraph">
      <p className="font-['Pretendard_GOV:Bold',sans-serif] relative shrink-0">이자 정산 완료</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0">2Q 경과분 0.30억 선정산 수령 (61일분) | 2Q 이자 합계: 4.35억</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c0dbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Paragraph18 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Table1 />
        <Frame15 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">P2P 거래 내역</p>
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0 overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[10px] z-10" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-center not-italic pb-0 pt-[12px] px-[12px] relative text-center text-nowrap w-full whitespace-pre cursor-pointer hover:bg-slate-100 transition-colors rounded-[10px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#0f172b] text-[16px]">P2P 매도하기</p>
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c] text-[12px]">다른 투자자에게 판매</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0 overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[10px] z-10" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-center not-italic pb-0 pt-[12px] px-[12px] relative text-nowrap w-full whitespace-pre cursor-pointer hover:bg-slate-100 transition-colors rounded-[10px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#0f172b] text-[16px]">거래 내역 보기</p>
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c] text-[12px]">전체 거래 이력 조회</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame25 />
    </div>
  );
}

function TrancheDetailCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TrancheDetailCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0 overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[10px] z-10" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-center not-italic pb-0 pt-[12px] px-[12px] relative text-nowrap w-full whitespace-pre cursor-pointer hover:bg-slate-100 transition-colors rounded-[10px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#0f172b] text-[16px]">이자 내역 보기</p>
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c] text-[12px]">이자 지급 상세 조회</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0 overflow-hidden" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[10px] z-10" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-center not-italic pb-0 pt-[12px] px-[12px] relative text-nowrap w-full whitespace-pre cursor-pointer hover:bg-slate-100 transition-colors rounded-[10px]">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#0f172b] text-[16px]">증빙 발급하기</p>
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c] text-[12px]">투자 확인서 다운로드</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame26 />
    </div>
  );
}

function TrancheDetailCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TrancheDetailCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container34 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[540px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">토큰 관리</p>
      <TrancheDetailCard1 />
      <TrancheDetailCard2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Card7 />
      <Card8 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-1/2 pb-[130px] pt-[32px] px-[32px] top-[174px] translate-x-[-50%] w-[1440px]" data-name="Main Content">
      <Container5 />
      <Frame12 />
      <Frame27 />
      <div className="flex justify-end w-full">
        <Link to="/" className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-lg transition-colors font-['Pretendard_GOV:Medium',sans-serif]">
          돌아가기
        </Link>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container35() {
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
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">신한캐피탈 토큰증권 투자 플랫폼</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[36px] relative shrink-0 w-[371.172px]" data-name="Container">
      <Link to="/" className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[371.172px] cursor-pointer">
        <Container35 />
        <Heading />
      </Link>
    </div>
  );
}

function Icon6() {
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

function Container37() {
  return (
    <div className="bg-[rgba(42,63,236,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">신한투자증권</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-emerald-50 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007a55] text-[12px] text-nowrap whitespace-pre">투자자</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InvestorHeaderNew() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="InvestorHeaderNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative">
        <Container37 />
        <Paragraph19 />
        <Badge />
      </div>
    </div>
  );
}

function Icon7() {
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-px relative">
        <InvestorHeaderNew />
        <Icon7 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Button />
    </div>
  );
}

function InvestorHeaderNew1() {
  return (
    <div className="absolute bg-[#622daa] box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[272px] top-0 w-[1920px]" data-name="InvestorHeaderNew">
      <div aria-hidden="true" className="absolute border-[#1447e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[121.711px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre font-[Pretendard_GOV]">
        <Link to="/" className="hover:underline cursor-pointer">내 포트폴리오</Link>
        {" > 토큰 상세"}
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#2a3fec] h-[22px] relative rounded-[999px] shrink-0 w-[87.508px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[87.508px]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">선순위 (6.0%)</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11px] items-center relative">
        <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[24px] text-nowrap whitespace-pre">강남학동 Tr_A</p>
        <Badge1 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-center left-0 top-[28px] w-[330.664px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[113px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container40 />
    </div>
  );
}

export default function ShcUi() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_006_토큰상세조회 1">
      <MainContent />
      <InvestorHeaderNew1 />
      <Container41 />
    </div>
  );
}