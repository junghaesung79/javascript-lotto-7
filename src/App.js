class App {
  constructor() {
    this.interface = UserInterface();
    this.lottoService = LottoService();
  }

  async run() {
    const money = interface.processMoneyInput();
    const ticketsData = lottoService.purchaseTickets(money);
    lottoService.showTickets(ticketsData);

    const winningNumbersData = interface.processNumbersInput();
    const report = lottoService.requestAnalyze(winningNumbersData);
    lottoService.showReport(report);
  }
}

export default App;
