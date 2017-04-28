 Template.addphotos.events({
    'submit .addphotoform': function()
    {
        var file = $('#myphoto').get(0).files[0];
        
        if (file){
            fsFile = new FS.File(file);
            Photos.insert(fsFile, function(err, result){
                if(err){
                    console.log(err);
                }
                else{
                    toastr.success('File uploaded');
                    Router.go('/');
                }
            });
        }
        else
        {
            toastr.error("No file uploaded");
            Router.go('/add');
        }
        return false;
    }
 });