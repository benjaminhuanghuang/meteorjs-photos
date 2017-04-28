 Template.addphotos.events({
    'submit .addphotoform': function()
    {
        var file = $('#myphoto').get(0).files[0];
        
        if (file){
            toastr.erro("No file uploaded");
            Router.go('/add');
        }
        return false;
    }
 });