import { AngularCliSeoPage } from './app.po';

describe('angular-cli-seo App', () => {
  let page: AngularCliSeoPage;

  beforeEach(() => {
    page = new AngularCliSeoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
