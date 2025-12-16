import { Link } from "react-router-dom";

interface RouteEntry {
  label: string;
  path: string;
  description?: string;
}

interface Section {
  title: string;
  items: RouteEntry[];
}

const SECTIONS: Section[] = [
  {
    title: "매입 플로우",
    items: [
      { label: "1단계: 매입 신청", path: "/purchase", description: "sKRW → 토큰 매입 신청" },
      { label: "2단계: 매입 완료", path: "/purchase/complete", description: "매입 결과 및 요약" },
    ],
  },
  {
    title: "보유 자산",
    items: [
      { label: "보유 자산 요약", path: "/assets", description: "보유 sMMF 및 수익 현황" },
    ],
  },
  {
    title: "환매 플로우",
    items: [
      { label: "1단계: 환매 신청", path: "/redeem", description: "보유 sMMF 환매 요청" },
      { label: "2단계: 환매 완료", path: "/redeem/complete", description: "환매 결과 및 입금 정보" },
    ],
  },
];

export function ScreenSummaryPanel() {
  return (
    <aside className="flex h-screen w-[420px] flex-col gap-4 overflow-y-auto border-r border-[#d9dde6] bg-white/95 px-6 py-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#2a3fec]">SHA PoC Mobile</p>
        <h1 className="mt-2 text-2xl font-bold text-[#111111]">Quick Access</h1>
        <p className="mt-2 text-sm text-[#777e8c]">
          원하는 화면 선택 시 우측 모바일 영역에 해당 화면이 표시됩니다.
        </p>
        <p className="mt-2 text-xs text-[#999ea4]">
          단축키: <kbd className="px-1.5 py-0.5 rounded bg-[#f4f6f9] border border-[#e5e8f2] font-mono text-[#2a3fec]">Cmd/Ctrl + Shift + A</kbd>
        </p>
      </header>

      <nav className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <section key={section.title} className="rounded-xl border border-[#e5e8f2] bg-white px-4 py-3">
            <h2 className="text-sm font-semibold text-[#333950]">{section.title}</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex flex-col gap-0.5 rounded-lg border border-transparent bg-[#f4f6f9] px-3 py-2 text-sm transition hover:border-[#2a3fec] hover:bg-white"
                  >
                    <span className="font-medium text-[#2a3fec]">{item.label}</span>
                    <span className="text-xs text-[#777e8c]">{item.path}</span>
                    {item.description ? (
                      <span className="text-xs text-[#999ea4]">{item.description}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}

