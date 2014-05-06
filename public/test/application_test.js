module('Application', {
   setup: function(){
       App.reset();
   }
});


test('footer', function(){
   visit('/');
    andThen(function(){
        var year = new Date().getFullYear(),
            expect = 'Copyright &copy; ' + year + ' Geleyi Inc',
            actual = $.trim(find('footer').text());

        equal(actual,expect);
    });
});