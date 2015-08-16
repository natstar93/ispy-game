describe('Changing views', function() {

  var photoAlbumNav = element(by.className('tab-nav')).element(by.className('ion-images'));
 
  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('iSpy London');
  });

  it('should start on Homepage', function() {
    var elm = element(by.className('tab-item-active'));
    expect(elm.getAttribute("icon-on")).toContain("ion-home");
  });

  it('navigates to Photo Album', function() {
    photoAlbumNav.click();
    var elm = element(by.className('tab-item-active'));
    expect(elm.getAttribute("icon-on")).toContain("ion-images");
  });
});