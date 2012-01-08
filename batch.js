var opts = require('opts'),
	im = require('imagemagick');
//optionの指定
opts.parse([
{
	  'short' : 'img'
	, 'long' : 'image'
	, 'description' : 'image path'
	, 'value' : true
	, 'required' : true 
}
]);
console.log('node batch start==========');
var images_path = opts.get('image'),
    image_path_ar = images_path.split(' ');
for(var i = image_path_ar.length; i--;){
	var file_name = image_path_ar[i].match(".+/(.+?)$")[1];
console.log(file_name);
	im.resize({
		srcPath : image_path_ar[i]
		, dstPath : './images/thumbnail/'+file_name+'_small.jpg' 
		, width : 100
	},function(err,stdout,stderr){
		if(err) throw err;		//えらった
		console.log('ok?');
	});
/*
	im.readMetadata(image_path_ar[i],function(err,mdata){
			if(err) throw err;	//えらったらログ出す
			console.dir(mdata);
			});
*/
}
