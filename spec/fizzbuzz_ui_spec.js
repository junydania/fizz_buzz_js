describe('Fizz Buzz', function() {
  beforeEach(function() {

    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });
  
  describe("displays text", function() {

    it("when button is clicked", function() {
      $('#text').val('Some random text...');
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('Some random text...');
    });
  });
});
