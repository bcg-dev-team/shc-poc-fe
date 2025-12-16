import svgPaths from "./svg-v7lv6y7lb8";
import { Link } from "react-router-dom";

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0">거래 체결 완료</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] relative shrink-0">
        <span className="font-['Pretendard_GOV:Medium',sans-serif] not-italic">거래번호</span>: TXN-2025-06-15-001
      </p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] relative shrink-0">
        <span className="font-['Pretendard_GOV:Medium',sans-serif] not-italic">체결일시</span>: 2025-06-15 14:30:25
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-emerald-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래토큰</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">강남학동 Tr_A</p>
    </div>
  );
}

function Container3() {
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 수량</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">30억원</p>
    </div>
  );
}

function Container4() {
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 단가</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">102% (프리미엄)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 금액</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">30.6억원</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">매도자</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#ff3636] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">신한투자증권</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">매수자</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.938px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1447e6] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">투자자 E</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function TrancheDetailCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TrancheDetailCard">
      <Container2 />
      <Container14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">거래 정보</p>
        <TrancheDetailCard />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <Card />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1024)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #2A3FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #2A3FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1024">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1326px]" data-name="CardTitle">
      <Icon />
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[28px] not-italic text-[#0f172b] text-[20px] text-nowrap top-0 whitespace-pre">이자 정산 상세 (보유 기간 비례)</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[76.945px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[38.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">1Q 이자</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[76.945px]">
      <Paragraph12 />
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-[38.47px] not-italic text-[#62748e] text-[14px] text-center top-[24px] translate-x-[-50%] w-[76.945px]">2025-04-15</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Frame1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-0 top-0 w-[76.945px]" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return <div className="absolute h-[20px] left-0 top-0 w-[76.945px]" data-name="Paragraph" />;
}

function Frame2() {
  return (
    <div className="absolute h-[40px] left-[220px] top-0 w-[76.945px]">
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[39px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">P2P 거래</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-[38.66px] not-italic text-[#62748e] text-[14px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">2025-06-15</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[624.52px] top-0 w-[76.945px]" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[38.5px] not-italic text-[#0f172b] text-[14px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">2Q 이자</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-[38.5px] not-italic text-[#62748e] text-[14px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">2025-07-15</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[1169.05px] top-0 w-[76.945px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Frame2 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#cad5e2] h-[4px] left-0 top-[-1px] w-[1245px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#f54900] h-[4px] left-[666px] top-[-1px] w-[579px]" data-name="Container" />;
}

function Container21() {
  return <div className="absolute bg-emerald-500 left-0 rounded-[1.67772e+07px] size-[12px] top-[-5px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-[#7f22fe] left-[662px] rounded-[1.67772e+07px] size-[12px] top-[-5px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-[#f54900] left-[1236px] rounded-[1.67772e+07px] size-[12px] top-[-5px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="h-[8px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[924px] top-0">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[14px] text-center text-nowrap whitespace-pre">30일 (매수자 보유)</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[341px] not-italic text-[14px] text-blue-500 text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">61일 (매도자 보유)</p>
      <Frame />
    </div>
  );
}

function ProRataTimeline() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProRataTimeline">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-[36px] relative w-full">
          <Container18 />
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] left-[8px] not-italic text-[#0f172b] text-[14px] text-nowrap top-[9.25px] whitespace-pre">구분</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">보유 기간</p>
        </div>
      </div>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap whitespace-pre">거래 수량</p>
        </div>
      </div>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">분기 이자</p>
        </div>
      </div>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">정산 비율</p>
        </div>
      </div>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="basis-0 bg-[#f3f5f7] grow h-full min-h-px min-w-px relative shrink-0" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[42px] py-[9px] relative size-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[14px] text-nowrap text-right whitespace-pre">정산 금액</p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-slate-50 content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Link to="/token-detail" className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[#f54900] text-[14px] text-nowrap top-[14px] whitespace-pre hover:underline cursor-pointer">매도자 (신한투자증권)</Link>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-right whitespace-pre">61일 (04-15 ~ 06-15)</p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">30억</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">0.45억</p>
    </div>
  );
}

function TableCell3() {
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

function TableCell4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">67.0%</p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[14px] text-nowrap text-right whitespace-pre">0.30억</p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-red-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-blue-500 text-nowrap top-[14px] whitespace-pre">매도자 (투자자 E)</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap text-right whitespace-pre">30일 (06-15 ~ 07-15)</p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">30억</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007a55] text-[14px] text-nowrap text-right whitespace-pre">0.45억</p>
    </div>
  );
}

function TableCell9() {
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

function TableCell10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">33.0%</p>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[29px] py-[14px] relative w-full">
          <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-blue-500 text-nowrap text-right whitespace-pre">0.15억</p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-blue-50 content-stretch flex items-center relative shrink-0 w-full" data-name="TableRow">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">거래 체결 완료</p>
      <ProRataTimeline />
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">2분기 이자 정산 (2025-04-15 ~ 2025-07-15)</p>
      <Table />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center p-[25px] relative w-full">
          <CardTitle />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 전</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">300억원 (60.0%)</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph19 />
          <Paragraph20 />
        </div>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 후</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#f54900] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">270억원 (54.0%)</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph21 />
          <Paragraph22 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame6 />
    </div>
  );
}

function TrancheDetailCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TrancheDetailCard">
      <Container29 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">매도자 보유량</p>
      <TrancheDetailCard1 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 전</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">0원 (0%)</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph23 />
          <Paragraph24 />
        </div>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">거래 후</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-blue-500 text-nowrap top-[-0.5px] whitespace-pre">30억원 (6.0%)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph25 />
          <Paragraph26 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame7 />
    </div>
  );
}

function TrancheDetailCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TrancheDetailCard">
      <Container33 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap whitespace-pre">매수자 보유량</p>
      <TrancheDetailCard2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#0f172b]">TX Hash</p>
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[normal] relative shrink-0 text-green-800">0x7a8b9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-emerald-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">거래 정보</p>
        <Frame14 />
        <Frame15 />
        <Container34 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Primitive.div">
      <Card2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-[#45556c]">토큰 매각 대금</p>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 text-[#0f172b]">30.6억원</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-[#45556c]">2Q 이자 선정산</p>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 text-[#0f172b]">+0.30억원</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f54900] text-[14px] text-nowrap whitespace-pre">매도자 수령 (신한투자증권)</p>
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-red-50 box-border content-stretch flex flex-col gap-[4px] h-[104px] items-start p-[12px] relative rounded-[10px] shrink-0 w-[305px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc6c6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame19 />
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-[#45556c]">토큰 매각 대금</p>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 text-[#0f172b]">30.6억원</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre">
      <p className="font-['Pretendard_GOV:Medium',sans-serif] relative shrink-0 text-[#45556c]">2Q 이자 수령(07-15)</p>
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] relative shrink-0 text-[#0f172b]">0.15억원</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-blue-500 text-nowrap whitespace-pre">매수자 지급 (투자자 E)</p>
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 bg-blue-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c0dbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container38 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
        <span className="font-['Pretendard_GOV:Medium',sans-serif]">거래 완료 | 이자 정산 완료 | 소유권 이전 완료</span> <span className="font-['Pretendard_GOV:Regular',sans-serif]">(블록체인 기록)</span>
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-slate-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c0dbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <Paragraph27 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f172b] text-[20px] text-nowrap whitespace-pre">정산 내역</p>
        <Frame16 />
        <Container40 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[30px] items-start p-[25px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Primitive.div">
      <Card3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <PrimitiveDiv1 />
      <PrimitiveDiv2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-1/2 pb-[130px] pt-[32px] px-[32px] top-[174px] translate-x-[-50%] w-[1440px]" data-name="Main Content">
      <PrimitiveDiv />
      <Card1 />
      <Frame13 />
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

function Container41() {
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
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">신한캐피탈 토큰증권 P2P 거래</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[36px] relative shrink-0 w-[371.172px]" data-name="Container">
      <Link to="/" className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[371.172px] cursor-pointer">
        <Container41 />
        <Heading />
      </Link>
    </div>
  );
}

function Icon1() {
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

function Container43() {
  return (
    <div className="bg-[rgba(42,63,236,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph28() {
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
        <Container43 />
        <Paragraph28 />
        <Badge />
      </div>
    </div>
  );
}

function Icon2() {
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
        <Icon2 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Button />
    </div>
  );
}

function InvestorHeaderNew1() {
  return (
    <div className="absolute bg-[#622daa] box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[272px] top-0 w-[1920px]" data-name="InvestorHeaderNew">
      <div aria-hidden="true" className="absolute border-[#1447e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container44 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">P2P 거래 상세</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">토큰 직거래 및 이자 정산 (2025-11-30 기준)</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph29 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[109px] items-start left-0 pb-px pt-[24px] px-[272px] top-[65px] w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Container45 />
    </div>
  );
}

export default function ShcUi007P2P() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="SHC_UI_007_P2P거래화면 1">
      <MainContent />
      <InvestorHeaderNew1 />
      <Container46 />
    </div>
  );
}