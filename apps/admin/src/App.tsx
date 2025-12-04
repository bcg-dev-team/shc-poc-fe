import { useState } from 'react';
import svgPaths from "./imports/svg-64p4pl5yal";
import Dashboard from './components/Dashboard';
import SubscriptionManagement from './components/SubscriptionManagement';
import SubscriptionDetailTrB from './components/SubscriptionDetailTrB';
import SubscriptionDetailTrA from './components/SubscriptionDetailTrA';
import SubscriptionStatusTrA from './components/SubscriptionStatusTrA';
import SubscriptionStatusTrB from './components/SubscriptionStatusTrB';
import InterestSettlementDetail from './components/InterestSettlementDetail';

// Type definitions
interface FormData {
  projectName: string;
  collateralType: string;
  trustee: string;
  totalAmount: string;
  issueDate: string;
  maturityDate: string;
  trancheA: {
    amount: string;
    interestRate: string;
    paymentMethod: string;
    quarterlyInterest: string;
    priority: string;
    investors: string;
  };
  trancheB: {
    amount: string;
    interestRate: string;
    paymentMethod: string;
    quarterlyInterest: string;
    priority: string;
    investors: string;
  };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'form' | 'dashboard' | 'subscription' | 'subscriptionDetailTrB' | 'subscriptionDetailTrA' | 'subscriptionStatusTrA' | 'subscriptionStatusTrB' | 'interestSettlement'>('form');
  const [dashboardTab, setDashboardTab] = useState<'통합' | 'Tranche A' | 'Tranche B'>('통합');
  const [formData, setFormData] = useState<FormData>({
    projectName: '강남학동 재개발 PF',
    collateralType: '부동산 PF (1순위 근저당)',
    trustee: '한국자산신탁',
    totalAmount: '900',
    issueDate: '2025-01-15',
    maturityDate: '2028-01-15',
    trancheA: {
      amount: '500',
      interestRate: '6.0',
      paymentMethod: '3개월 후불',
      quarterlyInterest: '7.5',
      priority: '1순위 (Senior)',
      investors: '기관투자자 (15명)'
    },
    trancheB: {
      amount: '400',
      interestRate: '12.0',
      paymentMethod: '3개월 후불',
      quarterlyInterest: '12.0',
      priority: '2순위 (Mezzanine)',
      investors: '기관/개인 (8명)'
    }
  });

  const [showCollateralDropdown, setShowCollateralDropdown] = useState(false);
  const [showPriorityADropdown, setShowPriorityADropdown] = useState(false);
  const [showPriorityBDropdown, setShowPriorityBDropdown] = useState(false);
  const [showInvestorsADropdown, setShowInvestorsADropdown] = useState(false);
  const [showInvestorsBDropdown, setShowInvestorsBDropdown] = useState(false);

  const collateralOptions = [
    '부동산 PF (1순위 근저당)',
    '부동산 PF (2순위 근저당)',
    '일반 담보대출'
  ];

  const priorityOptions = [
    '1순위 (Senior)',
    '2순위 (Mezzanine)',
    '3순위 (Junior)'
  ];

  const investorOptions = [
    '기관투자자 (15명)',
    '기관투자자 (20명)',
    '개인투자자 (10명)',
    '기관/개인 (8명)',
    '기관/개인 (12명)'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTrancheChange = (tranche: 'trancheA' | 'trancheB', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [tranche]: { ...prev[tranche], [field]: value }
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('상품이 등록되었습니다!');
    setCurrentPage('dashboard');
  };

  const handleCancel = () => {
    if (confirm('작성중인 내용이 있습니다. 취소하시겠습니까?')) {
      // Reset or navigate away
      console.log('Cancelled');
    }
  };

  // Show Dashboard if submitted
  if (currentPage === 'dashboard') {
    return <Dashboard onNavigateToSubscription={() => setCurrentPage('subscription')} onNavigateHome={() => setCurrentPage('form')} onNavigateToInterestDetail={() => setCurrentPage('interestSettlement')} onNavigateToTrancheDetail={() => {}} onNavigateToDetailTrA={() => setCurrentPage('subscriptionDetailTrA')} onNavigateToDetailTrB={() => setCurrentPage('subscriptionDetailTrB')} onNavigateToStatusTrA={() => setCurrentPage('subscriptionStatusTrA')} onNavigateToStatusTrB={() => setCurrentPage('subscriptionStatusTrB')} />;
  }

  // Show Subscription Management if requested
  if (currentPage === 'subscription') {
    return <SubscriptionManagement onNavigateHome={() => setCurrentPage('form')} onNavigateToDashboard={() => setCurrentPage('dashboard')} onNavigateToDetailTrB={() => setCurrentPage('subscriptionDetailTrB')} onNavigateToDetailTrA={() => setCurrentPage('subscriptionDetailTrA')} />;
  }

  // Show Subscription Detail TrB if requested
  if (currentPage === 'subscriptionDetailTrB') {
    return <SubscriptionDetailTrB onNavigateHome={() => setCurrentPage('form')} onNavigateToDashboard={() => {
      setDashboardTab('Tranche B');
      setCurrentPage('dashboard');
    }} />;
  }

  // Show Subscription Detail TrA if requested
  if (currentPage === 'subscriptionDetailTrA') {
    return <SubscriptionDetailTrA onNavigateHome={() => setCurrentPage('form')} onNavigateToDashboard={() => {
      setDashboardTab('Tranche A');
      setCurrentPage('dashboard');
    }} />;
  }

  // Show Subscription Status TrA if requested
  if (currentPage === 'subscriptionStatusTrA') {
    return <SubscriptionStatusTrA onNavigateHome={() => setCurrentPage('form')} onNavigateToDashboard={() => setCurrentPage('dashboard')} />;
  }

  // Show Subscription Status TrB if requested
  if (currentPage === 'subscriptionStatusTrB') {
    return <SubscriptionStatusTrB onNavigateHome={() => setCurrentPage('form')} onNavigateToDashboard={() => setCurrentPage('dashboard')} />;
  }

  // Show Interest Settlement Detail if requested
  if (currentPage === 'interestSettlement') {
    return <InterestSettlementDetail onBack={() => setCurrentPage('dashboard')} onNavigateHome={() => setCurrentPage('form')} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen w-full" data-name="SHC_UI_001_상품등록_2개트렌치 1">
      {/* Admin Header */}
      <div className="bg-blue-800 box-border content-stretch flex flex-col h-[65px] items-start pb-px pt-0 px-[272px] w-full border-b border-slate-200">
        <div className="content-stretch flex h-[64px] items-center justify-between w-full">
          <div className="h-[36px] w-[371.172px] flex gap-[12px] items-center">
            <div className="bg-[#2a3fec] rounded-[10px] size-[36px] flex items-center justify-center">
              <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] text-[16px] text-white">신</p>
            </div>
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] text-[20px] text-white">신한캐피탈 토큰증권 발행 시스템</p>
          </div>
          <div className="bg-white h-[36px] rounded-[8px] border border-slate-200 px-2 py-1 flex gap-[8px] items-center">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[rgba(42,63,236,0.1)] rounded-full size-[32px] flex items-center justify-center">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p399eca00} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.pc93b400} stroke="#2A3FEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#0f172b]">관리자</p>
              <div className="bg-[#2a3fec] rounded-[8px] px-[9px] py-[3px]">
                <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[16px] text-[12px] text-white">Admin</p>
              </div>
            </div>
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="#62748E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white box-border flex flex-col h-[109px] items-start pb-px pt-[24px] px-[272px] w-full border-b border-slate-200">
        <div className="content-stretch flex h-[60px] items-center justify-between w-full">
          <div className="h-[60px] flex flex-col gap-[4px]">
            <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] text-[24px] text-[#0f172b]">상품 등록</p>
            <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">PF 토큰증권 신규 상품 등록 (2개 트랜치 구조)</p>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="box-border flex flex-col gap-[24px] items-end pb-[130px] pt-[32px] px-[272px] w-full">
        {/* Basic Info Card */}
        <div className="bg-white rounded-[14px] border border-slate-200 w-full p-[25px] flex flex-col gap-[30px]">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#eaeaea] rounded-[10px] size-[36px] p-[8px]">
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M5 18.3333V3.33333C5 2.89131 5.17559 2.46738 5.48816 2.15482C5.80072 1.84226 6.22464 1.66667 6.66667 1.66667H13.3333C13.7754 1.66667 14.1993 1.84226 14.5118 2.15482C14.8244 2.46738 15 2.89131 15 3.33333V18.3333H5Z" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M5 10H3.33333C2.89131 10 2.46738 10.1756 2.15482 10.4882C1.84226 10.8007 1.66667 11.2246 1.66667 11.6667V16.6667C1.66667 17.1087 1.84226 17.5326 2.15482 17.8452C2.46738 18.1577 2.89131 18.3333 3.33333 18.3333H5" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 5H11.6667" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 8.33333H11.6667" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 11.6667H11.6667" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 15H11.6667" stroke="#303132" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">프로젝트 기본 정보</p>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">프로젝트 기본 정보를 입력하세요</p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            {/* Row 1 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">프로젝트명</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1 flex flex-col gap-[8px] relative">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">담보 유형</label>
                <button
                  onClick={() => setShowCollateralDropdown(!showCollateralDropdown)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[13px] py-px flex items-center justify-between border-0 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{formData.collateralType}</p>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M4 6L8 10L12 6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" opacity="0.5" />
                  </svg>
                </button>
                {showCollateralDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-[8px] shadow-lg z-10">
                    {collateralOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleInputChange('collateralType', option);
                          setShowCollateralDropdown(false);
                        }}
                        className="w-full px-[12px] py-[8px] text-left font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">신탁사</label>
                <input
                  type="text"
                  value={formData.trustee}
                  onChange={(e) => handleInputChange('trustee', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">총 발행규모</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.totalAmount}
                    onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Bold',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">억원</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">발행일</label>
                <input
                  type="date"
                  value={formData.issueDate}
                  onChange={(e) => handleInputChange('issueDate', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#717182] border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-neutral-950">만기일</label>
                <input
                  type="date"
                  value={formData.maturityDate}
                  onChange={(e) => handleInputChange('maturityDate', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-[#717182] border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tranche A Card */}
        <div className="bg-white rounded-[14px] border border-slate-200 w-full p-[25px] flex flex-col gap-[30px]">
          <div className="bg-blue-50 h-[46px] rounded-[8px] px-[16px] flex items-center">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">강남학동 Tr_A (선순위)</p>
          </div>

          <div className="flex flex-col gap-[24px]">
            {/* Row 1 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">발행 금액</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.trancheA.amount}
                    onChange={(e) => handleTrancheChange('trancheA', 'amount', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Bold',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">억원</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">표면 금리 (연)</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.trancheA.interestRate}
                    onChange={(e) => handleTrancheChange('trancheA', 'interestRate', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">%</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">이자 지급 방식</label>
                <input
                  type="text"
                  value={formData.trancheA.paymentMethod}
                  onChange={(e) => handleTrancheChange('trancheA', 'paymentMethod', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">분기 이자</label>
                <div className="bg-blue-50 h-[36px] rounded-[8px] border border-[#cce2ff] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.trancheA.quarterlyInterest}
                    onChange={(e) => handleTrancheChange('trancheA', 'quarterlyInterest', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Bold',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">억원</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px] relative">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">우선순위</label>
                <button
                  onClick={() => setShowPriorityADropdown(!showPriorityADropdown)}
                  className="bg-emerald-50 h-[36px] rounded-[8px] border border-[#a4f4cf] px-[13px] py-px flex items-center border-0 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[20px] text-[14px] text-[#049e55]">{formData.trancheA.priority}</p>
                </button>
                {showPriorityADropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-[8px] shadow-lg z-10">
                    {priorityOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleTrancheChange('trancheA', 'priority', option);
                          setShowPriorityADropdown(false);
                        }}
                        className="w-full px-[12px] py-[8px] text-left font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-[8px] relative">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">예상 투자자</label>
                <button
                  onClick={() => setShowInvestorsADropdown(!showInvestorsADropdown)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[13px] py-px flex items-center border-0 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{formData.trancheA.investors}</p>
                </button>
                {showInvestorsADropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-[8px] shadow-lg z-10">
                    {investorOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleTrancheChange('trancheA', 'investors', option);
                          setShowInvestorsADropdown(false);
                        }}
                        className="w-full px-[12px] py-[8px] text-left font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-[#ffd4af] p-[17px]">
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#ff7b00]">⚠️ 원금 상환 우선권 보유 | 담보 실행시 최우선 변제</p>
          </div>
        </div>

        {/* Tranche B Card */}
        <div className="bg-white rounded-[14px] border border-slate-200 w-full p-[25px] flex flex-col gap-[30px]">
          <div className="bg-amber-50 h-[46px] rounded-[8px] px-[16px] flex items-center">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[20px] text-[20px] text-[#0f172b]">강남학동 Tr_B (후순위)</p>
          </div>

          <div className="flex flex-col gap-[24px]">
            {/* Row 1 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">발행 금액</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.trancheB.amount}
                    onChange={(e) => handleTrancheChange('trancheB', 'amount', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Bold',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">억원</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">표면 금리 (연)</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <input
                    type="text"
                    value={formData.trancheB.interestRate}
                    onChange={(e) => handleTrancheChange('trancheB', 'interestRate', e.target.value)}
                    className="bg-transparent font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none flex-1"
                  />
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">%</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">이자 지급 방식</label>
                <input
                  type="text"
                  value={formData.trancheB.paymentMethod}
                  onChange={(e) => handleTrancheChange('trancheB', 'paymentMethod', e.target.value)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[24px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">분기 이자</label>
                <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[12px] py-[4px] flex items-center justify-between">
                  <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[14px] text-neutral-950">{formData.trancheB.quarterlyInterest}</p>
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#62748e]">억원</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-[8px] relative">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">우선순위</label>
                <button
                  onClick={() => setShowPriorityBDropdown(!showPriorityBDropdown)}
                  className="bg-[#fff1e5] h-[36px] rounded-[8px] border border-[#ffd4af] px-[13px] py-px flex items-center border-0 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[20px] text-[14px] text-[#ff7b00]">{formData.trancheB.priority}</p>
                </button>
                {showPriorityBDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-[8px] shadow-lg z-10">
                    {priorityOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleTrancheChange('trancheB', 'priority', option);
                          setShowPriorityBDropdown(false);
                        }}
                        className="w-full px-[12px] py-[8px] text-left font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-[8px] relative">
                <label className="font-['Pretendard_GOV:Medium',sans-serif] leading-[14px] text-[14px] text-neutral-950">예상 투자자</label>
                <button
                  onClick={() => setShowInvestorsBDropdown(!showInvestorsBDropdown)}
                  className="bg-[#f3f3f5] h-[36px] rounded-[8px] px-[13px] py-px flex items-center border-0 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{formData.trancheB.investors}</p>
                </button>
                {showInvestorsBDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-slate-200 rounded-[8px] shadow-lg z-10">
                    {investorOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleTrancheChange('trancheB', 'investors', option);
                          setShowInvestorsBDropdown(false);
                        }}
                        className="w-full px-[12px] py-[8px] text-left font-['Pretendard_GOV:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-slate-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-[#ffd4af] p-[17px]">
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[14px] text-[#ff7b00]">⚠️ 고수익-고위험 | 선순위 상환 후 잔여 재원으로 상환</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-[14px] border border-slate-200 w-full p-[25px] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[12px]">
            <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">발행 정보</p>
            <div className="flex gap-[16px]">
              <div className="flex-1 bg-slate-50 rounded-[10px] p-[12px] flex flex-col gap-[4px]">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">총 발행</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">
                  {formData.totalAmount}억원
                  <span className="font-['Pretendard_GOV:Regular',sans-serif]">{` | Tr_A: `}</span>
                  <span className="font-['Pretendard_GOV:Regular',sans-serif] text-[#007eec]">{formData.trancheA.amount}억 ({formData.trancheA.interestRate}%)</span>
                  <span className="font-['Pretendard_GOV:Regular',sans-serif]">{` + Tr_B: `}</span>
                  <span className="font-['Pretendard_GOV:Regular',sans-serif] text-[#ff7b00]">{formData.trancheB.amount}억 ({formData.trancheB.interestRate}%)</span>
                </p>
              </div>
              <div className="flex-1 bg-slate-50 rounded-[10px] p-[12px] flex flex-col gap-[4px]">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">이자 지급</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">3개월 후불 (매 15일)</p>
              </div>
              <div className="flex-1 bg-slate-50 rounded-[10px] p-[12px] flex flex-col gap-[4px]">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] text-[14px] text-[#45556c]">만기일</p>
                <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] text-[16px] text-[#0f172b]">{formData.maturityDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[12px]">
          <button
            onClick={handleCancel}
            className="bg-white h-[52px] rounded-[8px] border border-[rgba(0,0,0,0.8)] px-[24px] py-[10px] flex gap-[8px] items-center justify-center w-[200px] hover:bg-slate-50 transition-colors"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M12 4L4 12" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M4 4L12 12" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-neutral-950">취소</p>
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#2a3fec] h-[52px] rounded-[8px] px-[24px] py-[10px] flex gap-[8px] items-center justify-center w-[200px] hover:bg-[#1e2fcc] transition-colors"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3c401780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p56b0600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p17caa400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[20px] text-[16px] text-white">상품 등록</p>
          </button>
        </div>
      </div>
    </div>
  );
}