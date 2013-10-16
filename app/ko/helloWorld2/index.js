define(['knockout','jquery'], function (ko,$) {
    //VARIABLES
    var self = this;
    
    var fakeData = [{
    "title": "Wire the money to Panama",
    "isDone": true},
{
    "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"",
    "isDone": false},
{
    "title": "Book taxi to airport",
    "isDone": false},
{
    "title": "Arrange for someone to look after the cat",
    "isDone": false}];
    
    var ajaxTest = ko.observable("Test1");
    
    
    
    //END VARIABLES

    return  {
        
        activate: activate,
        viewAttached:viewAttached,
        getFakeData:getFakeData,
        ajaxTest:ajaxTest
    };
    
    var getFakeData = function(){
        alert('in');
      $.ajax("/echo/json/", {
            data: {
                json: ko.toJSON({
                    tasks: this.tasks
                })
            },
            type: "POST",
            dataType: 'json'
            
        }).done(  function(result) {
                
               self.ajaxTest('Got fake data');
                  alert('ajax call complete..variable value is ' + self.ajaxTest() );
            });
        
        
    };


    function activate(){
       
       return getFakeData;
   }
   
   function viewAttached(){
        //getFakeData;
   }
   
});
