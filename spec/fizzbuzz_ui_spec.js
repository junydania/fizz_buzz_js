describe('Fizz Buzz', function() {
  beforeEach(function() {

    // jasmine.getFixtures().fixturesPath = "base/spec/fixtures/";
    // loadFixtures('index.html');
    // $.holdReady(false);

    jasmine.getFixtures().clearCache();
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base/spec/fixtures';
    f.load('index.html');
    $.holdReady(false);

  });


  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("displays text", function() {
    it("when button is clicked", function() {
      $('#number').val(45);
      $('#calculate').trigger('click');
      expect($('#display_message').text()).toBe('Fizz Buzz');
    });
  });
});
