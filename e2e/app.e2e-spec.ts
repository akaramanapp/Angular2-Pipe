import { ProjectnewPage } from './app.po';

describe('projectnew App', function() {
  let page: ProjectnewPage;

  beforeEach(() => {
    page = new ProjectnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
