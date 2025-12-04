import svgPaths from "./svg-jxkzny3kls";
import { Link } from "react-router-dom";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">내 포트폴리오</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">실시간 투자 현황 및 수익 정보 (2025-11-30 기준)</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[109px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 투자 금액</p>
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">270억원</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[78.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">보유종목</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">1개 (P2P 매도 후)</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.82px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">평가 손익</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">+5.4억원 (+2.0%)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <StatsCard />
      <StatsCard1 />
      <StatsCard2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardContent">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
          <Frame />
        </div>
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

function StatsCard3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">누적 수령 이자</p>
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

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[78.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">지급 횟수</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">3회 완료 (P2P 정산 포함)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.82px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">다음 이자</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">2026-01-15 (4.05억)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function StatsCard5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <StatsCard3 />
      <StatsCard4 />
      <StatsCard5 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardContent">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
          <Frame1 />
        </div>
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

function StatsCard6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="StatsCard">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">평균 수익률 (연환산)</p>
    </div>
  );
}

function StatsCard7() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="StatsCard">
      <p className="basis-0 font-['Pretendard_GOV:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172b] text-[30px]">6.0%</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[78.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">투자 기간</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">319일</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.82px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">만기</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[48.398px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[49px] not-italic text-[#0f172b] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">D-776일 (2028-01-15)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function StatsCard8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[65px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <StatsCard6 />
      <StatsCard7 />
      <StatsCard8 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardContent">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
          <Frame13 />
        </div>
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

function Container8() {
  return (
    <div className="content-stretch flex gap-[24px] h-[210px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">보유 토큰</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-slate-50 h-[22px] relative rounded-[8px] shrink-0 w-[49.117px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[49.117px]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-nowrap whitespace-pre">총 1건</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubscriptionTable() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[859.328px]" data-name="SubscriptionTable">
      <Container9 />
      <Badge />
    </div>
  );
}

function TableHead() {
  return (
    <div className="bg-[#f3f5f7] h-[40px] relative shrink-0 w-[200px]" data-name="TableHead">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">상품명</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="bg-[#f3f5f7] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[8px] py-[9px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">트렌치</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">투자금액</p>
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
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">현재가치</p>
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
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">수익률</p>
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
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">누적이자</p>
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
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">만기일</p>
        </div>
      </div>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="bg-[#f3f5f7] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-0 py-[9px] relative shrink-0 w-[120px]" data-name="TableHead">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-center text-nowrap whitespace-pre">관리</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="basis-0 bg-slate-50 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <div className="flex flex-row items-center self-stretch">
        <TableHead1 />
      </div>
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
    <div className="h-[49px] relative shrink-0 w-[200px]" data-name="TableCell">
      <Link to="/token-detail" className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[14px] whitespace-pre hover:underline cursor-pointer">강남학동 Tr_A</Link>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#2a3fec] h-[22px] relative rounded-[8px] shrink-0 w-[49.117px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[49.117px]">
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">선순위</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-end px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">300억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">275.4억</p>
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
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-right w-[50px]">+2.0%</p>
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
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-nowrap whitespace-pre">12.9억</p>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[14px] relative size-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">2028-01-15</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
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

function Button() {
  return (
    <Link to="/token-detail" className="box-border content-stretch flex gap-[4px] items-center px-0 py-[6px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-slate-100 transition-colors" data-name="Button">
      <Icon />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">상세</p>
    </Link>
  );
}

function TableCell7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[9px] relative shrink-0 w-[120px]" data-name="TableCell">
      <Button />
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
      <TableCell5 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCell6 />
      </div>
      <TableCell7 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TableBody">
      <TableRow1 />
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

function CardContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="CardContent">
      <SubscriptionTable1 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <SubscriptionTable />
          <CardContent3 />
        </div>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.055px]" data-name="CardTitle">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">이자 수령 내역</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
        <CardTitle />
      </div>
    </div>
  );
}

function TrancheDetailCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="TrancheDetailCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[549.164px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start not-italic relative text-[14px] text-nowrap w-[549.164px] whitespace-pre">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#007a55]">2025-10-15 (3Q)</p>
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] relative shrink-0 text-neutral-950 text-right">이자 수령: 4.05억 (270억 x 6% + 4)</p>
      </div>
    </div>
  );
}

function Icon1() {
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
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Icon1 />
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-[549.164px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start not-italic relative text-[14px] text-nowrap w-[549.164px] whitespace-pre">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#007a55]">2025-07-15 (2Q)</p>
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] relative shrink-0 text-neutral-950 text-right">이자 수령: 4.35억 (270억분 4.05억 + P2P 정산 0.30억)</p>
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

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Icon2 />
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-[549.164px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start not-italic relative text-[14px] text-nowrap w-[549.164px] whitespace-pre">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#007a55]">2025-04-15 (1Q)</p>
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] relative shrink-0 text-neutral-950 text-right">이자 수령: 4.5억 (300억 x 6% + 4)</p>
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

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Icon3 />
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-[549.164px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start not-italic relative text-[14px] text-nowrap w-[549.164px] whitespace-pre">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#ff7b00]">2025-04-15 (1Q)</p>
        <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] relative shrink-0 text-neutral-950 text-right">이자 수령: 4.5억 (300억 x 6% + 4)</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_281)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #FF7B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #FF7B00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_281">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Icon4 />
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff7b00] text-[14px] text-nowrap text-right whitespace-pre">완료</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fff1e5] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd4af] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">누적</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">12.9억 (3회)</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph1 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">연간 예상</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">16.2억</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph3 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">만기까지</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">38.88억</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph5 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Container16 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">이자 수익 요약</p>
      <Frame4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Frame5 />
    </div>
  );
}

function TrancheDetailCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TrancheDetailCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container20 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <TrancheDetailCard />
          <TrancheDetailCard1 />
        </div>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.055px]" data-name="CardTitle">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">P2P 거래</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative">
        <CardTitle1 />
      </div>
    </div>
  );
}

function TrancheDetailCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TrancheDetailCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ff3636] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-nowrap text-right text-white whitespace-pre">매도</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff3636] text-[14px] text-nowrap whitespace-pre">2025-06-15</p>
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] relative shrink-0 text-right">수량: 30억 → 투자자 E | 거래가: 30.6억 (+2%)</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] relative shrink-0">이자 선정산: 0.30억 수령 (61일분)</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative">
        <Frame11 />
        <Frame9 />
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

function Frame21() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center relative">
        <Icon5 />
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">체결</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-red-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc6c6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Frame20 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">거래내역</p>
      <Container22 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard_GOV:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap">
        <li className="">
          <span className="leading-[24px]">현재 보유: 270억 (54%) 매도 가능</span>
        </li>
        <li className="">
          <span className="leading-[24px]">보유기간 비례 이자 자동 정산</span>
        </li>
      </ul>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative">
        <Frame22 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#622daa] relative rounded-[8px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">매도 주문 등록</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-slate-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[12px] relative w-full">
          <Frame23 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">추가 매도</p>
      <Container23 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">P2P 요약</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">매도 30억 (1건)</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 bg-slate-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph7 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">매각 이익</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">+0.6억</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 bg-slate-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph9 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">이자정산</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">+0.30억</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 bg-slate-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph11 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Container24 />
      <Container25 />
      <Container27 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">청약번호</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">SUB-001</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 bg-violet-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph13 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">최초 배정</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">300억</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 bg-violet-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph15 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">현재</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">270억 (54.0%)</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-violet-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Paragraph17 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Container28 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Frame8 />
        <Frame24 />
        <Frame7 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
          <TrancheDetailCard2 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-start relative w-full">
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <Card3 />
      <Frame6 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[1136px] items-start left-1/2 pb-[130px] pt-[32px] px-[32px] top-[174px] translate-x-[-50%] w-[1440px]" data-name="Main Content">
      <Container8 />
      <PrimitiveDiv />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Text12 />
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

function Container34() {
  return (
    <div className="h-[36px] relative shrink-0 w-[371.172px]" data-name="Container">
      <Link to="/" className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[371.172px] cursor-pointer">
        <Container33 />
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

function Container35() {
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

function Badge2() {
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
        <Container35 />
        <Paragraph19 />
        <Badge2 />
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

function Button1() {
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

function Container36() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Button1 />
    </div>
  );
}

function InvestorHeaderNew1() {
  return (
    <div className="absolute bg-[#622daa] box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[272px] top-0 w-[1920px]" data-name="InvestorHeaderNew">
      <div aria-hidden="true" className="absolute border-[#1447e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container36 />
    </div>
  );
}

export default function ShcUi() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_005_투자자포트폴리오 1">
      <Container1 />
      <MainContent />
      <InvestorHeaderNew1 />
    </div>
  );
}