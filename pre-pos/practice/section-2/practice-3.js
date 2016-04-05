function count_same_elements(collection) {
  //在这里写入代码
  var tem = collection[0];
  var newCollection = [{name:tem,summary:1}];

  for(var i = 1; i < collection.length; i++){

    if(collection[i] === tem)
        newCollection[newCollection.length-1].summary++;
    
    else if (collection[i].length>1) 
      deal(newCollection,collection,i);
    
    else{
      tem = collection[i];
      newCollection.push({name:tem, summary:1});
    }
  }

  return newCollection;
}

function deal(newCollection,collection,i){
  if(collection[i].indexOf(':') > -1)
      deal1_colon(newCollection,collection,i);
    
    else if(collection[i].indexOf('-') > -1)
      deal_slash(newCollection,collection,i);
    
    else if (collection[i].indexOf('[') > -1)
      deal_brackets(newCollection,collection,i);
}

function deal1_colon(newCollection,collection,i){
      var array = collection[i].split(':');
      newCollection.push({name:array[0], summary:Number(array[1])});
}

function deal_slash(newCollection,collection,i){
      var array = collection[i].split('-');

      if(newCollection[newCollection.length-1].name != array[0])
        newCollection.push({name:array[0], summary:Number(array[1])});
      
      else
        newCollection[newCollection.length-1].summary += Number(array[1]);    
}

function deal_brackets(newCollection,collection,i){
      var array = collection[i].split('[');
      array = array[1].split(']');
      newCollection[newCollection.length-1].summary += Number(array[0]);
}
