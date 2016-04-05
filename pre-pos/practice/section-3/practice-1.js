function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = collection_a;
 
  for(var i = 0; i < object_b.value.length; i++){

  	for(var j = 0; j < collection_a.length; j++){
 
  		if(collection_a[j].key === object_b.value[i]){

  			collection_c[j].count--;
  			break;
  		}
  	}
  }
 
  return collection_c;
}
