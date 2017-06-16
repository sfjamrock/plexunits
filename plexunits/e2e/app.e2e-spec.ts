import { PlexunitsPage } from './app.po';

describe('plexunits App', () => {
  let page: PlexunitsPage;

  beforeEach(() => {
    page = new PlexunitsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
