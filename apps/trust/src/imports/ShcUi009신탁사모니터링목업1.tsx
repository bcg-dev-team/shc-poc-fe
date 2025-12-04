import svgPaths from "./svg-7top899zzv";

function StatsCard() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">900억원</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full font-normal">총 신탁 자산</p>
      <StatsCard />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0 text-[#45556c]">Tr_A</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-neutral-950 text-right">500억</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0 text-[#45556c]">Tr_B</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-neutral-950 text-right">400억</p>
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame3 />
          <StatsCard1 />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-emerald-500 h-[22px] right-[20.13px] rounded-[8px] top-[21px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">▲ 정상 운용중</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame4 />
      <Badge />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">58.5억원</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">누적 이자 지급</p>
      <StatsCard2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0 text-[#45556c]">지급 완료 횟수</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-neutral-950 text-right">3회</p>
    </div>
  );
}

function StatsCard3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[37px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame5 />
          <StatsCard3 />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-emerald-500 h-[22px] right-[20.13px] rounded-[8px] top-[21px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">정상 지급</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[37px] pt-px px-px relative rounded-[14px] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame7 />
      <Badge1 />
    </div>
  );
}

function StatsCard4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">D-46</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">다음 이자 지급</p>
      <StatsCard4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">지급 예정일</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">2026-01-15</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">지급 예정 금액</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">19.5억원</p>
    </div>
  );
}

function StatsCard5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame8 />
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
      <Frame9 />
    </div>
  );
}

function StatsCard6() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">2028-01-15</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] w-full">만기일</p>
      <StatsCard6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">잔여일</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">D-776</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Container">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#45556c]">담보</p>
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[36px] relative shrink-0 text-neutral-950 text-right">부동산 PF</p>
    </div>
  );
}

function StatsCard7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame10 />
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
      <Frame11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">강남학동 Tr_A (선순위)</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[22px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <CardTitle />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-start relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function TrancheSection() {
  return (
    <div className="bg-blue-50 h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="TrancheSection">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[46px] items-center px-[16px] py-0 relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">발행액</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">500억원</p>
    </div>
  );
}

function Container10() {
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">수익률</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">6.0% (연)</p>
    </div>
  );
}

function Container11() {
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">이자 지급</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3개월 후불</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph4 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">발행 정보</p>
      <Container14 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">분기 이자</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">7.5억원</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph6 />
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">누적 지급</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">22.5억원</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph8 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">지급 완료 횟수</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3회</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph10 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">이자 현황</p>
      <Container19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0">주요 투자자</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0">신한투자증권 270억 (54%), 투자자 A 65억 (13%), KB자산운용 60억 (12%)</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[14px]">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 w-[65px]">P2P 거래</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] relative shrink-0 text-nowrap whitespace-pre">1건 (30억, 2025-06-15) | 기타 10명: 105억 (21%)</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-emerald-50 box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[10px] shrink-0 w-[626px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">투자자 현황</p>
      <Container20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Frame12 />
        <Frame13 />
        <Frame14 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
          <TrancheSection />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">강남학동 Tr_B (후순위)</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[22px] items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <CardTitle1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-start relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function TrancheSection1() {
  return (
    <div className="bg-amber-50 h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="TrancheSection">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[46px] items-center px-[16px] py-0 relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">발행액</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">400억원</p>
    </div>
  );
}

function Container23() {
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">수익률</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">12.0% (연)</p>
    </div>
  );
}

function Container24() {
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

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">이자 지급</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3개월 후불</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph16 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">발행 정보</p>
      <Container27 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">분기 이자</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">12억원</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph18 />
          <Paragraph19 />
        </div>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">누적 지급</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">36억원</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph20 />
          <Paragraph21 />
        </div>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">지급 완료 횟수</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3회</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph22 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">이자 현황</p>
      <Container32 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[#0f172b] text-[14px] w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-nowrap whitespace-pre">주요 투자자</p>
      <div className="basis-0 font-['Pretendard_GOV:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0">
        <p className="mb-0">{`미래에셋캐피탈 160억 (40%), 하나자산운용 80억 (20%), 투자자A 50억 (12.5%), `}</p>
        <p>삼성생명 40억 (10%), 기타 4명: 70억 (17.5%)</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#fff1e5] box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[10px] shrink-0 w-[626px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd4af] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">투자자 현황</p>
      <Container33 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Frame18 />
        <Frame19 />
        <Frame21 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
          <TrancheSection1 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">이자 지급 이력</p>
      </div>
    </div>
  );
}

function SubscriptionTable() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[859.328px]" data-name="SubscriptionTable">
      <Container34 />
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
    <div className="bg-[#f3f5f7] h-[40px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">구분</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">Tr_A 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">Tr_B 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[54px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">합계</p>
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
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">상태</p>
        </div>
      </div>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="bg-[#f3f5f7] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-0 py-[9px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-center text-nowrap whitespace-pre">비고</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="basis-0 bg-slate-50 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead3 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead4 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead5 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHead6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead7 />
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
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-04-15</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">1Q</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">7.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">12억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-right w-[50px]">19.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-right w-[50px]">19.5억</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_319)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_319">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">정상</p>
    </div>
  );
}

function TableCell7({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" 
      data-name="TableCell"
    >
      <Button />
    </div>
  );
}

function TableRow1({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center relative shrink-0 w-full" 
      data-name="TableRow"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-07-15</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2Q</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">7.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">12억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-right w-[50px]">19.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-right w-[50px]">39억</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_319)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_319">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon1 />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#622daa] text-[14px] text-nowrap whitespace-pre">P2P 정산</p>
    </div>
  );
}

function TableCell15({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" 
      data-name="TableCell"
    >
      <Button1 />
    </div>
  );
}

function TableRow2({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center relative shrink-0 w-full" 
      data-name="TableRow"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2025-10-15</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">3Q</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">7.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">12억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-right w-[50px]">19.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-right w-[50px]">58.5억</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_319)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_319">
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

function TableCell22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">정상</p>
    </div>
  );
}

function TableCell23({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" 
      data-name="TableCell"
    >
      <Button2 />
    </div>
  );
}

function TableRow3({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="bg-emerald-50 content-stretch flex items-center relative shrink-0 w-full" 
      data-name="TableRow"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">2026-01-15</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="h-[49px] relative shrink-0 w-[120px]" data-name="TableCell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre">4Q</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">7.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-right w-[50px]">12억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-right w-[50px]">19.5억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-right w-[50px]">78억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff7300] text-[14px] text-nowrap text-right whitespace-pre">D-46</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">예정</p>
    </div>
  );
}

function TableCell31({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" 
      data-name="TableCell"
    >
      <Button3 />
    </div>
  );
}

function TableRow4({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div 
      onClick={onNavigateToBankInstruction}
      className="bg-amber-50 content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:bg-amber-100 transition-colors" 
      data-name="TableRow"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function TableBody({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TableBody">
      <TableRow1 onNavigateToBankInstruction={onNavigateToBankInstruction} />
      <TableRow2 onNavigateToBankInstruction={onNavigateToBankInstruction} />
      <TableRow3 onNavigateToBankInstruction={onNavigateToBankInstruction} />
      <TableRow4 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function Table({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function SubscriptionTable1({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="SubscriptionTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative w-full">
          <Table onNavigateToBankInstruction={onNavigateToBankInstruction} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CardContent({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="CardContent">
      <SubscriptionTable1 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function Card6({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <SubscriptionTable />
          <CardContent onNavigateToBankInstruction={onNavigateToBankInstruction} />
        </div>
      </div>
    </div>
  );
}

function MainContent({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-1/2 pb-[130px] pt-[32px] px-[32px] top-[174px] translate-x-[-50%] w-[1440px]" data-name="Main Content">
      <Container7 />
      <Frame6 />
      <Card6 onNavigateToBankInstruction={onNavigateToBankInstruction} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-[rgb(0,133,102)] top-[-0.5px] whitespace-pre">한</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px] bg-[rgb(255,255,255)] rounded-[10px]">
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">한국자산신탁 토큰증권 모니터링</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[36px] relative shrink-0 w-[371.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[371.172px]">
        <Container35 />
        <Heading />
      </div>
    </div>
  );
}

function Icon3() {
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
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">신탁관리자</p>
      </div>
    </div>
  );
}

function InvestorHeaderNew() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="InvestorHeaderNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative">
        <Container37 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Button4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-px relative">
        <InvestorHeaderNew />
        <Icon4 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Button4 />
    </div>
  );
}

function InvestorHeaderNew1() {
  return (
    <div className="absolute bg-[#008566] box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[272px] top-0 w-[1920px]" data-name="InvestorHeaderNew">
      <div aria-hidden="true" className="absolute border-[#008566] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">신탁 자산 모니터링</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">강남학동 재개발 PF 토큰증권 현황 (2025-11-30 기준)</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[60px] relative shrink-0 w-[194.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[194.391px]">
        <Heading1 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[109px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container40 />
    </div>
  );
}

export default function ShcUi({ onNavigateToBankInstruction }: { onNavigateToBankInstruction?: () => void }) {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_009_신탁사모니터링_목업 1">
      <MainContent onNavigateToBankInstruction={onNavigateToBankInstruction} />
      <InvestorHeaderNew1 />
      <Container41 />
    </div>
  );
}