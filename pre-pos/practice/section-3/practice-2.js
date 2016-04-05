function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = collection_a;
  var flag = 1;

  for(var i = 0; i < collection_a.length && flag != object_b.length; i++){

  	for(var j = 0; j < object_b.value.length; j++){

  		if(collection_a[i].key === object_b.value[j]){
  			flag++;
  			deal(collection_a,collection_c,i);
  			break;
  		}
  	}
  }
 
  return collection_c;
}

function deal(collection_a,collection_c,var1){

  if(collection_a[var1].count%3 === 1)
      collection_c[var1].count -= (collection_a[var1].count-1)/3;
  else if (collection_a[var1].count%3 === 2) 
      collection_c[var1].count -= (collection_a[var1].count-2)/3;
  else
      collection_c[var1].count -= collection_a[var1].count/3;
    
}