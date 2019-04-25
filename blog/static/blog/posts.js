function postClick(e){
  var id = e.id;
  var text = "#"+id;
  console.log(text);
  $(text).modal('toggle');
}
