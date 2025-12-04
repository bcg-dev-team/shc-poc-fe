import svgPaths from "./svg-6jrihoaxg6";

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

export default function Container() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
          <SendMoney />
        </div>
      </div>
    </div>
  );
}