function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var Array = [];

  for(var i=0;i<collection_a.length;i++){

  	for(var j=0;j<object_b.value.length;j++){

  		if(collection_a[i].key == object_b.value[j])
  			Array.push(object_b.value[j]);
  	}
  }
  
  return Array;
}
