import { MonopolyPage } from './app.po';

describe('monopoly App', function() {
  let page: MonopolyPage;

  beforeEach(() => {
    page = new MonopolyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
