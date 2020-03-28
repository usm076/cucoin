var formidable=require('formidable');
var http=require('http');

http.createServer(function(req, res){
if(req.url=='/fileupload')
{
   var form=new formidable.IncomingForm();
   form.parse(req, function(error, fields, files){
    res.write('File Uploaded');
    res.end();

   });

}
else{
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" >');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}


}).listen(8080);
