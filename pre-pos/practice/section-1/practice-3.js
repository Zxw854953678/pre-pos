function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var Array = [];

  for(var i = 0; i < collection_a.length; i++){

  	for(var j = 0; j < object_b.value.length; j++){
  		 
  	if (object_b.value[j] == collection_a[i]) 
  		Array.push(collection_a[i]);

  	}
  }
 
  return Array;
}


