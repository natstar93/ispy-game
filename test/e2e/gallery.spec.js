describe('Gallery', function() {

  var photoAlbumNav = element(by.className('tab-nav')).element(by.className('ion-images'));

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  describe('empty gallery', function() {
    it('has placeholder images', function() {
      photoAlbumNav.click();
      var elm = element.all(by.className('gallery-thumbnail')).get(1);
      expect(elm.getAttribute("src")).toContain("pigeonplaceholder.gif");
    });
  });


});