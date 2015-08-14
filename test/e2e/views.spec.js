describe('Changing views', function() {

  var homeNav = element(by.className('tab-nav')).element(by.className('ion-images'));
 // var homeNav = element(by.xpath('/html/body/ion-nav-view/ion-tabs/div/a[1]/i'));

  beforeEach(function() {
    browser.get('http://192.168.50.174:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iSpy London');
  });

  it('should start on Homepage', function() {
    expect(element(by.css('ion-nav-bar')).getText()).toContain('iSpy London');
  });

  it('navigates to Photo Album', function() {
    homeNav.click();
    expect(element(by.css('ion-nav-bar')).getText()).toContain('Photo Album');
  });
});