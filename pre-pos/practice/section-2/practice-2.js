function count_same_elements(collection) {
  //在这里写入代码
  var tem = collection[0];
  var number = 1;
  var newCollection = [{key:tem, count:number}];

  for(var i = 1; i < collection.length; i++){

  	if(collection[i] === tem)
  		newCollection[newCollection.length-1].count++;
  	
  	else{
  		tem = collection[i];
  		number = 1;
  		if(collection[i].indexOf('-')>=0){
  			var array = tem.split('-');
  			tem = array[0];
  			number = Number(array[1]);
  		}
  		newCollection.push({key:tem, count:number});
  	}
    
  }

  return newCollection;
}
