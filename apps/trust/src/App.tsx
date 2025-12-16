import { useState } from "react";
import ShcUi from "./imports/ShcUi009신탁사모니터링목업1";
import ShcUi010Pf from "./imports/ShcUi010Pf대리은행지시목업1-1-1166";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"monitoring" | "bank-instruction">("monitoring");

  if (currentPage === "bank-instruction") {
    return <ShcUi010Pf onNavigateToMonitoring={() => setCurrentPage("monitoring")} />;
  }

  return <ShcUi onNavigateToBankInstruction={() => setCurrentPage("bank-instruction")} />;
}
