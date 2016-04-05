function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newCollection = [{key:collection_a[0], count:1}];

  for(var i = 1; i < collection_a.length; i++){
  	Statistics(collection_a,newCollection,i);
  }

  for(i = 0; i < newCollection.length; i++){
    isExit(object_b,newCollection,i);
  }

  return newCollection;
}

function Statistics(collection_a,newCollection,i){

    if(collection_a[i] === newCollection[newCollection.length-1].key)
      newCollection[newCollection.length-1].count++;
    
    else{
      if(collection_a[i].indexOf('-')>=0){
        var array = collection_a[i].split('-');
        newCollection.push({key:array[0], count:Number(array[1])});
      }
      else
        newCollection.push({key:collection_a[i], count:1});
    }
  
}

function isExit(object_b,collection_c,i){

  for(j = 0; j < object_b.value.length; j++){

    if (collection_c[i].key === object_b.value[j]) {
      judge(collection_c,i);
      break;
    }
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
