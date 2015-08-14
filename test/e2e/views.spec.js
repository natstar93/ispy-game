describe('Changing views', function() {

  beforeEach(function() {
    browser.get('http://192.168.50.174:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iSpy London');
  });

  it('should start on Homepage', function() {
    expect(element(by.css('ion-nav-view')).getText()).toContain('Home')
  })
})