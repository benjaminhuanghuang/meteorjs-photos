Router.configure({
    layoutTemplate:'layout'

});

Router.map(function(){
    this.route('photos',{
        path:'/',
        template:'photos'
    });

    this.route('addphotos',{
        path:'/add',
        template:'addphotos'
    });

    this.route('photo',{
        path:'/photos/:id',
        template:'photo',
        data:function(){
            tempatleData = {
                photo:Photos.find({_id:this.params._id})
            };
            return tempatleData;
        }
    });
});  