function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var tem = collection_a[0];
  var collection_c = [{key:tem ,count:1}];
 
  for(var i=1; i < collection_a.length; i++){

    Statistics(collection_a,collection_c,i);
}
  
  for(var i = 0; i < collection_c.length; i++){

  	isExit(object_b,collection_c,i);
  }

  return collection_c;
}

function isExit(object_b,collection_c,i){

	for(var j = 0; j < object_b.value.length; j++){

  		if(collection_c[i].key === object_b.value[j]){
  			judge(collection_c,i);
  			break;
  		}

  	}
}

function Statistics(collection_a,collection_c,i){

  if(collection_a[i] === collection_c[collection_c.length-1].key)
      collection_c[collection_c.length-1].count++;

    else {
      tem = collection_a[i];
      collection_c.push({key:tem ,count:1});
    }
}

function judge(collection_c,i){

  if(collection_c[i].count % 3 === 1)
    collection_c[i].count -= (collection_c[i].count-1)/3;

  else if(collection_c[i].count % 3 === 2)
    collection_c[i].count -= ((collection_c[i].count-2)/3);

  else
    collection_c[i].count -= collection_c[i].count/3;
}
